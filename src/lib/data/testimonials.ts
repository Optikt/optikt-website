export interface Testimonial {
  text: string;
  name: string;
  clientSince: string;
  seed: string;
  link?: string;
  linkLabel?: string;
}
// W: 4 M: 3
export const testimonials: Testimonial[] = [
  {
    text: '"Fui a realizar mis nuevos lentes y noté que tienen opciones económicas y bonitas. En relación precio/calidad están bastante equilibrados. Y la atención bastante personalizada, me atendieron con bastante paciencia. 10/10."',
    name: "Rose García",
    clientSince: "2026",
    link: "https://maps.app.goo.gl/w5GNnq3NbuDLFYCJA",
    seed: "testimonial-woman1",
  },
  {
    text: '"Monturas de calidad, buen precio, gran atención. 100% recomendados."',
    name: "José Prieto",
    clientSince: "2026",
    link: "https://maps.app.goo.gl/8KwzRZvcyHjEA9EGA",
    seed: "testimonial-man1",
  },
  {
    text: '"Excelente atención y las monturas más icónicas y con estilo que he visto 😍🕶️👓…"',
    name: "Jennifer Serrano",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/UxtmDx9XiYanGB3z8",
    seed: "testimonial-woman2",
  },
  {
    text: '"Muy buena la atención, bonitas monturas, un personal muy amable se lo recomiendo."',
    name: "Rosita Ricardo",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/7EqwJ6yRDCWrrgbn6",
    seed: "testimonial-woman3",
  },
  {
    text: '"Una buena atención y la calidad de los lentes es execelente y las monturas son modernas y elegantes."',
    name: "Felix Navarro",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/jmbzpJSg3mWPLAxA7",
    seed: "testimonial-man2",
  },
  {
    text: '"Muchas variedad de Monturas me encantaron y  excelente precio y ni hablar de la atención muy buena los felicito."',
    name: "Yoli",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/21MVdJGAeYEANmwSA",
    seed: "testimonial-woman4",
  },
  {
    text: '"Excelente atención y los mejores precios ☺️"',
    name: "Darielis Salazar",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/t8SnYwVbBgTv5zXB6",
    seed: "testimonial-woman5",
  },
    {
    text: '"Excelente asesoría y servicio, muy buenos precios!"',
    name: "Ricardo Diaz",
    clientSince: "2026",
    link: "https://maps.app.goo.gl/vN8tVCU6K4xt24Yt5",
    seed: "testimonial-man3",
  },
  //
    {
    text: '"Excelente atención, lentes de nuevos modelos, pago accesible"',
    name: "Sofia Carvajal",
    clientSince: "2026",
    link: "https://maps.app.goo.gl/gNV6U3nMTYwvjQXWA",
    seed: "testimonial-woman5",
  },
  
];
