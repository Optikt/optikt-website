<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import { getAllTypes, getAllBrands } from '$lib/utils/catalog';
  import ProductCard from '$lib/components/catalog/ProductCard.svelte';
  import ContactModal from '$lib/components/ContactModal.svelte';
  import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from '@lucide/svelte';
  import type { ColeccionesData } from './+page.server.ts';
  import type { ProductSnapshot } from '$lib/schemas/catalog';

  let { data }: { data: ColeccionesData } = $props();

  let products = $derived(data.products);
  let selectedType = $state('Todas');
  let selectedBrand = $state('Todas');
  let searchQuery = $state('');
  let page = $state(1);

  const PER_PAGE = 12;
  let types = $derived(['Todas', ...getAllTypes(products)]);
  let brands = $derived(['Todas', ...getAllBrands(products)]);

  let filtered = $derived(
    products.filter(p => {
      if (selectedType !== 'Todas' && p.type !== selectedType) return false;
      if (selectedBrand !== 'Todas' && p.brand !== selectedBrand) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)
        );
      }
      return true;
    }),
  );

  let totalPages = $derived(Math.max(1, Math.ceil(filtered.length / PER_PAGE)));
  let effectivePage = $derived(Math.min(page, totalPages));
  let paginated = $derived(filtered.slice((effectivePage - 1) * PER_PAGE, effectivePage * PER_PAGE));

  let modalOpen = $state(false);
  let consultProduct = $state<{ name: string; sku: string } | null>(null);

  function openConsult(_sku: string, product: ProductSnapshot) {
    consultProduct = { name: product.name, sku: product.sku };
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeConsult() {
    modalOpen = false;
    consultProduct = null;
    document.body.style.overflow = '';
  }

  function resetFilters() {
    selectedType = 'Todas';
    selectedBrand = 'Todas';
    searchQuery = '';
    page = 1;
  }
</script>

<svelte:head>
  <title>Colecciones — OPTIK-T</title>
  <meta name="description" content="Explora nuestras colecciones de monturas, lentes de sol y lentes de contacto OPTIK-T." />
</svelte:head>

<section class="min-h-screen bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
    <div use:fadeIn={{}} class="text-center mb-12">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Colecciones</span>
      <h1 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">
        Nuestro Catálogo
      </h1>
      <p class="text-navy-300 mt-4 max-w-xl mx-auto">
        {filtered.length} producto{filtered.length !== 1 ? 's' : ''}
        {#if selectedType !== 'Todas' || selectedBrand !== 'Todas' || searchQuery}
          encontrado{filtered.length !== 1 ? 's' : ''}
        {/if}
      </p>
    </div>

    <div class="mb-8 space-y-4">
      <div class="flex flex-wrap gap-2 justify-center">
        {#each types as type (type)}
          <button
            onclick={() => { selectedType = type; page = 1; }}
            class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer {selectedType === type
              ? 'bg-accent-yellow text-navy-600'
              : 'bg-stone-100 text-navy-400 hover:bg-stone-200'}"
          >
            {type}
          </button>
        {/each}
      </div>

      <div class="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div class="relative w-full sm:w-72">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300" />
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Buscar por nombre, marca o SKU..."
            class="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all placeholder:text-navy-200"
            oninput={() => { page = 1; }}
          />
        </div>
        <div class="relative w-full sm:w-48">
          <SlidersHorizontal class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300" />
          <select
            bind:value={selectedBrand}
            onchange={() => { page = 1; }}
            class="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            {#each brands as brand (brand)}
              <option value={brand}>{brand}</option>
            {/each}
          </select>
        </div>
      </div>

      {#if selectedType !== 'Todas' || selectedBrand !== 'Todas' || searchQuery}
        <div class="text-center">
          <button
            onclick={resetFilters}
            class="text-sm text-navy-400 hover:text-accent-yellow transition-colors underline cursor-pointer"
          >
            Limpiar filtros
          </button>
        </div>
      {/if}
    </div>

    {#if paginated.length === 0}
      <div class="text-center py-20">
        <p class="text-navy-300 text-lg">No encontramos productos con esos filtros.</p>
        <button onclick={resetFilters} class="mt-4 text-accent-yellow hover:underline cursor-pointer font-semibold">
          Ver todos los productos
        </button>
      </div>
    {:else}
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each paginated as product (product.sku)}
          <ProductCard {product} index={paginated.indexOf(product)} onConsult={openConsult} />
        {/each}
      </div>

      {#if totalPages > 1}
        <div class="flex items-center justify-center gap-2 mt-12">
          <button
            onclick={() => { if (page > 1) page--; }}
            disabled={page <= 1}
            class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed {page <= 1
              ? 'bg-stone-100 text-navy-300'
              : 'bg-stone-100 text-navy-600 hover:bg-accent-yellow hover:text-navy-600'}"
            aria-label="Página anterior"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>

          {#each Array.from({ length: totalPages }, (_, i) => i + 1) as pg (pg)}
            {#if pg === 1 || pg === totalPages || Math.abs(pg - page) <= 2}
              <button
                onclick={() => { page = pg; }}
                class="w-10 h-10 rounded-lg text-sm font-semibold transition-colors cursor-pointer {pg === page
                  ? 'bg-accent-yellow text-navy-600'
                  : 'bg-stone-100 text-navy-600 hover:bg-stone-200'}"
              >
                {pg}
              </button>
            {:else if pg === page - 3 || pg === page + 3}
              <span class="text-navy-300 px-1">...</span>
            {/if}
          {/each}

          <button
            onclick={() => { if (page < totalPages) page++; }}
            disabled={page >= totalPages}
            class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed {page >= totalPages
              ? 'bg-stone-100 text-navy-300'
              : 'bg-stone-100 text-navy-600 hover:bg-accent-yellow hover:text-navy-600'}"
            aria-label="Página siguiente"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      {/if}
    {/if}
  </div>
</section>

<ContactModal
  open={modalOpen}
  onClose={closeConsult}
  productName={consultProduct?.name ?? ''}
  productSku={consultProduct?.sku ?? ''}
/>
