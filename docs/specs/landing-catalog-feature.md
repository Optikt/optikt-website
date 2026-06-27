# Spec: landing-catalog-feature

Scope: feature

# Spec: landing-catalog-feature

Scope: feature

# Landing Catalog Consumer

Especificación de cómo la landing (optikt-website) consume los snapshots del catálogo desde Cloudflare R2 y convive con el contenido editorial local.

## Principios

1. **El contrato compartido es public-catalog-arch**. La landing no conoce la convención de variantes de imagen ni el base key. Solo consume URLs completas del snapshot (`images.default`, `images.srcset`).
2. **Cero dependencia del servidor local**. La landing funciona aunque la app interna (Venezuela) esté sin electricidad. R2 es la única superficie de lectura.
3. **La gestión de "qué mostrar" vive en la app interna**. La landing es 100% consumidora de solo lectura, sin panel admin ni botón de publicar.
4. **Dev con mock; prod con R2**. En desarrollo se usa un fixture local tipado. En producción se lee de la URL pública de R2. Swap via env var.

## Contrato del snapshot (lo que la landing consume)

### `products.json` — Listado completo
```ts
interface ProductSnapshot {
  sku: string;           // e.g. "WD1323-C4"
  name: string;          // e.g. "American Specs WD1323"
  brand: string;         // e.g. "American Specs"
  type: string;          // e.g. "Graduados", "Sol", "Contacto"
  description: string;
  salePrice: number;     // precio de venta al público (número, sin moneda)
  imageBaseKey: string;  // e.g. "products/uuid" — solo para referencia, no se usa directamente
  images: {
    default: string;     // URL completa a la variante 800w — e.g. "https://pub-<hash>.r2.dev/media/products/uuid-800w.webp"
    srcset: Array<{ w: number; url: string }>;  // [{w:400,url:"..."},{w:800,...},{w:1200,...}]
  };
  featured: boolean;     // true si está marcado como destacado
  sort: number;          // orden global de publicación (ascendente)
}
```

### `featured.json` — Array de ProductSnapshot (solo los featured)
Shape idéntico a ProductSnapshot pero filtrado a `featured: true`.

### `catalog/products/<sku>.json` — Detalle individual
Shape idéntico a ProductSnapshot. Un archivo por SKU.

## Fetch client API

Módulo `$lib/server/r2-catalog.ts` — funciones async que se llaman desde load functions (SSR):

```ts
export async function getProductList(fetchFn: typeof fetch): Promise<ProductSnapshot[]>
export async function getProductDetail(sku: string, fetchFn: typeof fetch): Promise<ProductSnapshot | null>
export async function getFeatured(fetchFn: typeof fetch): Promise<ProductSnapshot[]>
```

- `fetchFn` se inyecta desde el load function de SvelteKit (para usar `fetch` nativo de la plataforma).
- Las URLs se construyen concatenando `PUBLIC_R2_CATALOG_BASE_URL + endpoint`.
- Si `PUBLIC_R2_CATALOG_BASE_URL` no está definida, cae al mock fixture.
- En producción, Cloudflare edge cachea la respuesta de R2 naturalmente (R2 setea `Cache-Control: public, max-age=3600`).

## Estrategia de render

### `/colecciones` (listado)
- **SSR con load function**: `+page.ts` (universal load, no server-only) fetchea `products.json` de R2 en el request y devuelve la lista. La página renderiza SSR con todos los productos.
- **Filtrado client-side**: type chips (Graduados/Sol/Contacto), brand select, búsqueda por nombre, paginación. Todo se maneja en el cliente sobre `data.products` (ya precargado en SSR).
- **Por qué no client-only fetch**: queremos SSR SEO para el listado y que Google indexe las monturas. Además la primera paint muestra productos inmediatamente sin spinner.
- **Optimización**: si el JSON es >1MB, se puede comprimir en R2 con gzip (los fetch nativos aceptan `Content-Encoding: gzip`). Cloudflare Workers + R2 lo manejan transparentemente.

### `/colecciones/[sku]` (detalle)
- **SSR con load function**: `+page.ts` fetchea `catalog/products/<sku>.json` de R2. 
- **Render**: imágenes con `<img src={images.default} srcset="...w ..., ...w" sizes="(max-width: 768px) 100vw, 50vw">`.
- **Not found**: si el SKU no existe en R2, el load devuelve `null` y la página muestra 404.

### Homepage (`/`)
- **FeaturedProducts**: `+page.ts` fetch `featured.json`. Fallback a hardcoded si falla.
- **Collections section**: agrupa `products.json` por `type` (Graduados/Sol/Contacto) y muestra cards del grupo con el primer producto de cada tipo como thumbnail. Fallback a hardcoded si falla.
- El resto (hero, about, servicios, gallery, lens tech) sigue siendo editorial local.

## Imágenes del catálogo

- Se renderizan con `<img>` nativo (NO `enhanced:img`). Las URLs ya vienen procesadas desde R2.
- Patrón de uso:
```svelte
<img
  src={product.images.default}
  alt={product.name}
  loading="lazy"
  decoding="async"
  srcset={product.images.srcset.map(s => `${s.url} ${s.w}w`).join(', ')}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```
- `enhanced:img` se mantiene exclusivamente para imágenes editoriales locales (hero, about, servicios, gallery, lens tech).

## Mock fixture

- Archivo: `$lib/data/mock-catalog.ts`
- Exporta arrays tipados `mockProducts: ProductSnapshot[]`, `mockFeatured: ProductSnapshot[]`.
- Datos basados en el contenido actual de `featured.ts` y `collections.ts`, adaptados al nuevo shape (con `images.default` apuntando a las URLs locales procesadas por enhanced:img para desarrollo visual).
- El mock se usa automáticamente cuando `PUBLIC_R2_CATALOG_BASE_URL` no está definida.

## Env vars

| Variable | Uso | Ejemplo |
|---|---|---|
| `PUBLIC_R2_CATALOG_BASE_URL` | Base URL del bucket R2 (prefijo /catalog/) | `https://pub-<hash>.r2.dev/catalog` |

Pública (PREFIX `PUBLIC_`) porque el URL del bucket R2 es público. En Cloudflare Pages se configura en el dashboard como Environment Variable. En `.env` para dev (vacío → usa mock).

## FYI: Lo que NO cambia

Lo siguiente **sigue hardcoded local** con `enhanced:img`:
- Hero images
- Gallery (8 images)
- About (3 images)
- Servicios (4 images)
- Lens technology tech cards + comparison images (6 images)
- BrandMarquee / PartnersMarquee (logos de marcas — del snapshot solo se deriva el brand name como texto)
- Testimonials
- Stats
- Location
- Footer branding

## Limpieza post-migración

Los siguientes archivos se pueden eliminar o simplificar cuando el catálogo R2 esté activo:
- `src/lib/data/collections.ts` → eliminar (la data viene de products.json agrupado por type)
- `src/lib/data/featured.ts` → eliminar (la data viene de featured.json)
- `src/lib/images/featured/*.webp` → eliminar
- `src/lib/images/colecciones/*` → eliminar
- Entradas de productos en `images.ts` → eliminar (mantener editorial)
- `scripts/optimize-images.mjs` → ya no necesario para catálogo (solo editorial)