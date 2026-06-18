export interface Testimonial {
  text: string;
  name: string;
  clientSince: string;
  seed: string;
  link?: string;
  linkLabel?: string;
}

export const testimonials: Testimonial[] = [
  {
    text: '"La atención fue excepcional. Me ayudaron a encontrar la montura perfecta y la receta quedó impecable. ¡Ahora veo y me veo genial!"',
    name: 'María González',
    clientSince: '2021',
    seed: 'testimonial-woman1',
  },
  {
    text: '"Los lentes progresivos cambiaron mi vida. La tecnología que usan para la medición es impresionante. Totalmente recomendados."',
    name: 'Carlos Mendoza',
    clientSince: '2019',
    seed: 'testimonial-man1',
  },
  {
    text: '"Llevé a mis hijos al examen visual y fueron súper pacientes. El ambiente es moderno y acogedor. Nuestra óptica de confianza."',
    name: 'Ana Rodríguez',
    clientSince: '2022',
    seed: 'testimonial-woman2',
  },
];
