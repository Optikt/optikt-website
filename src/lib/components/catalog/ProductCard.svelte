<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import type { ProductSnapshot } from '$lib/schemas/catalog';
  import { MessageCircle } from '@lucide/svelte';
  import { resolve } from '$app/paths';

  const typeLabels: Record<string, string> = {
    Graduados: 'Monturas Graduadas',
    Sol: 'Gafas de Sol',
    Contacto: 'Lentes de Contacto',
  };

  let { product, index = 0, onConsult }: {
    product: ProductSnapshot;
    index?: number;
    onConsult?: (sku: string, product: ProductSnapshot) => void;
  } = $props();
</script>

<div use:fadeIn={{ delay: (index + 1) * 0.1 }} class="group">
  <a
    href={resolve('/colecciones/[sku]', { sku: product.sku })}
    class="block bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-accent-yellow/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-yellow/5 lens-shine"
  >
    <div class="relative overflow-hidden">
      {#if product.badge}
        <div
          class="absolute top-4 left-4 z-10 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full {product.badge === 'Nuevo'
            ? 'bg-accent-yellow text-navy-600'
            : 'bg-navy-600 text-white'}"
        >
          {product.badge}
        </div>
      {/if}
      <img
        src={product.images.default}
        alt={product.name}
        class="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        decoding="async"
        srcset={product.images.srcset.map(s => `${s.url} ${s.w}w`).join(', ')}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
    </div>
    <div class="p-5">
      <h3 class="font-semibold text-navy-600">{product.name}</h3>
      <p class="text-navy-300 text-sm mt-1">{typeLabels[product.type] ?? product.type}</p>
      <p class="text-accent-yellow font-bold text-xl mt-1">${product.salePrice.toFixed(2)}</p>
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
