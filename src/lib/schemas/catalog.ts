import { z } from 'zod/v4';

export const SrcsetEntrySchema = z.object({
  w: z.number().positive(),
  url: z.string().url(),
});

export const ProductImagesSchema = z.object({
  default: z.string().url(),
  srcset: z.array(SrcsetEntrySchema),
});

export const ProductSnapshotSchema = z.object({
  sku: z.string().min(1),
  name: z.string().min(1),
  brand: z.string().min(1),
  type: z.string().min(1),
  description: z.string(),
  salePrice: z.number().min(0),
  imageBaseKey: z.string(),
  images: ProductImagesSchema,
  featured: z.boolean(),
  sort: z.number().int(),
  badge: z.enum(['Nuevo', 'Popular']).nullable().optional(),
  gender: z.enum(['Hombre', 'Mujer', 'Unisex']).nullable().optional(),
  material: z.string().nullable().optional(),
  gallery: z.array(ProductImagesSchema).optional(),
});

export const ProductListSchema = z.array(ProductSnapshotSchema);

export type SrcsetEntry = z.infer<typeof SrcsetEntrySchema>;
export type ProductImages = z.infer<typeof ProductImagesSchema>;
export type ProductSnapshot = z.infer<typeof ProductSnapshotSchema>;
