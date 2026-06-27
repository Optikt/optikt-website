import { getProductList, getFeatured } from '$lib/server/r2-catalog';
import { getProductsByType } from '$lib/utils/catalog';
import type { ProductSnapshot } from '$lib/schemas/catalog';

export interface HomePageData {
  featured: ProductSnapshot[];
  productGroups: { type: string; products: ProductSnapshot[] }[];
}

export const load = async ({ fetch }): Promise<HomePageData> => {
  const [featured, allProducts] = await Promise.all([
    getFeatured(fetch),
    getProductList(fetch),
  ]);

  const types = [...new Set(allProducts.map(p => p.type))].sort();
  const productGroups = types.map(type => ({
    type,
    products: getProductsByType(allProducts, type),
  }));

  return { featured, productGroups };
};
