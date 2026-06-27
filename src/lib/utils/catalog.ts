import type { ProductSnapshot } from '$lib/schemas/catalog';

export function getAllTypes(products: ProductSnapshot[]): string[] {
  return [...new Set(products.map(p => p.type))].sort();
}

export function getAllBrands(products: ProductSnapshot[]): string[] {
  return [...new Set(products.map(p => p.brand))].sort();
}

export function getProductsByType(products: ProductSnapshot[], type: string): ProductSnapshot[] {
  return products.filter(p => p.type === type);
}
