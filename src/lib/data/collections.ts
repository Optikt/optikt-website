export interface Thumbnail {
  src: string;
  alt: string;
}

export interface Collection {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  thumbnails: Thumbnail[];
}

export const collections: Collection[] = [
  {
    badge: '01 - Monturas Graduadas',
    title: 'Monturas que Definen tu Mirada',
    description:
      'Desde las clásicas hasta las más vanguardistas monturas de diseñador. Cada pieza es seleccionada por su calidad, comodidad y estilo.',
    imageSrc: 'https://picsum.photos/seed/prescription-glasses-display/800/600.jpg',
    imageAlt: 'Monturas Graduadas',
    thumbnails: [
      { src: 'https://picsum.photos/seed/frame-cat-eye-opt/300/200.jpg', alt: 'Cat Eye' },
      { src: 'https://picsum.photos/seed/frame-round-opt/300/200.jpg', alt: 'Redondas' },
      { src: 'https://picsum.photos/seed/frame-rectangular-opt/300/200.jpg', alt: 'Rectangulares' },
    ],
  },
  {
    badge: '02 - Gafas de Sol',
    title: 'Protección con Personalidad',
    description:
      'Lentes polarizados, espejados y fotocromáticos. Cada par combina protección UV 400 con el diseño que te define bajo el sol.',
    imageSrc: 'https://picsum.photos/seed/sunglasses-beach-style/800/600.jpg',
    imageAlt: 'Gafas de Sol',
    thumbnails: [
      { src: 'https://picsum.photos/seed/sun-aviator-opt/300/200.jpg', alt: 'Aviador' },
      { src: 'https://picsum.photos/seed/sun-wayfarer-opt/300/200.jpg', alt: 'Wayfarer' },
      { src: 'https://picsum.photos/seed/sun-oversized-opt/300/200.jpg', alt: 'Oversized' },
    ],
  },
  {
    badge: '03 - Lentes de Contacto',
    title: 'Libertad Visual Total',
    description:
      'Lentes de contacto diarios, quincenales y mensuales. También opciones cosméticas y especializadas para astigmatismo y presbicia.',
    imageSrc: 'https://picsum.photos/seed/contact-lens-eye-closeup/800/600.jpg',
    imageAlt: 'Lentes de Contacto',
    thumbnails: [
      { src: 'https://picsum.photos/seed/contact-daily-opt/300/200.jpg', alt: 'Diarios' },
      { src: 'https://picsum.photos/seed/contact-monthly-opt/300/200.jpg', alt: 'Mensuales' },
      { src: 'https://picsum.photos/seed/contact-color-opt/300/200.jpg', alt: 'Cosméticos' },
    ],
  },
];
