<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import ContactModal from '$lib/components/ContactModal.svelte';
  import ProductCard from '$lib/components/catalog/ProductCard.svelte';
  import { ArrowLeft, MessageCircle } from '@lucide/svelte';
  import { resolve } from '$app/paths';
  import type { ProductDetailData } from './+page.server.ts';

  let { data }: { data: ProductDetailData } = $props();
  let { product, related } = $derived(data);

  let modalOpen = $state(false);
  let consultProduct = $state<{ name: string; sku: string } | null>(null);

  function openConsult(target?: { name: string; sku: string }) {
    consultProduct = target ?? { name: product.name, sku: product.sku };
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function handleConsult(_sku: string, p: { name: string; sku: string }) {
    openConsult({ name: p.name, sku: p.sku });
  }

  function closeConsult() {
    modalOpen = false;
    consultProduct = null;
    document.body.style.overflow = '';
  }
</script>

<svelte:head>
  <title>{product.name} — OPTIK-T Colecciones</title>
  <meta name="description" content={product.description} />
</svelte:head>

<section class="min-h-screen bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
    <a
      href={resolve('/colecciones')}
      class="inline-flex items-center gap-2 text-navy-400 hover:text-accent-yellow transition-colors text-sm font-semibold mb-8"
    >
      <ArrowLeft class="w-4 h-4" /> Volver al catálogo
    </a>

    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div use:fadeIn={{}} class="relative">
        <div class="bg-stone-50 rounded-2xl overflow-hidden">
          <img
            src={product.images.default}
            alt={product.name}
            class="w-full aspect-square object-cover"
            srcset={product.images.srcset.map(s => `${s.url} ${s.w}w`).join(', ')}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div use:fadeIn={{}}>
        <p class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">{product.brand}</p>
        <h1 class="text-4xl md:text-5xl font-bold text-navy-600 mt-3 tracking-tight">{product.name}</h1>
        <p class="text-navy-300 text-sm mt-2">SKU: {product.sku} | {product.type}</p>

        <div class="mt-8 text-3xl font-bold text-navy-600">
          ${product.salePrice.toFixed(2)}
        </div>

        <p class="text-navy-300 mt-6 leading-relaxed">{product.description}</p>

        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onclick={() => openConsult()}
            class="flex-1 bg-accent-yellow text-navy-600 py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-accent-yellow-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle class="w-5 h-5" /> Consultar por WhatsApp
          </button>
          <a
            href={resolve('/colecciones')}
            class="flex-1 bg-navy-600 text-white py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-navy-500 transition-all duration-300 flex items-center justify-center gap-2 text-center"
          >
            Seguir explorando
          </a>
        </div>
      </div>
    </div>

    {#if related.length > 0}
      <div class="mt-24">
        <div use:fadeIn={{}} class="mb-10">
          <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Relacionados</span>
          <h2 class="text-3xl font-bold text-navy-600 mt-3 tracking-tight">
            Productos Similares
          </h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {#each related as rp (rp.sku)}
            <ProductCard product={rp} index={related.indexOf(rp)} onConsult={handleConsult} />
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>

<ContactModal
  open={modalOpen}
  onClose={closeConsult}
  productName={consultProduct?.name ?? ''}
  productSku={consultProduct?.sku ?? ''}
/>
