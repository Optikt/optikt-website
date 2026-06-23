# OPTIK-T · Web

Landing page estática de OPTIK-T, una óptica boutique en Maturín, Venezuela.

Construida con Svelte 5 + SvelteKit + Tailwind CSS 4. Desplegada en Cloudflare Pages.

## Stack

| Capa       | Tecnología                                                       |
| ---------- | ---------------------------------------------------------------- |
| Runtime    | Svelte 5 (runes: `$state`, `$effect`, `$derived`, `$props`)      |
| Framework  | SvelteKit 2                                                      |
| Lenguaje   | TypeScript 5                                                     |
| Estilos    | Tailwind CSS 4 (`@tailwindcss/vite`)                             |
| Imágenes   | `@sveltejs/enhanced-img` (optimización en build)                 |
| UI         | bits-ui, embla-carousel-svelte, lucide-svelte, tailwind-variants |
| Formulario | sveltekit-superforms + Zod                                       |
| Adaptador  | `@sveltejs/adapter-cloudflare`                                   |

## Desarrollo

```bash
pnpm install       # instalar dependencias
pnpm dev           # servidor de desarrollo (http://localhost:5173)
pnpm build         # build de producción
pnpm preview       # previsualizar build localmente
pnpm check         # type-check + lint
```

## Estructura

```
src/
├── app.html              # HTML shell
├── app.css               # estilos globales + Tailwind
├── lib/
│   ├── components/       # componentes Svelte (Hero, Nav, Gallery, etc.)
│   ├── data/             # datos hardcodeados (colecciones, servicios, etc.)
│   ├── images/           # imágenes locales (webp originales + _originales/ backup)
│   └── utils/            # utilidades
├── routes/
│   ├── +layout.svelte    # layout global
│   ├── +page.svelte      # landing page única
│   └── +error.svelte     # página de error
scripts/
└── optimize-images.mjs   # script para redimensionar imágenes
static/
├── images/               # imágenes estáticas (favicon, etc.)
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

Toda la información del sitio —colecciones, lentes, servicios, testimonios, datos del negocio— está hardcodeada en archivos TypeScript dentro de `src/lib/data/`. No hay base de datos, CMS ni panel de administración.

El sitio es una landing page de una sola página. La ruta raíz (`/`) renderiza todos los componentes (Hero, Colecciones, Tecnología de Lentes, Galería, etc.) y un modal de contacto.

## Script de imágenes

`scripts/optimize-images.mjs` redimensiona imágenes locales en `src/lib/images/` según el ancho máximo definido por carpeta, preservando los originales en `_originales/`.

### Uso

```bash
node scripts/optimize-images.mjs
```

### Reglas de redimensionamiento

| Carpeta        | Ancho máx. |
| -------------- | ---------- |
| `hero/`        | 1920 px    |
| `colecciones/` | 600 px     |
| `gallery/`     | 600 px     |
| `servicios/`   | 600 px     |
| `tech-lentes/` | 560 px     |
| `about/`       | 600 px     |

Excepciones por archivo (hero): `hero/6.webp` y `hero/3.webp` se redimensionan a 400 px.

### Qué hace

1. Escanea recursivamente `src/lib/images/` buscando imágenes `.webp`, `.jpg`, `.jpeg`, `.png`, `.avif`.
2. Si la imagen es más ancha que el límite de su carpeta, la redimensiona.
3. Guarda el original en `src/lib/images/_originales/` manteniendo la estructura de subcarpetas.
4. Sobrescribe el archivo original con la versión optimizada.
5. Las imágenes que ya están dentro del límite se saltan.
6. Calidad: 85 % (webp/png/jpeg), 80 % (avif).

### Requisitos

Dependencia `sharp` incluida en `devDependencies`. No requiere instalación adicional si ya ejecutaste `pnpm install`.
