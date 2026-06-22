interface Thumbnail {
  imageKey: string;
  alt?: string;
}

export interface Collection {
  badge: string;
  title: string;
  description: string;
  imageKey: string;
  thumbnails: Thumbnail[];
}

export const collections: Collection[] = [
  {
    badge: '01 - Lentes Graduados',
    title: 'Monturas que Definen tu Mirada',
    description:
      'Desde las clásicas hasta las más modernas monturas. Cada pieza es seleccionada por su calidad, comodidad y estilo.',
    imageKey: 'col-graduados',
    thumbnails: [
      { imageKey: 'thumb-cat-eye' },
      { imageKey: 'thumb-round' },
      { imageKey: 'thumb-rectangular' },
    ],
  },
  {
    badge: '02 - Lentes de Sol',
    title: 'Protección con Personalidad',
    description:
      'Lentes polarizados, espejados y fotocromáticos. Cada par combina protección UV con el diseño que te define bajo el sol.',
    imageKey: 'col-sol',
    thumbnails: [
      { imageKey: 'thumb-aviator' },
      { imageKey: 'thumb-wayfarer' },
      { imageKey: 'thumb-oversized' },
    ],
  },
  {
    badge: '03 - Lentes de Contacto',
    title: 'Libertad Visual Total',
    description:
      'Lentes de contacto diarios, quincenales y mensuales. También opciones cosméticas y especializadas para astigmatismo y presbicia.',
    imageKey: 'col-contacto',
    thumbnails: [
      { imageKey: 'thumb-contact-daily' },
      { imageKey: 'thumb-contact-monthly' },
      { imageKey: 'thumb-contact-color' },
    ],
  },
];
