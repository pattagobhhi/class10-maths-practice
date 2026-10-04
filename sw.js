// Class X Maths Practice Bank - offline support (generated)
const V = '38cba6af61', SHELL = 'shell-' + V, IMG = 'img-' + V;
self.addEventListener('install', e => e.waitUntil(caches.open(SHELL).then(c => c.addAll(["./", "index.html", "manifest.webmanifest", "icon-192.png", "katex/katex.min.css", "katex/katex.min.js", "katex/auto-render.min.js", "katex/fonts/KaTeX_AMS-Regular.woff2", "katex/fonts/KaTeX_Caligraphic-Bold.woff2", "katex/fonts/KaTeX_Caligraphic-Regular.woff2", "katex/fonts/KaTeX_Fraktur-Bold.woff2", "katex/fonts/KaTeX_Fraktur-Regular.woff2", "katex/fonts/KaTeX_Main-Bold.woff2", "katex/fonts/KaTeX_Main-BoldItalic.woff2", "katex/fonts/KaTeX_Main-Italic.woff2", "katex/fonts/KaTeX_Main-Regular.woff2", "katex/fonts/KaTeX_Math-BoldItalic.woff2", "katex/fonts/KaTeX_Math-Italic.woff2", "katex/fonts/KaTeX_SansSerif-Bold.woff2", "katex/fonts/KaTeX_SansSerif-Italic.woff2", "katex/fonts/KaTeX_SansSerif-Regular.woff2", "katex/fonts/KaTeX_Script-Regular.woff2", "katex/fonts/KaTeX_Size1-Regular.woff2", "katex/fonts/KaTeX_Size2-Regular.woff2", "katex/fonts/KaTeX_Size3-Regular.woff2", "katex/fonts/KaTeX_Size4-Regular.woff2", "katex/fonts/KaTeX_Typewriter-Regular.woff2"])).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== IMG).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  const isImg = u.pathname.endsWith('.webp');
  if (r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('index.html')) {
    e.respondWith(fetch(r).then(x => { const cp = x.clone(); caches.open(SHELL).then(c => c.put('index.html', cp)); return x; })
      .catch(() => caches.match('index.html').then(x => x || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(r).then(hit => hit || fetch(r).then(x => {
    if (x.ok) { const cp = x.clone(); caches.open(isImg ? IMG : SHELL).then(c => c.put(r, cp)); }
    return x;
  })));
});
