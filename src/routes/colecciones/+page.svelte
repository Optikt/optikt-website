<script lang="ts">
  import { SvelteSet } from 'svelte/reactivity';
  import { fadeIn } from '$lib/utils/animations';
  import ProductCard from '$lib/components/catalog/ProductCard.svelte';
  import { SlidersHorizontal, ChevronLeft, ChevronRight, X, Filter } from '@lucide/svelte';
  import { resolve } from '$app/paths';
  import type { ColeccionesData } from './+page.server.ts';

  let { data }: { data: ColeccionesData } = $props();
  let { products, catalogError } = $derived(data);

  const typeLabels: Record<string, string> = {
    Graduados: 'Monturas Graduadas',
    Sol: 'Gafas de Sol',
    Contacto: 'Lentes de Contacto',
  };

  let selectedCategories = new SvelteSet<string>();
  let selectedGender = $state<string | null>(null);
  let selectedMaterials = new SvelteSet<string>();
  let sortBy = $state('featured');
  let page = $state(1);
  let sidebarOpen = $state(false);

  const PER_PAGE = 12;

  let allTypes = $derived([...new Set(products.map((p) => p.type))].sort());
  let allGenders = $derived([
    ...new Set(products.map((p) => p.gender).filter(Boolean)),
  ] as string[]);
  let allMaterials = $derived([
    ...new Set(products.map((p) => p.material).filter(Boolean)),
  ] as string[]);

  let filtered = $derived(
    products
      .filter((p) => {
        if (selectedCategories.size > 0 && !selectedCategories.has(p.type)) return false;
        if (selectedGender && p.gender !== selectedGender) return false;
        if (selectedMaterials.size > 0 && (!p.material || !selectedMaterials.has(p.material)))
          return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.salePrice - b.salePrice;
        if (sortBy === 'price-desc') return b.salePrice - a.salePrice;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.sort - b.sort;
      }),
  );

  let totalPages = $derived(Math.max(1, Math.ceil(filtered.length / PER_PAGE)));
  let effectivePage = $derived(Math.min(page, totalPages));
  let paginated = $derived(
    filtered.slice((effectivePage - 1) * PER_PAGE, effectivePage * PER_PAGE),
  );

  function toggleCategory(type: string) {
    if (selectedCategories.has(type)) selectedCategories.delete(type);
    else selectedCategories.add(type);
    page = 1;
  }

  function toggleMaterial(mat: string) {
    if (selectedMaterials.has(mat)) selectedMaterials.delete(mat);
    else selectedMaterials.add(mat);
    page = 1;
  }

  function setGender(g: string | null) {
    selectedGender = selectedGender === g ? null : g;
    page = 1;
  }

  function resetFilters() {
    selectedCategories.clear();
    selectedGender = null;
    selectedMaterials.clear();
    sortBy = 'featured';
    page = 1;
  }

  let hasFilters = $derived(
    selectedCategories.size > 0 || selectedGender !== null || selectedMaterials.size > 0,
  );
</script>

<svelte:head>
  <title>Colecciones - OPTIK-T</title>
  <meta
    name="description"
    content="Explora nuestras colecciones de monturas, lentes de sol y lentes de contacto OPTIK-T."
  />
</svelte:head>

<section class="bg-navy-600 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
    <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Tienda Online</span
    >
    <h1 class="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
      Nuestras Colecciones
    </h1>
    <p class="text-white/60 mt-4 max-w-xl leading-relaxed">
      Explora nuestra selección de monturas y lentes diseñadas para realzar tu estilo y cuidar tu
      visión.
    </p>
  </div>
  <div
    class="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl pointer-events-none"
  ></div>
</section>

