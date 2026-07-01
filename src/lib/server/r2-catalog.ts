import { env } from '$env/dynamic/public';
import { mockProducts, mockFeatured } from '$lib/data/mock-catalog';
import type { ProductSnapshot } from '$lib/schemas/catalog';

const catalogBaseUrl = env.PUBLIC_R2_CATALOG_BASE_URL;

function useMock(): boolean {
  return !catalogBaseUrl;
}

export async function getProductList(fetchFn: typeof fetch = fetch): Promise<ProductSnapshot[]> {
  if (useMock()) return mockProducts;

  try {
    const res = await fetchFn(`${catalogBaseUrl}/products.json`);
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getProductDetail(
  sku: string,
  fetchFn: typeof fetch = fetch,
): Promise<ProductSnapshot | null> {
  if (useMock()) return mockProducts.find((p) => p.sku === sku) ?? null;

  try {
    const res = await fetchFn(`${catalogBaseUrl}/products/${encodeURIComponent(sku)}.json`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getFeatured(fetchFn: typeof fetch = fetch): Promise<ProductSnapshot[]> {
  if (useMock()) return mockFeatured;

  try {
    const res = await fetchFn(`${catalogBaseUrl}/featured.json`);
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
