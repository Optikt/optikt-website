<script lang="ts">
  import Marquee from './Marquee.svelte';
  import { partnerCategories } from '$lib/data/partners';
  import { fadeIn } from '$lib/utils/animations';

  const items = partnerCategories.flatMap((c) => [
    { type: 'category' as const, label: c.label },
    ...c.partners.map((p) => ({ type: 'partner' as const, name: p.name })),
  ]);
</script>

<section class="py-24 md:py-28 bg-navy-600 relative overflow-hidden">
  <div class="absolute inset-0 opacity-10 pointer-events-none">
    <div class="absolute top-0 left-1/3 w-80 h-80 bg-accent-yellow rounded-full blur-[120px]"></div>
    <div
      class="absolute bottom-0 right-1/3 w-72 h-72 bg-accent-blue rounded-full blur-[100px]"
    ></div>
  </div>

  <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div use:fadeIn={{}} class="text-center mb-14">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase"
        >Nuestros Aliados</span
      >
      <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
        Laboratorios y Marcas
      </h2>
      <p class="text-white/60 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
        Detrás de cada montura y cada lente hay aliados estratégicos que comparten nuestro
        compromiso con la calidad y la innovación.
      </p>
    </div>

    <Marquee gap={16} repeats={3} duration={60} ariaLabel="Socios comerciales" class="py-8">
      {#each items as item, _i (_i)}
        {#if item.type === 'category'}
          <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase"
            >{item.label}</span
          >
        {:else}
          <span class="text-white/50 text-base md:text-lg font-semibold tracking-wide"
            >{item.name}</span
          >
        {/if}
        <span class="text-accent-yellow/20 last:hidden">◆</span>
      {/each}
    </Marquee>
  </div>
</section>
