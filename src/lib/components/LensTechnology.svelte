<script lang="ts">
  import { Sun, Monitor, Layers, MoveDiagonal } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';
  import { techLensesData, comparisonData } from '$lib/data/lenses';
  import LensTechCard from './LensTechCard.svelte';
  import ComparisonCard from './ComparisonCard.svelte';

  const techIcons = [Sun, Monitor, Layers, MoveDiagonal];
</script>

<section id="tecnologia" class="py-24 md:py-32 bg-navy-600 relative overflow-hidden">
  <div class="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-[120px]"></div>
  <div class="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px]"></div>

  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] animate-spin-slow pointer-events-none"
  >
    <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
      <circle cx="400" cy="400" r="350" stroke="#FFCC00" stroke-width="1" />
      <circle cx="400" cy="400" r="250" stroke="#FFCC00" stroke-width="1" />
      <circle cx="400" cy="400" r="150" stroke="#FFCC00" stroke-width="1" />
      <circle cx="400" cy="400" r="80" stroke="#FFCC00" stroke-width="2" />
      <circle cx="400" cy="400" r="30" fill="#FFCC00" />
    </svg>
  </div>

  <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div use:fadeIn={{}} class="text-center mb-16">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase"
        >Tecnología de Lentes</span
      >
      <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
        Innovación en Cada Lente
      </h2>
      <p class="text-white/50 mt-4 max-w-xl mx-auto">
        Nuestros lentes incorporan la tecnología más avanzada para tu comodidad y protección visual.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each techLensesData as lens, i}
        <LensTechCard
          icon={techIcons[i]}
          title={lens.title}
          description={lens.description}
          imageKey={lens.imageKey}
          index={i}
        />
      {/each}
    </div>

    <div
      use:fadeIn={{}}
      class="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
    >
      <div class="grid md:grid-cols-3 gap-8 items-center">
        {#each comparisonData as item}
          <ComparisonCard data={item} />
        {/each}
      </div>
    </div>
  </div>
</section>
