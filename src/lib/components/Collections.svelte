<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import { collections } from '$lib/data/collections';
  import CollectionCard from './CollectionCard.svelte';
</script>

<section class="py-24 md:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="text-center mb-16">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase"
        >Nuestras Colecciones</span
      >
      <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">
        Estilo que se Ve,<br />Calidad que se Siente
      </h2>
      <p class="text-navy-300 mt-4 max-w-xl mx-auto">
        Cada montura cuenta una historia. Encuentra la tuya en nuestras colecciones cuidadosamente
        seleccionadas.
      </p>
    </div>

    <div class="flex flex-col gap-20">
      {#each collections as collection, i (collection.title)}
        <CollectionCard data={collection} reversed={i % 2 !== 0} />
      {/each}
    </div>
  </div>
</section>
