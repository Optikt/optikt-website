<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import type { ProductSnapshot } from '$lib/schemas/catalog';
  import { MessageCircle } from '@lucide/svelte';
  import { resolve } from '$app/paths';

  let { product, index = 0, onConsult }: {
    product: ProductSnapshot;
    index?: number;
    onConsult?: (sku: string, product: ProductSnapshot) => void;
  } = $props();
</script>

<div use:fadeIn={{ delay: (index + 1) * 0.1 }} class="group">
  <a
    href={resolve('/colecciones/[sku]', { sku: product.sku })}
    class="block bg-white rounded-2xl p-4 overflow-hidden border border-stone-100 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-yellow/5 lens-shine"
  >
    <div class="relative overflow-hidden rounded-xl">
      <img
        src={product.images.default}
        alt={product.name}
        class="w-full aspect-square object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        decoding="async"
        srcset={product.images.srcset.map(s => `${s.url} ${s.w}w`).join(', ')}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
      {#if product.featured}
        <div class="absolute top-4 left-4 bg-accent-yellow text-navy-600 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          Destacado
        </div>
      {/if}
    </div>
    <div class="mt-4 px-1">
      <p class="text-xs text-accent-yellow font-semibold tracking-wider uppercase">{product.brand}</p>
      <h3 class="font-semibold text-navy-600 mt-0.5">{product.name}</h3>
      <p class="text-navy-300 text-sm mt-1">{product.type}</p>
      <p class="text-navy-600 font-bold mt-2">${product.salePrice.toFixed(2)}</p>
    </div>
  </a>
  {#if onConsult}
    <button
      onclick={() => onConsult(product.sku, product)}
      class="mt-3 w-full bg-navy-600 text-white py-2.5 rounded-full text-sm font-semibold hover:bg-accent-yellow hover:text-navy-600 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
    >
      <MessageCircle class="w-4 h-4" /> Consultar
    </button>
  {/if}
</div>
