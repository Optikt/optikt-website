export interface FeaturedProduct {
  name: string;
  type: string;
  imageKey: string;
  badge: string | null;
  badgeClass: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    name: 'Cat-Eye Sofia',
    type: 'Montura Acetato',
    imageKey: 'montura-cat-eye-sofia',
    badge: 'Nuevo',
    badgeClass: 'bg-accent-yellow text-navy-600',
  },
  {
    name: 'Aviator Clásico',
    type: 'Lentes de Sol',
    imageKey: 'montura-aviator-clasico',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Redondo Titanio',
    type: 'Montura Metal',
    imageKey: 'montura-redondo-titanio',
    badge: 'Popular',
    badgeClass: 'bg-navy-600 text-white',
  },
  {
    name: 'Oversized Elegance',
    type: 'Lentes de Sol',
    imageKey: 'montura-oversized-elegance',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Browline Retro',
    type: 'Montura Mixta',
    imageKey: 'montura-browline-retro',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Sport Wrap',
    type: 'Sol Deportivo',
    imageKey: 'montura-sport-wrap',
    badge: 'Deporte',
    badgeClass: 'bg-green-500 text-white',
  },
  {
    name: 'Geometric Hex',
    type: 'Montura Acetato',
    imageKey: 'montura-geometric-hex',
    badge: 'Exclusivo',
    badgeClass: 'bg-accent-yellow text-navy-600',
  },
  {
    name: 'Rimless Minimal',
    type: 'Montura Titanio',
    imageKey: 'montura-rimless-minimal',
    badge: null,
    badgeClass: '',
  },
];
