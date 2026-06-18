export interface FeaturedProduct {
  name: string;
  type: string;
  image: string;
  badge: string | null;
  badgeClass: string;
}

export const featuredProducts: FeaturedProduct[] = [
  { name: 'Cat-Eye Sofia', type: 'Montura Acetato', image: 'https://picsum.photos/seed/optik-cat-eye-tortoise/400/400.jpg', badge: 'Nuevo', badgeClass: 'bg-accent-yellow text-navy-600' },
  { name: 'Aviator Clásico', type: 'Lentes de Sol', image: 'https://picsum.photos/seed/optik-aviator-gold/400/400.jpg', badge: null, badgeClass: '' },
  { name: 'Redondo Titanio', type: 'Montura Metal', image: 'https://picsum.photos/seed/optik-round-titanium/400/400.jpg', badge: 'Popular', badgeClass: 'bg-navy-600 text-white' },
  { name: 'Oversized Elegance', type: 'Lentes de Sol', image: 'https://picsum.photos/seed/optik-oversized-black/400/400.jpg', badge: null, badgeClass: '' },
  { name: 'Browline Retro', type: 'Montura Mixta', image: 'https://picsum.photos/seed/optik-browline-retro/400/400.jpg', badge: null, badgeClass: '' },
  { name: 'Sport Wrap', type: 'Sol Deportivo', image: 'https://picsum.photos/seed/optik-sport-wrap/400/400.jpg', badge: 'Deporte', badgeClass: 'bg-green-500 text-white' },
  { name: 'Geometric Hex', type: 'Montura Acetato', image: 'https://picsum.photos/seed/optik-geometric-hex/400/400.jpg', badge: 'Exclusivo', badgeClass: 'bg-accent-yellow text-navy-600' },
  { name: 'Rimless Minimal', type: 'Montura Titanio', image: 'https://picsum.photos/seed/optik-rimless-minimal/400/400.jpg', badge: null, badgeClass: '' },
];
