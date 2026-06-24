import type { Picture } from '@sveltejs/enhanced-img';

import heroPrincipal from '$lib/images/hero/5.webp?enhanced';
import heroSunglassesFloat from '$lib/images/hero/6.webp?enhanced';
import heroFrameDetail from '$lib/images/hero/3.webp?enhanced';

import colGraduados from '$lib/images/colecciones/graduados/2.webp?enhanced';
import colSol from '$lib/images/colecciones/lentes-sol/1.webp?enhanced';
import colContacto from '$lib/images/colecciones/contacto/1.webp?enhanced';

import thumbCatEye from '$lib/images/colecciones/graduados/3.webp?enhanced';
import thumbRound from '$lib/images/colecciones/graduados/4.webp?enhanced';
import thumbRectangular from '$lib/images/colecciones/graduados/5.webp?enhanced';
import thumbAviator from '$lib/images/colecciones/lentes-sol/2.webp?enhanced';
import thumbWayfarer from '$lib/images/colecciones/lentes-sol/3.webp?enhanced';
import thumbOversized from '$lib/images/colecciones/lentes-sol/4.webp?enhanced';
import thumbContactDaily from '$lib/images/colecciones/contacto/2.webp?enhanced';
import thumbContactMonthly from '$lib/images/colecciones/contacto/3.webp?enhanced';
import thumbContactColor from '$lib/images/colecciones/contacto/4.webp?enhanced';

import lenteFotocromatico from '$lib/images/tech-lentes/fotocromatico.webp?enhanced';
import lenteBlueBlock from '$lib/images/tech-lentes/blue-block.webp?enhanced';
import lenteAntirreflejo from '$lib/images/tech-lentes/antirreflejo.webp?enhanced';
import lenteProgresivos from '$lib/images/tech-lentes/progresivos.webp?enhanced';

import galleryCatEye from '$lib/images/gallery/1.webp?enhanced';
import gallerySolPlaya from '$lib/images/gallery/2.webp?enhanced';
import galleryAviador from '$lib/images/gallery/3.webp?enhanced';
import galleryVintage from '$lib/images/gallery/4.webp?enhanced';
import galleryOversized from '$lib/images/gallery/5.webp?enhanced';
import galleryDeportivo from '$lib/images/gallery/6.webp?enhanced';
import galleryGeometrico from '$lib/images/gallery/7.webp?enhanced';
import galleryTransparente from '$lib/images/gallery/8.webp?enhanced';

import aboutInterior from '$lib/images/about/1.webp?enhanced';
import aboutTaller from '$lib/images/about/2.webp?enhanced';
import aboutClienteFeliz from '$lib/images/about/3.webp?enhanced';

import svcExamenVisual from '$lib/images/servicios/1.webp?enhanced';
import svcLaboratorio from '$lib/images/servicios/2.webp?enhanced';
import svcAdaptacion from '$lib/images/servicios/3.webp?enhanced';
import svcEquipos from '$lib/images/servicios/4.webp?enhanced';

import ftrAsCaballero from '$lib/images/featured/as-acetato-caballero.webp';
import ftrAsDama from '$lib/images/featured/as-acetato-dama.webp';
import ftrCarolinaHerrera from '$lib/images/featured/carolina-herrera-metal.webp';
import ftrFairuz from '$lib/images/featured/fairuz-acetato.webp';
import ftrKairos from '$lib/images/featured/kairos-acetato.webp';
import ftrKairos2 from '$lib/images/featured/kairos-acetato-2.webp';
import ftrPalazzo from '$lib/images/featured/palazzo-acetato.webp';
import ftrVenetto from '$lib/images/featured/veneto-metal.webp';

type ImagenSrc = string | Picture;

type ImagenCategoria =
  | 'coleccion'
  | 'montura'
  | 'lente'
  | 'testimonial'
  | 'gallery'
  | 'about'
  | 'hero'
  | 'servicios'
  | 'branding'
  | 'decorative';

export interface ImagenEntry {
  src: ImagenSrc;
  alt: string;
  nombre?: string;
  slug?: string;
  categoria?: ImagenCategoria;
  consultable: boolean;
  metadata?: {
    ref?: string;
    descripcion?: string;
    precio?: string;
  };
}

export type ImagenesCatalog = Record<string, ImagenEntry>;

