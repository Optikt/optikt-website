export interface TechLensData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ComparisonData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  accented: boolean;
  overlay?: boolean;
  blur?: boolean;
}

export const techLensesData: TechLensData[] = [
  {
    title: 'Fotocromáticos',
    description: 'Se oscurecen con la luz solar y se aclaran en interiores automáticamente.',
    imageSrc: 'https://picsum.photos/seed/photochromic-lens-tech/400/250.jpg',
    imageAlt: 'Fotocromáticos',
  },
  {
    title: 'Blue Block',
    description: 'Filtran la luz azul de pantallas, reduciendo la fatiga visual digital.',
    imageSrc: 'https://picsum.photos/seed/blueblock-lens-screen/400/250.jpg',
    imageAlt: 'Blue Block',
  },
  {
    title: 'Antirreflejo',
    description: 'Capas multicapa que eliminan reflejos molestos y mejoran la nitidez.',
    imageSrc: 'https://picsum.photos/seed/antireflective-coating/400/250.jpg',
    imageAlt: 'Antirreflejo',
  },
  {
    title: 'Progresivos',
    description: 'Corrección visual suave de cerca, medio y lejos en un solo lente.',
    imageSrc: 'https://picsum.photos/seed/progressive-lens-diagram/400/250.jpg',
    imageAlt: 'Progresivos',
  },
];

export const comparisonData: ComparisonData[] = [
  {
    title: 'Sin Tratamiento',
    description: 'Reflejos y fatiga visual',
    imageSrc: 'https://picsum.photos/seed/lens-normal-view/300/300.jpg',
    imageAlt: 'Sin Tratamiento',
    accented: false,
    overlay: true,
    blur: false,
  },
  {
    title: 'Con Tratamiento OPTIK-T',
    description: 'Nitidez y protección total',
    imageSrc: 'https://picsum.photos/seed/lens-clear-view/300/300.jpg',
    imageAlt: 'Con Tratamiento',
    accented: true,
    overlay: false,
    blur: false,
  },
  {
    title: 'Lentes Comunes',
    description: 'Reflejos y baja nitidez',
    imageSrc: 'https://picsum.photos/seed/lens-glare-view/300/300.jpg',
    imageAlt: 'Reflejos',
    accented: false,
    overlay: true,
    blur: true,
  },
];
