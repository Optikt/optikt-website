export interface FeaturedProduct {
  name: string;
  type: string;
  imageKey: string;
  badge: string | null;
  badgeClass: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    name: 'American Specs WD1323',
    type: 'Montura Acetato',
    imageKey: 'american-specs-wd1323',
    badge: 'Nuevo',
    badgeClass: 'bg-accent-yellow text-navy-600',
  },
  {
    name: 'American Specs WD1464',
    type: 'Montura Acetato',
    imageKey: 'american-specs-wd1464',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Carolina Herrera CH0040',
    type: 'Montura Metal',
    imageKey: 'carolina-herrera-ch0040',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Fairuz JGX417036',
    type: 'Montura Acetato',
    imageKey: 'fairuz-jgx417036',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Kairos CO1162 C1',
    type: 'Montura Acetato',
    imageKey: 'kairos-co1162-c1',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Kairos CO1162 C2',
    type: 'Montura Acetato',
    imageKey: 'kairos-co1162-c2',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Palazzo 5255',
    type: 'Montura Acetato',
    imageKey: 'palazzo-5255',
    badge: null,
    badgeClass: '',
  },
  {
    name: 'Venetto VN725',
    type: 'Montura Metal',
    imageKey: 'venetto-vn725',
    badge: null,
    badgeClass: '',
  },
];
