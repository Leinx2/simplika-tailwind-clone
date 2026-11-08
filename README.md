# Simplika · Landing Page

**El marketing, sin complicaciones.**

Simplika es un prototipo web que presenta un kit gratuito de plantillas, ideas y herramientas para ayudar a pequeños emprendedores a promocionar sus negocios en redes sociales.

La landing page se desarrolló a partir de una referencia visual, conservando sus textos, composición y paleta de colores, e incorporando fotografías locales del equipo. Incluye cuatro páginas complementarias con contenido de muestra e interacciones funcionales.

## Características

- Diseño responsive para escritorio, tablet y celular.
- Menú hamburguesa en pantallas pequeñas y navegación entre páginas.
- Presentación del equipo con fotografías intercambiables.
- Plantillas SVG descargables con filtros por formato.
- Ideas de publicaciones con filtros, inspiración aleatoria y textos para copiar.
- Cronograma semanal editable, con guardado local y exportación a CSV.
- Guías desplegables sobre creación de contenido.
- Navegación por teclado, estados de foco visibles y respeto por la preferencia de movimiento reducido.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| HTML5 | Estructura semántica de las páginas. |
| Tailwind CSS por CDN | Clases de utilidad para estilos y distribución. |
| CSS3 | Personalización visual y adaptaciones responsive. |
| JavaScript | Navegación móvil, filtros, descargas e interacciones. |
| SVG | Logo recreado, ilustración del laptop y plantillas editables. |
| Google Fonts | Tipografías Nunito y Patrick Hand. |
| Python, opcional | Servidor local y sincronización de las plantillas descargables. |

No requiere instalar paquetes ni ejecutar un proceso de compilación.

## Cómo ejecutarlo

### Apertura directa

Descarga o clona este repositorio y abre `index.html` en tu navegador.

Necesitas conexión a internet para cargar Tailwind CSS y las fuentes. Las imágenes, las plantillas y el código del proyecto están incluidos en el repositorio.

### Servidor local opcional

Si tienes Python instalado, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
python -m http.server 5500
```

Visita <http://localhost:5500>. Para detener el servidor, presiona `Ctrl+C`.

## Estructura del proyecto

```text
simplika/
├── index.html                  # Landing page
├── plantillas.html             # Recursos SVG descargables
├── ideas.html                  # Ideas de publicaciones
├── cronogramas.html            # Planificador semanal
├── guias.html                  # Guías desplegables
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos compartidos y responsive
│   ├── images/
│   │   ├── logo.svg
│   │   ├── laptop.svg
│   │   └── favicon.svg
│   ├── js/
│   │   ├── app.js              # Contenido compartido e interacciones
│   │   └── template-downloads.js
│   └── templates/              # Plantillas SVG de ejemplo
├── images/
│   ├── perfil-sofia.png
│   ├── perfil-sebastian.png
│   └── perfil-salome.png
├── scripts/
│   └── sync-templates.py       # Actualiza las fuentes de descarga
├── .gitignore
└── README.md
```

## Páginas

| Página | Contenido |
| --- | --- |
| Inicio | Presentación de Simplika, equipo y acceso al kit. |
| Plantillas | Tres recursos de ejemplo, filtrables y descargables como SVG. |
| Ideas | Propuestas de contenido para conectar, mostrar y enseñar. |
| Cronogramas | Plan semanal adaptable con descarga CSV. |
| Guías | Consejos sobre textos, fotografía, diseño y organización. |

## Personalización

### Textos y estilos

- **Landing y nombres del equipo:** edita `index.html`.
- **Navegación y contenido de las páginas interiores:** edita `assets/js/app.js`.
- **Colores y diseño:** edita `assets/css/styles.css`. La paleta se define mediante variables en `:root`.

El menú cambia a hamburguesa por debajo de 1024 px. Por debajo de 768 px, la presentación principal y las fotografías del equipo se organizan en una columna.

### Fotografías del equipo

Reemplaza los archivos de `images/` conservando estos nombres:

```text
perfil-sofia.png
perfil-sebastian.png
perfil-salome.png
```

Se recomienda usar PNG con fondo transparente, el rostro centrado y poco espacio vacío sobre la cabeza. Las imágenes mantienen su proporción; los fondos decorativos y los nombres son elementos independientes.

Si cambias los nombres o el formato, actualiza los atributos `src` correspondientes en `index.html`.

### Logo e ilustración

El logo y el laptop se encuentran en `assets/images/logo.svg` y `assets/images/laptop.svg`. Puedes reemplazarlos conservando sus nombres. Si usas otro formato, actualiza las referencias en `assets/js/app.js` para el logo y en `index.html` para el laptop.

### Plantillas descargables

Edita los SVG en `assets/templates/` y actualiza las copias utilizadas por los botones de descarga:

```bash
python scripts/sync-templates.py
```

El script regenera `assets/js/template-downloads.js`, que permite descargar las plantillas incluso al abrir los HTML directamente.

## Alcance del prototipo

Este proyecto es un **mockup**, sin servidor de aplicación ni sistema de cuentas. Los botones “Acceso gratuito” y “Explora el kit” llevan a la página de Plantillas.

El contenido de las páginas interiores y las plantillas son propuestas de ejemplo. El logo y la ilustración del laptop son recreaciones vectoriales de la referencia, no sus archivos originales.

El cronograma se guarda mediante `localStorage` cuando el navegador lo permite. Los datos permanecen en ese navegador y dispositivo; también pueden exportarse como CSV.

## Archivos excluidos del repositorio

El archivo `.gitignore` excluye la carpeta `.cortex`, las configuraciones locales de herramientas y editores, las capturas de revisión, los archivos temporales, los registros y los archivos de variables de entorno locales. El código, las fotografías y los recursos necesarios para visualizar el proyecto se mantienen incluidos.

## Créditos

Este proyecto fue un **desarrollo guiado por el autor del proyecto usando Codex de OpenAI**. El autor definió la referencia visual, los requisitos, las decisiones de diseño y los recursos fotográficos; Codex de OpenAI asistió en la implementación del código y las comprobaciones del prototipo.

Las tipografías Nunito y Patrick Hand se cargan desde Google Fonts. Tailwind CSS se utiliza mediante su distribución por CDN.
