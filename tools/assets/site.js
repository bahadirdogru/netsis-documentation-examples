(function () {
  'use strict';
  var root = document.documentElement;

  // Tema: sistem → açık → koyu döngüsü
  var themeBtn = document.querySelector('.theme-btn');
  function applyHl() {
    var t = root.dataset.theme;
    var light = document.getElementById('hl-light'), dark = document.getElementById('hl-dark');
    if (!light || !dark) return;
    light.media = t === 'dark' ? 'not all' : t === 'light' ? 'all' : '(prefers-color-scheme: light)';
    dark.media = t === 'light' ? 'not all' : t === 'dark' ? 'all' : '(prefers-color-scheme: dark)';
  }
  applyHl();
  themeBtn && themeBtn.addEventListener('click', function () {
    var next = !root.dataset.theme ? 'light' : root.dataset.theme === 'light' ? 'dark' : '';
    if (next) root.dataset.theme = next; else delete root.dataset.theme;
    try { next ? localStorage.setItem('theme', next) : localStorage.removeItem('theme'); } catch (e) {}
    applyHl();
  });

  // Mobil menü
  var menuBtn = document.querySelector('.menu-btn');
  menuBtn && menuBtn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function (e) {
    if (document.body.classList.contains('nav-open') && !e.target.closest('.sidebar') && !e.target.closest('.menu-btn')) {
      document.body.classList.remove('nav-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
  var cur = document.querySelector('.sidebar a[aria-current="page"]');
  if (cur) {
    var sb = document.getElementById('sidebar');
    var top = cur.offsetTop - sb.offsetTop;
    if (top > sb.clientHeight - 60) sb.scrollTop = top - sb.clientHeight / 2;
  }

  // Kod vurgulama ve kopyalama
  document.querySelectorAll('article pre code').forEach(function (el) {
    if (window.hljs) { try { window.hljs.highlightElement(el); } catch (e) {} }
    var btn = document.createElement('button');
    btn.className = 'copy-btn'; btn.type = 'button'; btn.textContent = 'Kopyala';
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(el.innerText).then(function () {
        btn.textContent = 'Kopyalandı'; setTimeout(function () { btn.textContent = 'Kopyala'; }, 1500);
      });
    });
    el.parentNode.appendChild(btn);
  });

  // "Bu sayfada" etkin başlık
  var tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove('active'); });
          var a = map[en.target.id]; a && a.classList.add('active');
        }
      });
    }, { rootMargin: '0px 0px -75% 0px' });
    Object.keys(map).forEach(function (id) { var h = document.getElementById(id); h && io.observe(h); });
  }

  // Tablo listesi süzgeci
  var filter = document.getElementById('table-filter');
  if (filter) {
    var rows = filter.closest('article').querySelector('.table-wrap tbody').rows;
    filter.addEventListener('input', function () {
      var q = trLower(filter.value.trim());
      for (var i = 0; i < rows.length; i++) rows[i].hidden = q && trLower(rows[i].textContent).indexOf(q) < 0;
    });
  }

  // Arama
  var input = document.getElementById('q'), list = document.getElementById('results');
  var index = null, loading = null, sel = -1, items = [];
  function trLower(s) { return s.replace(/I/g, 'ı').replace(/İ/g, 'i').toLowerCase(); }
  function fold(s) { return trLower(s || '').replace(/[çğıöşü]/g, function (c) { return { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u' }[c]; }); }
  function load() {
    if (index || loading) return loading;
    loading = fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (d) {
      index = d.map(function (x) { x._t = fold(x.t); x._d = fold(x.d); x._h = fold(x.h); x._c = ' ' + fold(x.c) + ' '; return x; });
    });
    return loading;
  }
  function score(x, q, words) {
    var s = 0;
    if (x._t === q) s += 100;
    else if (x._t.indexOf(q) === 0) s += 60;
    else if (x._t.indexOf(q) >= 0) s += 40;
    if (x._c.indexOf(' ' + q + ' ') >= 0) s += 30;
    else if (q.length > 2 && x._c.indexOf(q) >= 0) s += 8;
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (x._t.indexOf(w) >= 0) s += 10;
      if (x._h.indexOf(w) >= 0) s += 6;
      if (x._d.indexOf(w) >= 0) s += 4;
    }
    if (words.length > 1 && !words.every(function (w) { return (x._t + x._d + x._h + x._c).indexOf(w) >= 0; })) s = Math.min(s, 3);
    if (s && (x.k === 'sayfa' || x.p)) s += 5;
    return s;
  }
  function matchedCol(x, q) {
    if (x.k !== 'tablo' || x._t.indexOf(q) >= 0) return '';
    var cols = x.c.split(' ');
    for (var i = 0; i < cols.length; i++) if (fold(cols[i]) === q) return cols[i];
    for (i = 0; i < cols.length; i++) if (fold(cols[i]).indexOf(q) >= 0) return cols[i];
    return '';
  }
  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function render(q) {
    var fq = fold(q.trim());
    if (!fq) { list.hidden = true; return; }
    var words = fq.split(/\s+/).filter(Boolean);
    var res = [];
    for (var i = 0; i < index.length; i++) { var s = score(index[i], fq, words); if (s > 3) res.push([s, index[i]]); }
    res.sort(function (a, b) { return b[0] - a[0] || a[1].t.localeCompare(b[1].t); });
    items = res.slice(0, 30).map(function (r) { return r[1]; });
    sel = -1;
    list.innerHTML = items.length ? items.map(function (x, i) {
      var col = matchedCol(x, fq);
      var desc = col ? 'Kolon: ' + col + (x.d ? ' — ' + x.d : '') : (x.m ? x.m + ' · ' : '') + (x.d || '');
      return '<li role="option" id="r' + i + '"><a href="' + x.u + '"><span class="k">' + esc(x.k) + '</span>' + esc(x.t) + '<span class="d">' + esc(desc) + '</span></a></li>';
    }).join('') : '<li class="empty">Sonuç yok.</li>';
    list.hidden = false;
  }
  function move(d) {
    if (!items.length) return;
    var lis = list.querySelectorAll('li[role="option"]');
    if (sel >= 0) lis[sel].removeAttribute('aria-selected');
    sel = (sel + d + items.length) % items.length;
    lis[sel].setAttribute('aria-selected', 'true');
    lis[sel].scrollIntoView({ block: 'nearest' });
  }
  if (input) {
    input.addEventListener('focus', load);
    input.addEventListener('input', function () { var v = input.value; (load() || Promise.resolve()).then(function () { if (input.value === v) render(v); }); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter') { var x = items[sel >= 0 ? sel : 0]; if (x) location.href = x.u; }
      else if (e.key === 'Escape') { list.hidden = true; input.blur(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); input.focus(); }
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('.search')) list.hidden = true; });
  }
})();
