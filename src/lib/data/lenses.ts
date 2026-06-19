export interface TechLensData {
  title: string;
  description: string;
  imageKey: string;
}

export interface ComparisonData {
  title: string;
  description: string;
  imageKey: string;
  accented: boolean;
  overlay?: boolean;
  blur?: boolean;
}

export const techLensesData: TechLensData[] = [
  {
    title: 'Fotocromáticos',
    description: 'Se oscurecen con la luz solar y se aclaran en interiores automáticamente.',
    imageKey: 'lente-fotocromatico',
  },
  {
    title: 'Blue Block',
    description: 'Filtran la luz azul de pantallas, reduciendo la fatiga visual digital.',
    imageKey: 'lente-blue-block',
  },
  {
    title: 'Antirreflejo',
    description: 'Capas multicapa que eliminan reflejos molestos y mejoran la nitidez.',
    imageKey: 'lente-antirreflejo',
  },
  {
    title: 'Progresivos',
    description: 'Corrección visual suave de cerca, medio y lejos en un solo lente.',
    imageKey: 'lente-progresivos',
  },
];

export const comparisonData: ComparisonData[] = [
  {
    title: 'Sin Tratamiento',
    description: 'Reflejos y fatiga visual',
    imageKey: 'comp-sin-tratamiento',
    accented: false,
    overlay: true,
    blur: false,
  },
  {
    title: 'Con Tratamiento OPTIK-T',
    description: 'Nitidez y protección total',
    imageKey: 'comp-con-tratamiento',
    accented: true,
    overlay: false,
    blur: false,
  },
  {
    title: 'Lentes Comunes',
    description: 'Reflejos y baja nitidez',
    imageKey: 'comp-lentes-comunes',
    accented: false,
    overlay: true,
    blur: true,
  },
];
