import { error } from '@sveltejs/kit';
import { getProductDetail, getProductList } from '$lib/server/r2-catalog';
import type { ProductSnapshot } from '$lib/schemas/catalog';

export interface ProductDetailData {
  product: ProductSnapshot;
  related: ProductSnapshot[];
}

export const load = async ({ params, fetch }): Promise<ProductDetailData> => {
  const { sku } = params;
  const product = await getProductDetail(sku, fetch);

  if (!product) {
    error(404, {
      message: `Producto "${sku}" no encontrado`,
    });
  }

  const allProducts = await getProductList(fetch);
  const related = allProducts.filter(
    p => p.sku !== sku && (p.type === product.type || p.brand === product.brand),
  ).slice(0, 4);

  return { product, related };
};
