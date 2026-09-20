// Progressive enhancement: plain JavaScript, no framework.
'use strict';
document.documentElement.classList.add('js');
const menuButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);
document.querySelectorAll('[data-open-dialog]').forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#' + control.dataset.openDialog).showModal();
  });
});
document.querySelectorAll('[data-close-dialog]').forEach((control) => {
  control.addEventListener('click', () => {
    control.closest('dialog').close();
    if (control.getAttribute('href') === '#contact') {
      const heading = document.querySelector('#contact-title');
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
  });
});
