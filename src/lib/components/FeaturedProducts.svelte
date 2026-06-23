<script lang="ts">
  import { featuredProducts } from '$lib/data/featured';
  import type { FeaturedProduct } from '$lib/data/featured';
  import Img from '$lib/components/Img.svelte';
  import { imagenes } from '$lib/data/images';
  import { fadeIn } from '$lib/utils/animations';
  import { MessageCircle } from '@lucide/svelte';

  let { onOpenModal }: { onOpenModal: (product?: { imageKey: string }) => void } = $props();

  function createConsultHandler(p: FeaturedProduct) {
    return () => onOpenModal({ imageKey: p.imageKey });
  }
</script>

{#snippet productCard(product: FeaturedProduct, i: number)}
  {@const img = imagenes[product.imageKey]}
  <div use:fadeIn={{ delay: (i + 1) * 0.1 }} class="group cursor-pointer">
    <div
      class="relative bg-white rounded-2xl p-4 overflow-hidden border border-stone-100 group-hover:border-accent-yellow/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-yellow/5 lens-shine"
    >
      <Img
        src={img.src}
        alt={img.alt}
        class="w-full aspect-square object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {#if product.badge}
        <div
          class="absolute top-6 left-6 {product.badgeClass} text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full"
        >
          {product.badge}
        </div>
      {/if}
      <div
        class="absolute inset-0 bg-navy-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center"
      >
        <button
          onclick={createConsultHandler(product)}
          class="bg-white text-navy-600 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-yellow hover:text-navy-600 transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer"
        >
          <MessageCircle class="w-4 h-4" /> Consultar
        </button>
      </div>
    </div>
    <div class="mt-4 px-1">
      <h4 class="font-semibold text-navy-600">{product.name}</h4>
      <p class="text-navy-300 text-sm mt-1">{product.type}</p>
    </div>
  </div>
{/snippet}

<section class="py-24 bg-stone-50">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
      <div>
        <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase"
          >Destacados</span
        >
        <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">
          Lo Más Nuevo
        </h2>
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {#each featuredProducts.slice(0, 4) as product, i (product.imageKey)}
        {@render productCard(product, i)}
      {/each}
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {#each featuredProducts.slice(4) as product, i (product.imageKey)}
        {@render productCard(product, i)}
      {/each}
    </div>
  </div>
</section>
