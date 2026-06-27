import { getProductList } from '$lib/server/r2-catalog';
import type { ProductSnapshot } from '$lib/schemas/catalog';

export interface ColeccionesData {
  products: ProductSnapshot[];
}

export const load = async ({ fetch }): Promise<ColeccionesData> => {
  const products = await getProductList(fetch);
  return { products };
};
