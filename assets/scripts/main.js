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

const copy = {
  "en": {
    "required": "This field is required.",
    "emailError": "Enter a valid email address.",
    "formInvalid": "Review the marked fields. Nothing has been sent.",
    "formValid": "Fields are valid. This is a local demonstration: your message has not been sent or saved."
  }
};
let language = 'en';

// Validation is local. No fetch, storage, analytics or form serialization.
const contactForm = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#form-status');
const fields = [...contactForm.querySelectorAll('input, textarea')];
contactForm.noValidate = true;
document.querySelector('#contact-submit').disabled = false;
function validateField(field) {
  let error = '';
  if (!field.value.trim()) error = 'required';
  else if (field.type === 'email' && !field.validity.valid) error = 'emailError';
  field.dataset.error = error;
  field.setAttribute('aria-invalid', String(Boolean(error)));
  document.querySelector('#' + field.id + '-error').textContent = error ? copy[language][error] : '';
  return !error;
}
function validateContact() {
  const results = fields.map(validateField);
  const valid = results.every(Boolean);
  statusMessage.dataset.message = valid ? 'formValid' : 'formInvalid';
  statusMessage.textContent = copy[language][statusMessage.dataset.message];
  if (!valid) fields[results.indexOf(false)].focus();
}
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  validateContact();
});
document.querySelector('#contact-submit').addEventListener('click', validateContact);
fields.forEach((field) => {
  field.addEventListener('input', () => {
    if (field.hasAttribute('aria-invalid')) validateField(field);
    statusMessage.textContent = '';
    delete statusMessage.dataset.message;
  });
});