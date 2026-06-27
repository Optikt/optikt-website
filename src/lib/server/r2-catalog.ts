import { PUBLIC_R2_CATALOG_BASE_URL } from '$env/static/public';
import { mockProducts, mockFeatured } from '$lib/data/mock-catalog';
import type { ProductSnapshot } from '$lib/schemas/catalog';

function useMock(): boolean {
  return !PUBLIC_R2_CATALOG_BASE_URL;
}

export async function getProductList(fetchFn: typeof fetch = fetch): Promise<ProductSnapshot[]> {
  if (useMock()) return mockProducts;

  try {
    const res = await fetchFn(`${PUBLIC_R2_CATALOG_BASE_URL}/products.json`);
    if (!res.ok) return mockProducts;
    return res.json();
  } catch {
    return mockProducts;
  }
}

export async function getProductDetail(
  sku: string,
  fetchFn: typeof fetch = fetch,
): Promise<ProductSnapshot | null> {
  if (useMock()) return mockProducts.find(p => p.sku === sku) ?? null;

  try {
    const res = await fetchFn(`${PUBLIC_R2_CATALOG_BASE_URL}/products/${encodeURIComponent(sku)}.json`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getFeatured(fetchFn: typeof fetch = fetch): Promise<ProductSnapshot[]> {
  if (useMock()) return mockFeatured;

  try {
    const res = await fetchFn(`${PUBLIC_R2_CATALOG_BASE_URL}/featured.json`);
    if (!res.ok) return mockFeatured;
    return res.json();
  } catch {
    return mockFeatured;
  }
}

