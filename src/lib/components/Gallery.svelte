<script lang="ts">
  import Instagram from '$lib/components/social-media/Instagram.svelte';
  import Img from '$lib/components/Img.svelte';
  import { fadeIn } from '$lib/utils/animations';
  import { imagenes } from '$lib/data/images';
  import { business } from '$lib/data/business';

  interface GalleryCard {
    imageKey: string;
    label: string;
    tall: boolean;
  }

  const cards: GalleryCard[] = [
    { imageKey: 'gallery-cat-eye', label: 'Cat Eye · Mujer', tall: true },
    { imageKey: 'gallery-sol-playa', label: 'Sol · Playa', tall: false },
    { imageKey: 'gallery-aviador', label: 'Aviador · Hombre', tall: false },
    { imageKey: 'gallery-vintage', label: 'Redondo · Vintage', tall: true },
    { imageKey: 'gallery-oversized', label: 'Oversized · Glam', tall: true },
    { imageKey: 'gallery-deportivo', label: 'Sport · Activo', tall: false },
    { imageKey: 'gallery-geometrico', label: 'Geométrico · Moderno', tall: false },
    { imageKey: 'gallery-transparente', label: 'Clear · Minimal', tall: true },
  ];
</script>

{#snippet galleryCard(c: GalleryCard)}
  {@const img = imagenes[c.imageKey]}
  <div
    class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]"
  >
    <Img
      src={img.src}
      alt={img.alt}
      class="w-full {c.tall ? 'h-64' : 'h-48'} object-cover transition-all duration-500"
      loading="lazy"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
    >
      <span class="text-white text-xs font-semibold tracking-wider uppercase">{c.label}</span>
    </div>
  </div>
{/snippet}

<section id="galeria" class="py-24 md:py-32 bg-stone-50">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="text-center mb-16">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Lookbook</span>
      <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">
        Galería de Estilo
      </h2>
      <p class="text-navy-300 mt-4 max-w-xl mx-auto">
        Inspírate con nuestros looks. Cada imagen refleja la personalidad y el estilo que OPTIK-T
        puede darte.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="space-y-4">
        {@render galleryCard(cards[0])}
        {@render galleryCard(cards[1])}
      </div>
      <div class="space-y-4 pt-8">
        {@render galleryCard(cards[2])}
        {@render galleryCard(cards[3])}
      </div>
      <div class="space-y-4">
        {@render galleryCard(cards[4])}
        {@render galleryCard(cards[5])}
      </div>
      <div class="space-y-4 pt-8">
        {@render galleryCard(cards[6])}
        {@render galleryCard(cards[7])}
      </div>
    </div>

    <div use:fadeIn={{}} class="text-center mt-12">
      <a
        href={business.socialLinks[0].href}
        target="_blank"
        rel="noreferrer external"
        class="inline-flex items-center gap-3 bg-navy-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-navy-500 transition-all duration-300"
      >
        <Instagram class="w-5 h-5" />
        Síguenos en @optikt_
      </a>
    </div>
  </div>
</section>
