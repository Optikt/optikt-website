<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import { MessageCircle } from '@lucide/svelte';
  import { resolve } from '$app/paths';
  import type { ProductSnapshot } from '$lib/schemas/catalog';

  let {
    products = [],
    onConsult,
  }: {
    products?: ProductSnapshot[];
    onConsult?: (product: { name: string; sku: string }) => void;
  } = $props();
</script>

{#snippet productCard(product: ProductSnapshot, i: number)}
  <div use:fadeIn={{ delay: (i + 1) * 0.1 }} class="group cursor-pointer">
    <div
      class="relative bg-white rounded-2xl p-4 overflow-hidden border border-stone-100 group-hover:border-accent-yellow/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-yellow/5 lens-shine"
    >
      <div class="relative overflow-hidden rounded-xl bg-stone-200 animate-pulse">
        <img
          src={product.images.default}
          alt={product.name}
          class="relative z-10 w-full aspect-square object-cover rounded-xl group-hover:scale-105 transition-all duration-500 opacity-0"
          loading="lazy"
          decoding="async"
          srcset={product.images.srcset.map(s => `${s.url} ${s.w}w`).join(', ')}
          sizes="(max-width: 768px) 50vw, 25vw"
          onload={(e: Event) => (e.target as HTMLImageElement)?.classList.remove('opacity-0')}
        />
      </div>
      <div
        class="absolute inset-0 bg-navy-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center"
      >
        <button
          onclick={() => onConsult?.({ name: product.name, sku: product.sku })}
          class="bg-white text-navy-600 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-yellow hover:text-navy-600 transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer"
        >
          <MessageCircle class="w-4 h-4" /> Consultar
        </button>
      </div>
    </div>
    <div class="mt-4 px-1">
      <p class="text-xs text-accent-yellow font-semibold tracking-wider uppercase">{product.brand}</p>
      <h3 class="font-semibold text-navy-600">{product.name}</h3>
      <p class="text-navy-300 text-sm mt-1">{product.type}</p>
    </div>
  </div>
{/snippet}

<section id="colecciones" class="py-24 bg-stone-50">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
      <div>
        <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Destacados</span>
        <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">Lo Más Nuevo</h2>
      </div>
    </div>

    {#if products.length > 0}
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {#each products.slice(0, 4) as product, i (product.sku)}
          {@render productCard(product, i)}
        {/each}
      </div>

      {#if products.length > 4}
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {#each products.slice(4) as product, i (product.sku)}
            {@render productCard(product, i + 4)}
          {/each}
        </div>
      {/if}
    {:else}
      <p class="text-navy-300 text-center">No hay productos destacados en este momento.</p>
    {/if}
    <div class="text-center mt-12">
      <a
        href={resolve('/colecciones')}
        class="inline-flex items-center gap-2 bg-navy-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-accent-yellow hover:text-navy-600 transition-all duration-300"
      >
        Ver Colecciones
      </a>
    </div>
  </div>
</section>