<section class="bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12 py-12">
    {#if catalogError}
      <div class="text-center py-20">
        <p class="text-navy-400 text-lg font-medium mb-2">Oops, algo salió mal</p>
        <p class="text-navy-300">{catalogError}</p>
        <a
          href={resolve('/')}
          class="mt-6 inline-block bg-accent-yellow text-navy-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent-yellow-hover transition-all duration-300"
        >
          Volver al inicio
        </a>
      </div>
    {:else}
      <div class="flex lg:hidden items-center justify-between mb-6">
        <p class="text-navy-400 text-sm font-medium">
          {filtered.length} producto{filtered.length !== 1 ? 's' : ''}
        </p>
        <button
          onclick={() => (sidebarOpen = !sidebarOpen)}
          class="flex items-center gap-2 bg-navy-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:bg-navy-500 cursor-pointer"
        >
          {#if sidebarOpen}
            <X class="w-4 h-4" /> Cerrar
          {:else}
            <Filter class="w-4 h-4" /> Filtros
          {/if}
        </button>
      </div>

      <div class="grid lg:grid-cols-4 gap-8">
        <aside class="lg:col-span-1 {sidebarOpen ? 'block' : 'hidden'} lg:block">
          <div
            use:fadeIn={{}}
            class="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 lg:sticky lg:top-28 space-y-6"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-sm font-bold text-navy-600 uppercase tracking-wider">Filtros</h2>
              {#if hasFilters}
                <button
                  onclick={resetFilters}
                  class="text-xs text-accent-yellow font-semibold hover:underline cursor-pointer"
                >
                  Limpiar
                </button>
              {/if}
            </div>

            <div>
              <h3 class="text-xs font-bold text-navy-400 uppercase tracking-wider mb-3">
                Categoría
              </h3>
              <div class="space-y-2">
                {#each allTypes as type (type)}
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.has(type)}
                      onchange={() => toggleCategory(type)}
                      class="appearance-none w-4 h-4 rounded border-2 border-stone-200 checked:bg-accent-yellow checked:border-accent-yellow transition-all duration-200 cursor-pointer"
                    />
                    <span class="text-sm text-navy-400 group-hover:text-navy-600 transition-colors"
                      >{typeLabels[type] ?? type}</span
                    >
                  </label>
                {/each}
              </div>
            </div>

            <div class="border-t border-stone-100 pt-6">
              <h3 class="text-xs font-bold text-navy-400 uppercase tracking-wider mb-3">Género</h3>
              <div class="flex flex-wrap gap-2">
                <button
                  onclick={() => setGender(null)}
                  class="px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer {selectedGender ===
                  null
                    ? 'bg-navy-600 text-white'
                    : 'bg-stone-100 text-navy-400 hover:bg-stone-200'}"
                >
                  Todos
                </button>
                {#each allGenders as g (g)}
                  <button
                    onclick={() => setGender(g)}
                    class="px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer {selectedGender ===
                    g
                      ? 'bg-navy-600 text-white'
                      : 'bg-stone-100 text-navy-400 hover:bg-stone-200'}"
                  >
                    {g}
                  </button>
                {/each}
              </div>
            </div>

            <div class="border-t border-stone-100 pt-6">
              <h3 class="text-xs font-bold text-navy-400 uppercase tracking-wider mb-3">
                Material
              </h3>
              <div class="space-y-2">
                {#each allMaterials as mat (mat)}
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.has(mat)}
                      onchange={() => toggleMaterial(mat)}
                      class="appearance-none w-4 h-4 rounded border-2 border-stone-200 checked:bg-accent-yellow checked:border-accent-yellow transition-all duration-200 cursor-pointer"
                    />
                    <span class="text-sm text-navy-400 group-hover:text-navy-600 transition-colors"
                      >{mat}</span
                    >
                  </label>
                {/each}
              </div>
            </div>
          </div>
        </aside>

        <div class="lg:col-span-3 space-y-8">
          <div use:fadeIn={{}} class="flex items-center justify-between">
            <p class="text-navy-400 text-sm font-medium hidden lg:block">
              Mostrando {paginated.length} de {filtered.length} producto{filtered.length !== 1
                ? 's'
                : ''}
            </p>
            <div class="flex items-center gap-3">
              <SlidersHorizontal class="w-4 h-4 text-navy-300" />
              <select
                bind:value={sortBy}
                class="text-sm text-navy-600 bg-transparent border-none focus:outline-none cursor-pointer font-medium"
              >
                <option value="featured">Destacados</option>
              </select>
            </div>
          </div>

          {#if paginated.length === 0}
            <div class="text-center py-20">
              <p class="text-navy-300 text-lg">No encontramos productos con esos filtros.</p>
              <button
                onclick={resetFilters}
                class="mt-4 text-accent-yellow hover:underline cursor-pointer font-semibold"
              >
                Ver todos los productos
              </button>
            </div>
          {:else}
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {#each paginated as product (product.sku)}
                <ProductCard {product} index={paginated.indexOf(product)} />
              {/each}
            </div>

            {#if totalPages > 1}
              <div class="flex items-center justify-center gap-2 pt-4">
                <button
                  onclick={() => {
                    if (page > 1) page--;
                  }}
                  disabled={page <= 1}
                  class="w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed bg-white border border-stone-200 text-navy-600 hover:border-accent-yellow hover:text-accent-yellow"
                  aria-label="Página anterior"
                >
                  <ChevronLeft class="w-5 h-5" />
                </button>

                {#each Array.from({ length: totalPages }, (_, i) => i + 1) as pg (pg)}
                  {#if pg === 1 || pg === totalPages || Math.abs(pg - page) <= 2}
                    <button
                      onclick={() => {
                        page = pg;
                      }}
                      class="w-10 h-10 rounded-full text-sm font-semibold transition-all cursor-pointer {pg ===
                      page
                        ? 'bg-navy-600 text-white'
                        : 'bg-white border border-stone-200 text-navy-600 hover:border-accent-yellow hover:text-accent-yellow'}"
                    >
                      {pg}
                    </button>
                  {:else if pg === page - 3 || pg === page + 3}
                    <span class="text-navy-300 px-1">...</span>
                  {/if}
                {/each}

                <button
                  onclick={() => {
                    if (page < totalPages) page++;
                  }}
                  disabled={page >= totalPages}
                  class="w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed bg-white border border-stone-200 text-navy-600 hover:border-accent-yellow hover:text-accent-yellow"
                  aria-label="Página siguiente"
                >
                  <ChevronRight class="w-5 h-5" />
                </button>
              </div>
            {/if}
          {/if}
        </div>
      </div>
    {/if}
  </div>
</section>
