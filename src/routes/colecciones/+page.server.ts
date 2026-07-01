import { PUBLIC_R2_CATALOG_BASE_URL } from '$env/static/public';
import { getProductList } from '$lib/server/r2-catalog';
import type { ProductSnapshot } from '$lib/schemas/catalog';

export interface ColeccionesData {
  products: ProductSnapshot[];
  catalogError: string | null;
}

export const load = async ({ fetch }): Promise<ColeccionesData> => {
  const products = await getProductList(fetch);
  const catalogError =
    products.length === 0 && PUBLIC_R2_CATALOG_BASE_URL
      ? 'No pudimos cargar el catálogo en este momento. Escríbenos por WhatsApp y te asesoramos.'
      : null;
  return { products, catalogError };
};
