import { error } from '@sveltejs/kit';
import { PUBLIC_R2_CATALOG_BASE_URL } from '$env/static/public';
import { getProductDetail, getProductList } from '$lib/server/r2-catalog';
import type { ProductSnapshot } from '$lib/schemas/catalog';

export interface ProductDetailData {
  product: ProductSnapshot | null;
  related: ProductSnapshot[];
  catalogError: string | null;
}

export const load = async ({ params, fetch }): Promise<ProductDetailData> => {
  const { sku } = params;

  if (PUBLIC_R2_CATALOG_BASE_URL) {
    const allProducts = await getProductList(fetch);
    if (allProducts.length === 0) {
      return {
        product: null,
        related: [],
        catalogError: 'No pudimos cargar el catálogo en este momento.',
      };
    }
  }

  const product = await getProductDetail(sku, fetch);

  if (!product) {
    error(404, {
      message: `Producto "${sku}" no encontrado`,
    });
  }

  const allProducts = await getProductList(fetch);
  const related = allProducts
    .filter((p) => p.sku !== sku && (p.type === product.type || p.brand === product.brand))
    .slice(0, 4);

  return { product, related, catalogError: null };
};
