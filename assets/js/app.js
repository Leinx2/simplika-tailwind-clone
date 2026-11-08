/* Shared navigation and small, local-only interactions. No account or backend. */
const page = document.body.dataset.page;
const routes = [
  ['inicio', 'Inicio', 'index.html'],
  ['plantillas', 'Plantillas', 'plantillas.html'],
  ['ideas', 'Ideas', 'ideas.html'],
  ['cronogramas', 'Cronogramas', 'cronogramas.html'],
  ['guias', 'Guías', 'guias.html'],
];
const navLinks = () => routes.map(([id, title, href]) => `<a class="nav-link" href="${href}"${page === id ? ' aria-current="page"' : ''}>${title}</a>`).join('');
document.getElementById('site-header').innerHTML = `
  <div class="header-inner">
    <a class="logo-link" href="index.html" aria-label="Simplika, inicio"><img src="assets/images/logo.svg" alt="Simplika" width="300" height="100"></a>
    <nav class="desktop-nav" aria-label="Navegación principal">${navLinks()}</nav>
    <a class="button header-cta" href="plantillas.html">Acceso gratuito <span aria-hidden="true">→</span></a>
    <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
  </div>
  <nav id="mobile-menu" class="mobile-nav" aria-label="Navegación móvil" hidden>${navLinks()}<a class="button" href="plantillas.html">Acceso gratuito <span aria-hidden="true">→</span></a></nav>`;
