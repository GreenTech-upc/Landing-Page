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
    "pageTitle": "SkyCrop | Smarter crop monitoring",
    "pageDescription": "Discover SkyCrop: plot management, drone planning and crop monitoring for farmers and agronomists.",
    "required": "This field is required.",
    "emailError": "Enter a valid email address.",
    "formInvalid": "Review the marked fields. Nothing has been sent.",
    "formValid": "Fields are valid. This is a local demonstration: your message has not been sent or saved.",
    "nav.home": "Home",
    "hero.eyebrow": "A clearer view of your crops",
    "hero.title": "Make monitoring your crops more manageable",
    "hero.description": "Centralize the management of your plots, automate their analysis, and detect anomalies before they affect your harvest. All on a single platform.",
    "hero.cta": "Sign up today",
    "hero.alt": "Agricultural drone flying above a green crop field",
    "dialog.title": "SkyCrop is growing",
    "dialog.description": "The platform is still in development. This landing page demonstrates the proposal; registration, subscriptions and payments are not available yet.",
    "close": "Close",
    "skip": "Skip to content",
    "brand.label": "SkyCrop home",
    "nav.label": "Main navigation",
    "access": "Access Platform",
    "menu": "Menu",
    "nav.features": "Features",
    "nav.benefits": "Benefits",
    "feature.plot": "Agricultural Plot Management",
    "feature.plot.description": "Manage your crops and follow the state of your plots with maps and notifications.",
    "feature.drone": "Drone Route Planning",
    "feature.drone.description": "Plan flight routes to capture images and support crop monitoring.",
    "feature.crop": "Crop Diagnosis",
    "feature.crop.description": "Review image analysis to identify crop conditions that need attention.",
    "feature.report": "Seasonal Report Generation",
    "feature.report.description": "Explore crop reports in an organized history and compare seasons.",
    "features.title": "Features",
    "features.subtitle": "Discover our tools designed to help you",
    "benefits.title": "Benefits",
    "benefits.subtitle": "See how SkyCrop can help you",
    "benefit.farmer.0": "Make crop care easier with information that supports field inspections.",
    "benefit.farmer.1": "Identify possible pest, disease or irrigation issues for timely review.",
    "benefit.farmer.2": "Compare seasons to review which practices worked best.",
    "farmers.title": "For Farmers",
    "farmers.description": "Care for your crops with clearer information and earlier attention to risks.",
    "agronomists.title": "For Agronomists",
    "agronomists.description": "Support your technical evaluation and agronomic diagnosis.",
    "benefit.agro.0": "Access diagnoses and crop maps to support your evaluations.",
    "benefit.agro.1": "Follow crop development with organized information.",
    "benefit.agro.2": "Present clear findings to landowners and clients.",
    "nav.pricing": "Pricing",
    "plan.basic.0": "Manage up to 5 agricultural plots",
    "plan.basic.1": "Manage up to 10 drones",
    "plan.basic.2": "Basic image processing",
    "plan.basic.3": "Basic plot map building",
    "plan.basic.4": "Diagnosis generation",
    "plan.basic.5": "Seasonal report generation",
    "plan.basic.6": "Cloud saving",
    "perMonth": "per month",
    "subscribe": "Subscribe now",
    "plan.basic": "Basic",
    "plan.professional.0": "Everything included in Basic",
    "plan.professional.1": "More agricultural plots and drones",
    "plan.professional.2": "Advanced image processing",
    "plan.professional.3": "Higher precision mapping",
    "plan.professional.4": "Invite users to agricultural plots",
    "plan.professional": "Professional",
    "plan.corporate.0": "Everything included in Professional",
    "plan.corporate.1": "Unlimited agricultural plots and drones",
    "plan.corporate.2": "High processing queue priority",
    "plan.corporate.3": "Custom user roles and permissions",
    "customPlan": "Let’s talk about your team",
    "learnMore": "Learn more",
    "plan.corporate": "Corporate",
    "pricing.title": "Pricing",
    "pricing.subtitle": "Choose the plan that best suits your needs",
    "pricing.note": "Demonstration proposal. Prices and limits are illustrative; no subscriptions or payments are processed.",
    "nav.contact": "Contact us",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.message": "Your message",
    "contact.title": "Contact us",
    "contact.subtitle": "Let us know your questions",
    "form.note": "Local demonstration: messages are not sent or stored. Please use sample data. All fields are required.",
    "form.submit": "Check message",
    "footer.label": "Footer navigation",
    "footer.privacy": "Privacy",
    "footer.terms": "Demonstration terms",
    "dialog.contact": "Go to contact",
    "privacy.title": "Privacy in this demonstration",
    "privacy.description": "The contact form validates sample data in your browser. Its code does not send messages or save entered data in cookies or browser storage. The site loads Roboto from Google Fonts, and the hosting provider and Google receive the requests needed to load the page and font. No analytics or advertising scripts are included. Avoid entering personal or sensitive information.",
    "terms.title": "Terms of this demonstration",
    "terms.description": "This academic demonstration presents the SkyCrop proposal. Plans, prices and functions are illustrative and do not form an active service offer. The page does not register accounts, control drones, diagnose crops or process payments. Commercial service terms will be defined before launch.",
    "language": "Language"
  },
  "es": {
    "pageTitle": "SkyCrop | Monitoreo de cultivos",
    "pageDescription": "Conoce SkyCrop: gestión de parcelas, planificación de drones y monitoreo para agricultores y agrónomos.",
    "required": "Este campo es obligatorio.",
    "emailError": "Ingresa un correo válido.",
    "formInvalid": "Revisa los campos marcados. No se ha enviado nada.",
    "formValid": "Los campos son válidos. Esta es una demostración local: tu mensaje no se ha enviado ni guardado.",
    "nav.home": "Inicio",
    "hero.eyebrow": "Una visión más clara de tus cultivos",
    "hero.title": "Haz más sencillo el monitoreo de tus cultivos",
    "hero.description": "Centraliza la gestión de tus parcelas, automatiza su análisis y detecta anomalías antes de que afecten tu cosecha. Todo en una sola plataforma.",
    "hero.cta": "Regístrate hoy",
    "hero.alt": "Dron agrícola sobrevolando un campo de cultivo verde",
    "dialog.title": "SkyCrop está en desarrollo",
    "dialog.description": "La plataforma está en desarrollo. Esta landing presenta la propuesta; el registro, las suscripciones y los pagos aún no están disponibles.",
    "close": "Cerrar",
    "skip": "Saltar al contenido",
    "brand.label": "Inicio de SkyCrop",
    "nav.label": "Navegación principal",
    "access": "Acceder",
    "menu": "Menú",
    "nav.features": "Funciones",
    "nav.benefits": "Beneficios",
    "feature.plot": "Gestión de parcelas agrícolas",
    "feature.plot.description": "Gestiona tus cultivos y consulta el estado de tus parcelas con mapas y notificaciones.",
    "feature.drone": "Planificación de rutas de drones",
    "feature.drone.description": "Planifica rutas de vuelo para capturar imágenes y apoyar el monitoreo de cultivos.",
    "feature.crop": "Diagnóstico de cultivos",
    "feature.crop.description": "Revisa el análisis de imágenes para identificar condiciones del cultivo que requieren atención.",
    "feature.report": "Reportes de temporada",
    "feature.report.description": "Consulta reportes del cultivo en un historial organizado y compara temporadas.",
    "features.title": "Funciones",
    "features.subtitle": "Descubre las herramientas que te ayudarán en el campo",
    "benefits.title": "Beneficios",
    "benefits.subtitle": "Conoce cómo SkyCrop puede ayudarte",
    "benefit.farmer.0": "Facilita el cuidado de los cultivos con información que apoye las inspecciones de campo.",
    "benefit.farmer.1": "Identifica posibles plagas, enfermedades o problemas de riego para revisarlos a tiempo.",
    "benefit.farmer.2": "Compara temporadas para revisar qué prácticas dieron mejores resultados.",
    "farmers.title": "Para agricultores",
    "farmers.description": "Cuida tus cultivos con información más clara y atención oportuna a los riesgos.",
    "agronomists.title": "Para agrónomos",
    "agronomists.description": "Apoya tu evaluación técnica y el diagnóstico agronómico.",
    "benefit.agro.0": "Accede a diagnósticos y mapas de cultivos para apoyar tus evaluaciones.",
    "benefit.agro.1": "Sigue el desarrollo del cultivo con información organizada.",
    "benefit.agro.2": "Presenta hallazgos claros a propietarios y clientes.",
    "nav.pricing": "Planes",
    "plan.basic.0": "Gestiona hasta 5 parcelas agrícolas",
    "plan.basic.1": "Gestiona hasta 10 drones",
    "plan.basic.2": "Procesamiento básico de imágenes",
    "plan.basic.3": "Mapas básicos de parcelas",
    "plan.basic.4": "Generación de diagnósticos",
    "plan.basic.5": "Reportes de temporada",
    "plan.basic.6": "Almacenamiento en la nube",
    "perMonth": "al mes",
    "subscribe": "Suscríbete",
    "plan.basic": "Básico",
    "plan.professional.0": "Todo lo incluido en Básico",
    "plan.professional.1": "Más parcelas agrícolas y drones",
    "plan.professional.2": "Procesamiento avanzado de imágenes",
    "plan.professional.3": "Mapeo de mayor precisión",
    "plan.professional.4": "Invita usuarios a las parcelas",
    "plan.professional": "Profesional",
    "plan.corporate.0": "Todo lo incluido en Profesional",
    "plan.corporate.1": "Parcelas agrícolas y drones ilimitados",
    "plan.corporate.2": "Mayor prioridad de procesamiento",
    "plan.corporate.3": "Roles y permisos personalizados",
    "customPlan": "Conversemos sobre tu equipo",
    "learnMore": "Conoce más",
    "plan.corporate": "Corporativo",
    "pricing.title": "Planes",
    "pricing.subtitle": "Elige el plan que mejor se adapte a tus necesidades",
    "pricing.note": "Propuesta demostrativa. Los precios y límites son ilustrativos; no se procesan suscripciones ni pagos.",
    "nav.contact": "Contacto",
    "form.name": "Tu nombre",
    "form.email": "Tu correo",
    "form.message": "Tu mensaje",
    "contact.title": "Contáctanos",
    "contact.subtitle": "Cuéntanos tus dudas",
    "form.note": "Demostración local: los mensajes no se envían ni se almacenan. Usa datos de ejemplo. Todos los campos son obligatorios.",
    "form.submit": "Validar mensaje",
    "footer.label": "Navegación del pie de página",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos de la demostración",
    "dialog.contact": "Ir a contacto",
    "privacy.title": "Privacidad en esta demostración",
    "privacy.description": "El formulario valida datos de ejemplo en tu navegador. Su código no envía mensajes ni guarda lo ingresado en cookies o almacenamiento del navegador. El sitio carga Roboto desde Google Fonts; el proveedor de alojamiento y Google reciben las solicitudes necesarias para cargar la página y la fuente. No se incluyen scripts de analítica o publicidad. Evita ingresar información personal o sensible.",
    "terms.title": "Términos de esta demostración",
    "terms.description": "Esta demostración académica presenta la propuesta de SkyCrop. Los planes, precios y funciones son ilustrativos y no constituyen una oferta de servicio activa. La página no registra cuentas, controla drones, diagnostica cultivos ni procesa pagos. Las condiciones del servicio comercial se definirán antes del lanzamiento.",
    "language": "Idioma"
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

const languageSelect = document.querySelector('#language');
function setLanguage(nextLanguage) {
  language = nextLanguage === 'es' ? 'es' : 'en';
  const messages = copy[language];
  document.documentElement.lang = language === 'es' ? 'es-419' : 'en-US';
  document.title = messages.pageTitle;
  document.querySelector('meta[name="description"]').content = messages.pageDescription;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    node.textContent = messages[node.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((node) => {
    node.alt = messages[node.dataset.i18nAlt];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    node.setAttribute('aria-label', messages[node.dataset.i18nAria]);
  });
  fields.forEach((field) => {
    if (field.dataset.error) {
      document.querySelector('#' + field.id + '-error').textContent = messages[field.dataset.error];
    }
  });
  if (statusMessage.dataset.message) statusMessage.textContent = messages[statusMessage.dataset.message];
}
languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));
// English is the default on every visit. No preference is stored.
setLanguage('en');