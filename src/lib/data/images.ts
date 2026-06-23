import type { Picture } from '@sveltejs/enhanced-img';

import heroPrincipal from '$lib/images/hero/5.webp';
import heroSunglassesFloat from '$lib/images/hero/6.webp';
import heroFrameDetail from '$lib/images/hero/3.webp';

import colGraduados from '$lib/images/colecciones/graduados/2.webp';
import colSol from '$lib/images/colecciones/lentes-sol/1.webp';
import colContacto from '$lib/images/colecciones/contacto/1.webp';

import thumbCatEye from '$lib/images/colecciones/graduados/3.webp';
import thumbRound from '$lib/images/colecciones/graduados/4.webp';
import thumbRectangular from '$lib/images/colecciones/graduados/5.webp';
import thumbAviator from '$lib/images/colecciones/lentes-sol/2.webp';
import thumbWayfarer from '$lib/images/colecciones/lentes-sol/3.webp';
import thumbOversized from '$lib/images/colecciones/lentes-sol/4.webp';
import thumbContactDaily from '$lib/images/colecciones/contacto/2.webp';
import thumbContactMonthly from '$lib/images/colecciones/contacto/3.webp';
import thumbContactColor from '$lib/images/colecciones/contacto/4.webp';

import lenteFotocromatico from '$lib/images/tech-lentes/fotocromatico.webp';
import lenteBlueBlock from '$lib/images/tech-lentes/blue-block.webp';
import lenteAntirreflejo from '$lib/images/tech-lentes/antirreflejo.webp';
import lenteProgresivos from '$lib/images/tech-lentes/progresivos.webp';

import galleryCatEye from '$lib/images/gallery/1.webp';
import gallerySolPlaya from '$lib/images/gallery/2.webp';
import galleryAviador from '$lib/images/gallery/3.webp';
import galleryVintage from '$lib/images/gallery/4.webp';
import galleryOversized from '$lib/images/gallery/5.webp';
import galleryDeportivo from '$lib/images/gallery/6.webp';
import galleryGeometrico from '$lib/images/gallery/7.webp';
import galleryTransparente from '$lib/images/gallery/8.webp';

import aboutInterior from '$lib/images/about/1.webp';
import aboutTaller from '$lib/images/about/2.webp';
import aboutClienteFeliz from '$lib/images/about/3.webp';

import svcExamenVisual from '$lib/images/servicios/1.webp';
import svcLaboratorio from '$lib/images/servicios/2.webp';
import svcAdaptacion from '$lib/images/servicios/3.webp';
import svcEquipos from '$lib/images/servicios/4.webp';

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
  // MONTURAS DESTACADAS (featured products) — external picsum
  // ============================================================
  'montura-cat-eye-sofia': {
    src: 'https://picsum.photos/seed/optik-cat-eye-tortoise/400/400.jpg',
    alt: 'Montura Cat-Eye Sofía color carey',
    nombre: 'Cat-Eye Sofía',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'M-CES-001', descripcion: 'Montura acetato Cat-Eye', precio: '' },
  },
  'montura-aviator-clasico': {
    src: 'https://picsum.photos/seed/optik-aviator-gold/400/400.jpg',
    alt: 'Lentes de Sol Aviador Clásico dorados',
    nombre: 'Aviador Clásico',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'M-AC-002', descripcion: 'Lentes de Sol Aviador', precio: '' },
  },
  'montura-redondo-titanio': {
    src: 'https://picsum.photos/seed/optik-round-titanium/400/400.jpg',
    alt: 'Montura Redondo Titanio',
    nombre: 'Redondo Titanio',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'M-RT-003', descripcion: 'Montura metal Redondo', precio: '' },
  },
  'montura-oversized-elegance': {
    src: 'https://picsum.photos/seed/optik-oversized-black/400/400.jpg',
    alt: 'Lentes de Sol Oversized Elegance negros',
    nombre: 'Oversized Elegance',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'M-OE-004', descripcion: 'Lentes de Sol Oversized', precio: '' },
  },
  'montura-browline-retro': {
    src: 'https://picsum.photos/seed/optik-browline-retro/400/400.jpg',
    alt: 'Montura Browline Retro mixta',
    nombre: 'Browline Retro',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'M-BR-005', descripcion: 'Montura mixta Browline', precio: '' },
  },
  'montura-sport-wrap': {
    src: 'https://picsum.photos/seed/optik-sport-wrap/400/400.jpg',
    alt: 'Lentes de Sol Deportivos Sport Wrap',
    nombre: 'Sport Wrap',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'M-SW-006', descripcion: 'Lentes de Sol deportivos', precio: '' },
  },
  'montura-geometric-hex': {
    src: 'https://picsum.photos/seed/optik-geometric-hex/400/400.jpg',
    alt: 'Montura Geometric Hex acetato',
    nombre: 'Geometric Hex',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'M-GH-007', descripcion: 'Montura acetato geométrica', precio: '' },
  },
  'montura-rimless-minimal': {
    src: 'https://picsum.photos/seed/optik-rimless-minimal/400/400.jpg',
    alt: 'Montura Rimless Minimal titanio',
    nombre: 'Rimless Minimal',
    categoria: 'montura',
    consultable: true,
    metadata: { ref: 'M-RM-008', descripcion: 'Montura titanio Rimless', precio: '' },
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

  // ============================================================
  // TESTIMONIALS — external picsum
  // ============================================================
  'test-rose-garcia': {
    src: 'https://picsum.photos/seed/testimonial-woman1/80/80.jpg',
    alt: 'Foto de perfil de Rose García',
    categoria: 'testimonial',
    consultable: false,
  },
  'test-jose-prieto': {
    src: 'https://picsum.photos/seed/testimonial-man1/80/80.jpg',
    alt: 'Foto de perfil de José Prieto',
    categoria: 'testimonial',
    consultable: false,
  },
  'test-jennifer-serrano': {
    src: 'https://picsum.photos/seed/testimonial-woman2/80/80.jpg',
    alt: 'Foto de perfil de Jennifer Serrano',
    categoria: 'testimonial',
    consultable: false,
  },
  'test-rosita-ricardo': {
    src: 'https://picsum.photos/seed/testimonial-woman3/80/80.jpg',
    alt: 'Foto de perfil de Rosita Ricardo',
    categoria: 'testimonial',
    consultable: false,
  },
  'test-felix-navarro': {
    src: 'https://picsum.photos/seed/testimonial-man2/80/80.jpg',
    alt: 'Foto de perfil de Felix Navarro',
    categoria: 'testimonial',
    consultable: false,
  },
  'test-yoli': {
    src: 'https://picsum.photos/seed/testimonial-woman4/80/80.jpg',
    alt: 'Foto de perfil de Yoli',
    categoria: 'testimonial',
    consultable: false,
  },
  'test-darielis-salazar': {
    src: 'https://picsum.photos/seed/testimonial-woman5/80/80.jpg',
    alt: 'Foto de perfil de Darielis Salazar',
    categoria: 'testimonial',
    consultable: false,
  },
  'test-ricardo-diaz': {
    src: 'https://picsum.photos/seed/testimonial-man3/80/80.jpg',
    alt: 'Foto de perfil de Ricardo Diaz',
    categoria: 'testimonial',
    consultable: false,
  },
  'test-sofia-carvajal': {
    src: 'https://picsum.photos/seed/testimonial-woman5/80/80.jpg',
    alt: 'Foto de perfil de Sofia Carvajal',
    categoria: 'testimonial',
    consultable: false,
  },
};

export function getImagen(key: string): ImagenEntry | undefined {
  return imagenes[key];
}
