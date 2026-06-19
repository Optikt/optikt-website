export interface Testimonial {
  text: string;
  name: string;
  clientSince: string;
  imageKey: string;
  link?: string;
  linkLabel?: string;
}

export const testimonials: Testimonial[] = [
  {
    text: '"Fui a realizar mis nuevos lentes y noté que tienen opciones económicas y bonitas. En relación precio/calidad están bastante equilibrados. Y la atención bastante personalizada, me atendieron con bastante paciencia. 10/10."',
    name: "Rose García",
    clientSince: "2026",
    link: "https://maps.app.goo.gl/w5GNnq3NbuDLFYCJA",
    imageKey: "test-rose-garcia",
  },
  {
    text: '"Monturas de calidad, buen precio, gran atención. 100% recomendados."',
    name: "José Prieto",
    clientSince: "2026",
    link: "https://maps.app.goo.gl/8KwzRZvcyHjEA9EGA",
    imageKey: "test-jose-prieto",
  },
  {
    text: '"Excelente atención y las monturas más icónicas y con estilo que he visto 😍🕶️👓…"',
    name: "Jennifer Serrano",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/UxtmDx9XiYanGB3z8",
    imageKey: "test-jennifer-serrano",
  },
  {
    text: '"Muy buena la atención, bonitas monturas, un personal muy amable se lo recomiendo."',
    name: "Rosita Ricardo",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/7EqwJ6yRDCWrrgbn6",
    imageKey: "test-rosita-ricardo",
  },
  {
    text: '"Una buena atención y la calidad de los lentes es execelente y las monturas son modernas y elegantes."',
    name: "Felix Navarro",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/jmbzpJSg3mWPLAxA7",
    imageKey: "test-felix-navarro",
  },
  {
    text: '"Muchas variedad de Monturas me encantaron y  excelente precio y ni hablar de la atención muy buena los felicito."',
    name: "Yoli",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/21MVdJGAeYEANmwSA",
    imageKey: "test-yoli",
  },
  {
    text: '"Excelente atención y los mejores precios ☺️"',
    name: "Darielis Salazar",
    clientSince: "2025",
    link: "https://maps.app.goo.gl/t8SnYwVbBgTv5zXB6",
    imageKey: "test-darielis-salazar",
  },
  {
    text: '"Excelente asesoría y servicio, muy buenos precios!"',
    name: "Ricardo Diaz",
    clientSince: "2026",
    link: "https://maps.app.goo.gl/vN8tVCU6K4xt24Yt5",
    imageKey: "test-ricardo-diaz",
  },
  {
    text: '"Excelente atención, lentes de nuevos modelos, pago accesible"',
    name: "Sofia Carvajal",
    clientSince: "2026",
    link: "https://maps.app.goo.gl/gNV6U3nMTYwvjQXWA",
    imageKey: "test-sofia-carvajal",
  },
];
