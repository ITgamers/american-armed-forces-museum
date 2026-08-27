/* Mobile navigation toggle for the main header menu. */
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  // Picking a destination closes the menu behind you.
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Rotating to landscape shouldn't leave the menu stuck open over the page.
  var desktop = window.matchMedia('(min-width: 761px)');
  function reset() { if (desktop.matches) setOpen(false); }
  if (desktop.addEventListener) desktop.addEventListener('change', reset);
  else if (desktop.addListener) desktop.addListener(reset);
})();