export const imagenes: ImagenesCatalog = {
  // ============================================================
  // HERO
  // ============================================================
  'hero-principal': {
    src: heroPrincipal,
    alt: 'OPTIK-T Hero - exhibición de lentes de lujo',
    categoria: 'hero',
    consultable: false,
  },
  'hero-sunglasses-float': {
    src: heroSunglassesFloat,
    alt: 'Lentes de Sol flotantes',
    categoria: 'hero',
    consultable: false,
  },
  'hero-frame-detail': {
    src: heroFrameDetail,
    alt: 'Detalle de montura',
    categoria: 'hero',
    consultable: false,
  },

  // ============================================================
  // COLECCIONES
  // ============================================================
  'col-graduados': {
    src: colGraduados,
    alt: 'Lentes Graduados OPTIK-T',
    nombre: 'Lentes Graduados',
    categoria: 'coleccion',
    consultable: false,
  },
  'col-sol': {
    src: colSol,
    alt: 'Lentes de Sol OPTIK-T en playa',
    nombre: 'Lentes de Sol',
    categoria: 'coleccion',
    consultable: false,
  },
  'col-contacto': {
    src: colContacto,
    alt: 'Lentes de Contacto OPTIK-T',
    nombre: 'Lentes de Contacto',
    categoria: 'coleccion',
    consultable: false,
  },

  // ============================================================
  // MONTURAS (miniaturas de colecciones)
  // ============================================================
  'thumb-cat-eye': {
    src: thumbCatEye,
    alt: 'Montura Cat Eye',
    nombre: 'Cat Eye',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Montura estilo Cat Eye', precio: '' },
  },
  'thumb-round': {
    src: thumbRound,
    alt: 'Montura Redonda',
    nombre: 'Redondas',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Montura estilo Redondo', precio: '' },
  },
  'thumb-rectangular': {
    src: thumbRectangular,
    alt: 'Montura Rectangular',
    nombre: 'Rectangulares',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Montura estilo Rectangular', precio: '' },
  },
  'thumb-aviator': {
    src: thumbAviator,
    alt: 'Lentes de Sol Aviador',
    nombre: 'Aviador',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Lentes de Sol estilo Aviador', precio: '' },
  },
  'thumb-wayfarer': {
    src: thumbWayfarer,
    alt: 'Lentes de Sol Wayfarer',
    nombre: 'Wayfarer',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Lentes de Sol estilo Wayfarer', precio: '' },
  },
  'thumb-oversized': {
    src: thumbOversized,
    alt: 'Lentes de Sol Oversized',
    nombre: 'Oversized',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Lentes de Sol estilo Oversized', precio: '' },
  },
  'thumb-contact-daily': {
    src: thumbContactDaily,
    alt: 'Lentes de Contacto Diarios',
    nombre: 'Diarios',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Lentes de Contacto de uso diario', precio: '' },
  },
  'thumb-contact-monthly': {
    src: thumbContactMonthly,
    alt: 'Lentes de Contacto Mensuales',
    nombre: 'Mensuales',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Lentes de Contacto de uso mensual', precio: '' },
  },
  'thumb-contact-color': {
    src: thumbContactColor,
    alt: 'Lentes de Contacto Cosméticos',
    nombre: 'Cosméticos',
    categoria: 'montura',
    consultable: true,
    metadata: { descripcion: 'Lentes de Contacto cosméticos de color', precio: '' },
  },

  // ============================================================
  // MONTURAS DESTACADAS (featured products)
  // ============================================================
  'american-specs-wd1323': {
    src: ftrAsCaballero,
    alt: 'Montura American Specs WD1323 C4 acetato caballero',
    nombre: 'American Specs WD1323',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'WD1323 C4', descripcion: 'Montura American Specs acetato', precio: '' },
  },
  'american-specs-wd1464': {
    src: ftrAsDama,
    alt: 'Montura American Specs WD1464 C1 acetato dama',
    nombre: 'American Specs WD1464',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'WD1464 C1', descripcion: 'Montura American Specs acetato', precio: '' },
  },
  'carolina-herrera-ch0040': {
    src: ftrCarolinaHerrera,
    alt: 'Montura Carolina Herrera CH0040 BKU 140 metal',
    nombre: 'Carolina Herrera CH0040',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'CH0040 BKU 140', descripcion: 'Montura Carolina Herrera metal', precio: '' },
  },
  'fairuz-jgx417036': {
    src: ftrFairuz,
    alt: 'Montura Fairuz JGX417036-03 acetato',
    nombre: 'Fairuz JGX417036',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'JGX417036-03', descripcion: 'Montura Fairuz acetato', precio: '' },
  },
  'kairos-co1162-c1': {
    src: ftrKairos,
    alt: 'Montura Kairos CO1162 C1 acetato',
    nombre: 'Kairos CO1162 C1',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'CO1162 C1', descripcion: 'Montura Kairos acetato', precio: '' },
  },
  'kairos-co1162-c2': {
    src: ftrKairos2,
    alt: 'Montura Kairos CO1162 C2 acetato',
    nombre: 'Kairos CO1162 C2',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'CO1162 C2', descripcion: 'Montura Kairos acetato', precio: '' },
  },
  'palazzo-5255': {
    src: ftrPalazzo,
    alt: 'Montura Palazzo 5255 C6 acetato',
    nombre: 'Palazzo 5255',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: '5255 C6', descripcion: 'Montura Palazzo acetato', precio: '' },
  },
  'venetto-vn725': {
    src: ftrVenetto,
    alt: 'Montura Venetto VN725 C1 metal',
    nombre: 'Venetto VN725',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'VN725 C1', descripcion: 'Montura Venetto metal', precio: '' },
  },

  // ============================================================
  // LENTES
  // ============================================================
  'lente-fotocromatico': {
    src: lenteFotocromatico,
    alt: 'Tecnología de lente fotocromático',
    nombre: 'Fotocromáticos',
    categoria: 'lente',
    consultable: true,
    metadata: {
      ref: 'L-FC-001',
      descripcion: 'Lentes fotocromáticos con tecnología OPTIK-T',
      precio: '',
    },
  },
  'lente-blue-block': {
    src: lenteBlueBlock,
    alt: 'Tecnología de lente Blue Block para pantallas',
    nombre: 'Blue Block',
    categoria: 'lente',
    consultable: true,
    metadata: {
      ref: 'L-BB-002',
      descripcion: 'Lentes Blue Block que filtran luz azul',
      precio: '',
    },
  },
  'lente-antirreflejo': {
    src: lenteAntirreflejo,
    alt: 'Tecnología de lente antirreflejo multicapa',
    nombre: 'Antirreflejo',
    categoria: 'lente',
    consultable: true,
    metadata: { ref: 'L-AR-003', descripcion: 'Lentes con capa antirreflejo', precio: '' },
  },
  'lente-progresivos': {
    src: lenteProgresivos,
    alt: 'Tecnología de lentes progresivos',
    nombre: 'Progresivos',
    categoria: 'lente',
    consultable: true,
    metadata: {
      ref: 'L-PR-004',
      descripcion: 'Lentes progresivos visión cercana, media y lejana',
      precio: '',
    },
  },

  'comp-sin-tratamiento': {
    src: 'https://picsum.photos/seed/lens-normal-view/300/300.jpg',
    alt: 'Visión sin tratamiento OPTIK-T - reflejos y fatiga visual',
    nombre: 'Sin Tratamiento',
    categoria: 'lente',
    consultable: false,
  },
  'comp-con-tratamiento': {
    src: 'https://picsum.photos/seed/lens-clear-view/300/300.jpg',
    alt: 'Visión con tratamiento OPTIK-T - nitidez y protección',
    nombre: 'Con Tratamiento OPTIK-T',
    categoria: 'lente',
    consultable: false,
  },
  'comp-lentes-comunes': {
    src: 'https://picsum.photos/seed/lens-glare-view/300/300.jpg',
    alt: 'Lentes comunes sin tratamiento - reflejos y baja nitidez',
    nombre: 'Lentes Comunes',
    categoria: 'lente',
    consultable: false,
  },

  // ============================================================
  // GALERÍA
  // ============================================================
  'gallery-cat-eye': {
    src: galleryCatEye,
    alt: 'Look Cat Eye - mujer',
    categoria: 'gallery',
    consultable: false,
  },
  'gallery-sol-playa': {
    src: gallerySolPlaya,
    alt: 'Look Sol Playa',
    categoria: 'gallery',
    consultable: false,
  },
  'gallery-aviador': {
    src: galleryAviador,
    alt: 'Look Aviador - hombre',
    categoria: 'gallery',
    consultable: false,
  },
  'gallery-vintage': {
    src: galleryVintage,
    alt: 'Look Vintage redondo',
    categoria: 'gallery',
    consultable: false,
  },
  'gallery-oversized': {
    src: galleryOversized,
    alt: 'Look Oversized Glam',
    categoria: 'gallery',
    consultable: false,
  },
  'gallery-deportivo': {
    src: galleryDeportivo,
    alt: 'Look Deportivo Activo',
    categoria: 'gallery',
    consultable: false,
  },
  'gallery-geometrico': {
    src: galleryGeometrico,
    alt: 'Look Geométrico Moderno',
    categoria: 'gallery',
    consultable: false,
  },
  'gallery-transparente': {
    src: galleryTransparente,
    alt: 'Look Transparente Minimal',
    categoria: 'gallery',
    consultable: false,
  },

  // ============================================================
  // ABOUT
  // ============================================================
  'about-interior': {
    src: aboutInterior,
    alt: 'Interior de la boutique OPTIK-T',
    categoria: 'about',
    consultable: false,
  },
  'about-taller': {
    src: aboutTaller,
    alt: 'Taller de lentes OPTIK-T',
    categoria: 'about',
    consultable: false,
  },
  'about-cliente-feliz': {
    src: aboutClienteFeliz,
    alt: 'Cliente feliz usando montura OPTIK-T',
    categoria: 'about',
    consultable: false,
  },

  // ============================================================
  // SERVICIOS
  // ============================================================
  'svc-examen-visual': {
    src: svcExamenVisual,
    alt: 'Examen visual en OPTIK-T',
    categoria: 'servicios',
    consultable: false,
  },
  'svc-laboratorio': {
    src: svcLaboratorio,
    alt: 'Laboratorio de lentes OPTIK-T',
    categoria: 'servicios',
    consultable: false,
  },
  'svc-adaptacion': {
    src: svcAdaptacion,
    alt: 'Adaptación de montura en OPTIK-T',
    categoria: 'servicios',
    consultable: false,
  },
  'svc-equipos': {
    src: svcEquipos,
    alt: 'Equipos de diagnóstico OPTIK-T',
    categoria: 'servicios',
    consultable: false,
  },
};

export function getImagen(key: string): ImagenEntry | undefined {
  return imagenes[key];
}
