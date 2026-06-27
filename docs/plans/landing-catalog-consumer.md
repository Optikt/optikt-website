---
plan name: landing-catalog-consumer
plan description: Consume R2 catalog snapshots
plan status: active
---

## Idea
Reemplazar la data hardcoded de productos en la landing por fetches tipados a los snapshots de Cloudflare R2 (products.json, featured.json, brands.json). Construir la ruta /colecciones con filtrado client-side por tipo/marca y paginación. Las imágenes del catálogo pasan de local enhanced:img a `<img srcset>` desde URLs de R2. El contenido editorial (hero, about, servicios, gallery, tech lentes) se mantiene local. En dev se usa un fixture mockeado; en prod se lee de R2. Sin deploy hooks: SSR con cache en edge o fetch client-side.

## Implementation
- Definir TS types + Zod schemas del contrato del snapshot (ProductSnapshot, FeaturedSnapshot, BrandSnapshot) basados en el spec public-catalog-arch, y crear un fixture mock local (`$lib/data/mock-catalog.ts`) para desarrollo sin R2.
- Construir el fetch client (`$lib/server/r2-catalog.ts`) con funciones getProductList(), getProductDetail(sku), getFeatured(), configurable via env var PUB_R2_CATALOG_BASE_URL. Fallback automático al mock si no hay env configurada.
- Crear la ruta `/colecciones` con SSR load que fetchea products.json de R2 (o mock). Página con filtros client-side por tipo (Graduados/Sol/Contacto) y marca, búsqueda por nombre, y paginación. Product cards con `<img srcset>` desde R2.
- Crear la ruta `/colecciones/[sku]` con SSR load que fetchea catalog/products/<sku>.json de R2. Página de detalle con imágenes (srcset) y metadata del producto.
- Wirear la homepage para consumir featured.json en `FeaturedProducts` y derivar las colecciones (agrupaciones por tipo) desde products.json en la sección `Collections`, manteniendo fallback a data hardcoded si R2 no responde.
- Migrar las imágenes de productos de `enhanced:img` local a `<img>` nativo con srcset desde R2 (images.default / images.srcset) en CollectionCard, FeaturedProducts y los nuevos componentes de catálogo.
- Limpiar data hardcoded de productos (featured.ts, collections.ts, entries de productos en images.ts) e imágenes locales de productos en src/lib/images/featured/ y src/lib/images/colecciones/. Mantener solo contenido editorial.

## Required Specs
<!-- SPECS_START -->
- public-catalog-arch
- landing-catalog-feature
<!-- SPECS_END -->