<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import ProductCard from '$lib/components/catalog/ProductCard.svelte';
  import { MessageCircle, ChevronRight, Truck, Heart, BadgeCheck } from '@lucide/svelte';
  import { resolve } from '$app/paths';
  import { modalOpen, modalProductName, modalProductSku } from '$lib/stores/contact-modal';
  import type { ProductDetailData } from './+page.server.ts';

  const typeLabels: Record<string, string> = {
    Graduados: 'Monturas Graduadas',
    Sol: 'Gafas de Sol',
    Contacto: 'Lentes de Contacto',
  };

  let { data }: { data: ProductDetailData } = $props();
  let { product, related, catalogError } = $derived(data);

  let allImages = $derived(
    product?.gallery ? [product.images, ...product.gallery] : product ? [product.images] : [],
  );
  let selectedImageIndex = $state(0);

  function openConsult() {
    if (!product) return;
    modalProductName.set(product.name);
    modalProductSku.set(product.sku);
    modalOpen.set(true);
  }
</script>

<svelte:head>
  <title>{product?.name ?? 'Producto'} — OPTIK-T Colecciones</title>
  <meta name="description" content={product?.description ?? ''} />
</svelte:head>

{#if catalogError}
  <section class="min-h-screen bg-white flex items-center justify-center">
    <div class="text-center px-6">
      <p class="text-navy-400 text-lg font-medium mb-2">Oops, algo salió mal</p>
      <p class="text-navy-300">{catalogError}</p>
      <a
        href={resolve('/colecciones')}
        class="mt-6 inline-block bg-accent-yellow text-navy-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent-yellow-hover transition-all duration-300"
      >
        Volver al catálogo
      </a>
    </div>
  </section>
{:else if product}
  <section class="bg-navy-600 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-12 relative z-10">
      <nav class="mb-4" aria-label="Breadcrumb">
        <ol class="flex items-center gap-2 text-sm text-white/50 flex-wrap">
          <li>
            <a href={resolve('/')} class="hover:text-accent-yellow transition-colors">Inicio</a>
          </li>
          <li><ChevronRight class="w-3 h-3 shrink-0" /></li>
          <li>
            <a href={resolve('/colecciones')} class="hover:text-accent-yellow transition-colors"
              >Colecciones</a
            >
          </li>
          <li><ChevronRight class="w-3 h-3 shrink-0" /></li>
          <li><span>{typeLabels[product.type] ?? product.type}</span></li>
          <li><ChevronRight class="w-3 h-3 shrink-0" /></li>
          <li class="text-white font-semibold truncate max-w-[200px]">{product.name}</li>
        </ol>
      </nav>
      <h1 class="text-3xl md:text-4xl font-bold text-white tracking-tight">{product.name}</h1>
      <p class="text-white/40 text-sm mt-2">SKU: {product.sku}</p>
    </div>
    <div
      class="absolute bottom-0 right-0 w-80 h-80 bg-accent-yellow/5 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute top-0 left-1/4 w-40 h-40 bg-white/[0.02] rounded-full blur-2xl pointer-events-none"
    ></div>
  </section>

  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <a
        href={resolve('/colecciones')}
        class="inline-flex items-center gap-1.5 text-navy-400 hover:text-accent-yellow transition-colors text-sm font-medium mb-8"
      >
        <ChevronRight class="w-4 h-4 rotate-180" /> Volver al catálogo
      </a>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <div use:fadeIn={{}} class="lg:sticky lg:top-28 space-y-4">
          <div class="bg-white rounded-2xl border border-stone-100 p-8 shadow-lg lens-shine">
            <div class="relative overflow-hidden rounded-xl bg-stone-200">
              <img
                src={allImages[selectedImageIndex].default}
                alt={product.name}
                class="relative z-10 w-full aspect-square object-cover rounded-xl transition-opacity duration-500 opacity-0"
                srcset={allImages[selectedImageIndex].srcset
                  .map((s) => `${s.url} ${s.w}w`)
                  .join(', ')}
                sizes="(max-width: 1024px) 100vw, 50vw"
                onload={(e: Event) => (e.target as HTMLImageElement)?.classList.remove('opacity-0')}
              />
            </div>
          </div>
          {#if allImages.length > 1}
            <div class="grid grid-cols-4 gap-3">
              {#each allImages as img, i (i)}
                <button
                  onclick={() => (selectedImageIndex = i)}
                  class="rounded-xl overflow-hidden border-2 transition-all cursor-pointer {i ===
                  selectedImageIndex
                    ? 'border-accent-yellow'
                    : 'border-stone-100 hover:border-stone-300'}"
                >
                  <div class="relative overflow-hidden rounded-xl bg-stone-200">
                    <img
                      src={img.default}
                      alt="{product.name} vista {i + 1}"
                      class="relative z-10 w-full aspect-square object-cover transition-opacity duration-500 opacity-0"
                      loading="lazy"
                      onload={(e: Event) =>
                        (e.target as HTMLImageElement)?.classList.remove('opacity-0')}
                    />
                  </div>
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <div use:fadeIn={{}} class="space-y-8">
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span
                class="inline-block bg-accent-yellow/10 text-navy-600 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg"
              >
                {typeLabels[product.type] ?? product.type}
              </span>
            </div>
            <p class="text-navy-300 leading-relaxed">{product.description}</p>
          </div>

          <button
            onclick={openConsult}
            class="w-full bg-accent-yellow text-navy-600 py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-accent-yellow-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle class="w-5 h-5" /> Consultar por WhatsApp
          </button>

          <div class="bg-stone-50 rounded-2xl p-6 grid grid-cols-3 gap-6">
            <div class="text-center">
              <div
                class="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mx-auto mb-2"
              >
                <Truck class="w-6 h-6 text-accent-yellow" />
              </div>
              <p class="text-xs text-navy-500 font-medium leading-tight">Envío Seguro</p>
            </div>
            <div class="text-center">
              <div
                class="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mx-auto mb-2"
              >
                <Heart class="w-6 h-6 text-accent-yellow" />
              </div>
              <p class="text-xs text-navy-500 font-medium leading-tight">Atención Personalizada</p>
            </div>
            <div class="text-center">
              <div
                class="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center mx-auto mb-2"
              >
                <BadgeCheck class="w-6 h-6 text-accent-yellow" />
              </div>
              <p class="text-xs text-navy-500 font-medium leading-tight">Calidad Asegurada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {#if related.length > 0}
    <section class="bg-stone-50">
      <div class="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div use:fadeIn={{}} class="mb-10">
          <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase"
            >Relacionados</span
          >
          <h2 class="text-3xl font-bold text-navy-600 mt-3 tracking-tight">
            También te puede gustar
          </h2>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {#each related as rp (rp.sku)}
            <ProductCard product={rp} index={related.indexOf(rp)} />
          {/each}
        </div>
      </div>
    </section>
  {/if}
{/if}