document.getElementById('site-footer').innerHTML = `<div class="site-footer-inner"><a class="footer-wordmark" href="index.html">Simplika</a><p>Hecho con ideas, para pequeños negocios.</p><a class="footer-link" href="guias.html">Un poquito de ayuda ↗</a></div>`;

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
function closeMenu(returnFocus = false) {
  mobileMenu.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const opening = mobileMenu.hidden;
  mobileMenu.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Cerrar menú' : 'Abrir menú');
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileMenu.hidden) closeMenu(true); });
document.addEventListener('click', event => { if (!document.getElementById('site-header').contains(event.target)) closeMenu(); });
window.matchMedia('(min-width: 1024px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

const content = document.getElementById('page-content');
const intro = (label, title, description) => `<div class="page-intro"><p class="eyebrow">${label}</p><h1 class="page-title">${title}</h1><p>${description}</p></div>`;
const nextStep = (title, description, href, label) => `<aside class="next-step"><div><h2>${title}</h2><p>${description}</p></div><a class="button" href="${href}">${label} <span aria-hidden="true">→</span></a></aside>`;
const filters = categories => `<div class="filter-row" role="group" aria-label="Filtrar por categoría">${categories.map((category, index) => `<button class="filter-button" type="button" data-filter="${category}" aria-pressed="${index === 0}">${category}</button>`).join('')}</div>`;

if (page === 'plantillas') {
  const templates = [
    { title: 'Tu producto, protagonista', category: 'Publicaciones', file: 'producto', description: 'Presenta lo que haces con una foto, un mensaje claro y mucho de tu esencia.' },
    { title: 'Algo bueno se viene', category: 'Historias', file: 'novedad', description: 'Despierta la curiosidad y anuncia esa novedad que tienes entre manos.' },
    { title: 'Un detalle para tu comunidad', category: 'Publicaciones', file: 'promocion', description: 'Comparte una oferta especial con las condiciones claras y un toque de color.' },
  ];
  content.innerHTML = intro('TU CAJA DE HERRAMIENTAS', 'Buenas ideas.<br>Un buen comienzo.', 'Plantillas sencillas para empezar a darle forma a las redes de tu negocio. Elige una, cambia los textos y hazla tuya.') +
    filters(['Todas', 'Publicaciones', 'Historias']) +
    `<p class="demo-note">Recursos de ejemplo del mockup. Descarga el SVG y edítalo en una herramienta compatible, como Figma o Inkscape.</p><div class="resource-grid">${templates.map(t => `<article class="resource-card" data-category="${t.category}"><div class="resource-preview"><img src="assets/templates/${t.file}.svg" alt="Vista previa de la plantilla: ${t.title}" width="400" height="400"></div><div class="resource-content"><span class="tag">${t.category} · SVG editable</span><h2>${t.title}</h2><p>${t.description}</p><a class="secondary-button" href="assets/templates/${t.file}.svg" download="simplika-${t.file}.svg">Descargar plantilla ↓</a></div></article>`).join('')}</div>` +
    nextStep('¿Y ahora qué escribo?', 'Encuentra una idea que conecte con lo que haces.', 'ideas.html', 'Explorar ideas');
}

if (page === 'ideas') {
  const ideas = [
    ['Conecta', 'La historia detrás de tu negocio', 'Cuenta qué te animó a empezar, cuál fue tu primer producto o qué te ilusiona de lo que haces.', '¿Cómo nació mi negocio? Todo empezó cuando…'],
    ['Muestra', 'Un vistazo entre bastidores', 'Muestra cómo preparas un pedido o un rincón de tu espacio de trabajo. Lo cotidiano también tiene una historia.', 'Ven conmigo a preparar un pedido de principio a fin.'],
    ['Enseña', 'Un consejo que sí ayuda', 'Comparte una forma de usar, cuidar o elegir tu producto. Resuelve una duda que recibes con frecuencia.', 'Tres cosas que te ayudarán a cuidar tu…'],
    ['Conecta', 'Haz una pregunta sencilla', 'Invita a tu comunidad a elegir un color, un sabor o el próximo diseño. Escuchar también es crear contenido.', 'Si pudieras elegir solo uno, ¿con cuál te quedarías?'],
    ['Muestra', 'Los pequeños detalles', 'Acércate a una textura, un ingrediente o un acabado y explica por qué ese detalle te importa.', 'Quizá no lo habías notado, pero cada…'],
    ['Enseña', 'Responde esa pregunta', 'Elige una pregunta real sobre tus envíos, materiales o proceso y respóndela de forma breve.', 'Nos preguntan mucho si… Aquí va la respuesta.'],
  ];
  content.innerHTML = intro('UN EMPUJONCITO CREATIVO', 'Que las ideas<br>no te falten.', 'No necesitas tener una gran producción para contar algo bonito. Empieza por lo que conoces mejor: tu propio negocio.') +
    `<div class="idea-prompt"><div><h2>¿La mente en blanco?</h2><p id="random-idea" aria-live="polite">Saca una idea al azar y dale tu toque.</p></div><button class="button" id="inspire-button" type="button">Inspírame <span aria-hidden="true">✦</span></button></div>` +
    filters(['Todas', 'Conecta', 'Muestra', 'Enseña']) +
    `<div class="resource-grid ideas-grid">${ideas.map(([category, title, description, prompt], index) => `<article class="resource-card" data-category="${category}"><div class="resource-content"><div class="flex items-center justify-between"><span class="tag">${category}</span><span class="idea-number">0${index + 1}</span></div><h2>${title}</h2><p>${description}</p><button class="secondary-button" type="button" data-copy="${prompt}">Copiar inicio de texto ↗</button></div></article>`).join('')}</div>` +
    nextStep('Dale un lugar a tus ideas.', 'Un plan pequeño te ayuda a pasar de pensarlo a publicarlo.', 'cronogramas.html', 'Organizar mi semana');
  let lastIdea = -1;
  document.getElementById('inspire-button').addEventListener('click', () => {
    let next = Math.floor(Math.random() * ideas.length);
    if (next === lastIdea) next = (next + 1) % ideas.length;
    lastIdea = next;
    document.getElementById('random-idea').textContent = ideas[next][1] + ': ' + ideas[next][2];
  });
}

if (page === 'cronogramas') {
  const defaults = [
    ['Lunes', 'Conecta', 'Cuenta cómo nació tu negocio.'],
    ['Martes', 'Muestra', 'Comparte una foto de tu producto favorito.'],
    ['Miércoles', 'Enseña', 'Responde una pregunta frecuente.'],
    ['Jueves', 'Conecta', 'Haz una encuesta en historias.'],
    ['Viernes', 'Muestra', 'Muestra cómo preparas un pedido.'],
    ['Sábado', 'Inspira', 'Comparte una forma de usar tu producto.'],
    ['Domingo', 'Haz una pausa', 'Revisa tu semana y anota una idea nueva.'],
  ];
  let saved;
  try { saved = JSON.parse(localStorage.getItem('simplika-plan')); } catch { /* Private mode or unavailable storage. */ }
  content.innerHTML = intro('UN PASO A LA VEZ', 'Tu semana,<br>con un poco más de orden.', 'No se trata de publicar todos los días. Usa este plan de ejemplo, adapta las ideas a tu ritmo y deja espacio para lo espontáneo.') +
    `<p class="demo-note">Edita tus ideas y marca lo que ya publicaste. Cuando tu navegador lo permite, los cambios se guardan en este dispositivo.</p><div class="planner-wrap"><table class="planner"><caption class="sr-only">Plan semanal editable de publicaciones</caption><thead><tr><th scope="col">Día</th><th scope="col">Intención</th><th scope="col">Tu idea</th><th scope="col">Listo</th></tr></thead><tbody>${defaults.map(([day, intention], index) => `<tr><td><strong>${day}</strong></td><td>${intention}</td><td><textarea aria-label="Idea para el ${day.toLowerCase()}" data-day="${index}"></textarea></td><td><input type="checkbox" data-done="${index}" aria-label="Marcar ${day.toLowerCase()} como completado"></td></tr>`).join('')}</tbody></table></div><div class="planner-toolbar"><p id="plan-status" aria-live="polite">Tu plan, a tu ritmo.</p><button class="button" type="button" id="download-plan">Descargar mi semana ↓</button></div>` +
    nextStep('¿Necesitas un poquito de inspiración?', 'Aquí hay ideas para llenar esos espacios en blanco.', 'ideas.html', 'Buscar ideas');
  const fields = [...document.querySelectorAll('[data-day]')];
  const checks = [...document.querySelectorAll('[data-done]')];
  fields.forEach((field, index) => {
    field.value = typeof saved?.[index]?.idea === 'string' ? saved[index].idea : defaults[index][2];
    checks[index].checked = saved?.[index]?.done === true;
  });
  const getPlan = () => fields.map((field, index) => ({ day: defaults[index][0], intention: defaults[index][1], idea: field.value, done: checks[index].checked }));
  const save = () => {
    try { localStorage.setItem('simplika-plan', JSON.stringify(getPlan())); document.getElementById('plan-status').textContent = 'Tu plan se guardó en este dispositivo.'; }
    catch { document.getElementById('plan-status').textContent = 'Descarga tu semana para conservar los cambios.'; }
  };
  fields.forEach(field => field.addEventListener('input', save));
  checks.forEach(check => check.addEventListener('change', save));
  document.getElementById('download-plan').addEventListener('click', () => {
    const csvCell = value => '"' + String(value).replace(/^[=+@\-\t\r]/, "'$&").replaceAll('"', '""') + '"';
    const rows = [['Día', 'Intención', 'Idea', 'Completado'], ...getPlan().map(row => [row.day, row.intention, row.idea, row.done ? 'Sí' : 'No'])];
    const blob = new Blob(['\uFEFF' + rows.map(row => row.map(csvCell).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = 'simplika-mi-semana.csv';
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
}

if (page === 'guias') {
  const guides = [
    ['Empieza por lo que quieres contar', '<p>Antes de abrir una herramienta de diseño, piensa en <strong>una sola idea</strong>. ¿Quieres presentar un producto, resolver una duda o contar una historia?</p><ol><li>Escribe tu idea en una frase.</li><li>Piensa para quién puede ser útil.</li><li>Elige una foto o un formato que ayude a explicarla.</li></ol><p>Por ejemplo: “Quiero mostrar cómo se empacan nuestros pedidos para que conozcan el cuidado que ponemos en cada uno”.</p>'],
    ['Escribe como si hablaras con una persona', '<p>Usa palabras que emplearías al conversar con alguien que visita tu negocio. No necesitas sonar como un anuncio.</p><ol><li>Abre con algo concreto: una pregunta, un detalle o una novedad.</li><li>Explica lo esencial en dos o tres frases.</li><li>Cierra con una invitación sencilla, como “¿Qué color elegirías?”.</li></ol><p><strong>Un punto de partida:</strong> “Hoy terminamos este pedido y queríamos mostrarte el resultado. Elegimos estos colores porque…”.</p>'],
    ['Haz fotos sencillas, con intención', '<p>Una ventana, un fondo despejado y tu celular pueden ser un buen comienzo.</p><ol><li>Limpia la lente y busca luz natural suave.</li><li>Retira objetos que distraigan del producto.</li><li>Prueba un plano general y otro de un detalle.</li><li>Revisa que los colores se parezcan a los del producto real.</li></ol><p>Deja espacio libre si vas a añadir un título sobre la foto.</p>'],
    ['Dale coherencia a tus publicaciones', '<p>Repetir algunas decisiones visuales hace más fácil diseñar tu próxima publicación.</p><ol><li>Elige dos o tres colores que identifiquen tu negocio.</li><li>Usa una tipografía legible y títulos breves.</li><li>Mantén márgenes para que el contenido respire.</li><li>Comprueba en el celular que el texto se lea sin ampliar.</li></ol><p><strong>Antes de publicar:</strong> revisa ortografía, fechas, precios y que la información de contacto esté correcta.</p>'],
    ['Organízate sin llenarte de tareas', '<p>Elige un ritmo que puedas mantener. Puedes comenzar con unas pocas publicaciones por semana.</p><ol><li>Anota preguntas frecuentes de tus clientes.</li><li>Convierte cada pregunta en una idea de contenido.</li><li>Reserva un rato para tomar varias fotos.</li><li>Ubica tus ideas en el cronograma y ajusta cuando lo necesites.</li></ol><p>Observa qué conversaciones generan tus publicaciones y usa esas preguntas para pensar en la siguiente.</p>'],
  ];
  content.innerHTML = intro('APRENDER, SIN ENREDARSE', 'Pequeñas guías.<br>Ideas más claras.', 'Una ayuda sencilla para comunicar lo que haces. Abre una guía, prueba un consejo y avanza a tu ritmo.') +
    `<div class="guide-list">${guides.map(([title, body], index) => `<details class="guide-item"${index === 0 ? ' open' : ''}><summary><span class="guide-number">0${index + 1}</span>${title}</summary><div class="guide-body">${body}</div></details>`).join('')}</div>` +
    nextStep('De la idea a la primera publicación.', 'Elige una plantilla y empieza a darle tu toque.', 'plantillas.html', 'Explorar plantillas');
}

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'Todas' && card.dataset.category !== button.dataset.filter; });
}));

// Data URLs keep template downloads working even when opening index.html directly.
if (page === 'plantillas' && window.SIMPLIKA_TEMPLATES) {
  document.querySelectorAll('a[download]').forEach(link => {
    const key = link.getAttribute('href').split('/').pop().replace('.svg', '');
    const svg = window.SIMPLIKA_TEMPLATES[key];
    if (svg) link.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
}

let toastTimeout;
function notify(message) {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; toast.setAttribute('role', 'status'); document.body.append(toast); }
  toast.hidden = false; toast.textContent = message;
  clearTimeout(toastTimeout); toastTimeout = setTimeout(() => { toast.hidden = true; }, 3500);
}
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    notify('¡Listo! Ya puedes pegar el texto y darle tu toque.');
  } catch {
    // A selectable inline fallback also works when opened directly as a local file.
    let field = button.parentElement.querySelector('.copy-fallback');
    if (!field) { field = document.createElement('textarea'); field.className = 'copy-fallback'; field.setAttribute('aria-label', 'Texto para copiar'); field.style.cssText = 'width:100%;min-height:90px;padding:12px;margin-top:12px;border:1px solid #d6bedf;border-radius:12px'; field.readOnly = true; button.after(field); }
    field.value = button.dataset.copy; field.focus(); field.select();
    notify('Texto seleccionado. Usa Copiar en tu dispositivo.');
  }
}));
