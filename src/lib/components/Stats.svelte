<script lang="ts">
  import { fadeIn, animateCounter } from '$lib/utils/animations';

  let stats = [
    { target: '1 a 1', label: 'Asesoría Personalizada' },
    { target: 400, label: 'Modelos Disponibles' },
    { target: 100, label: '% Precisión Digital' },
    { target: 98, label: '% Satisfacción' },
  ];
</script>

<section class="py-20 bg-navy-600 relative overflow-hidden">
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-accent-yellow rounded-full blur-[120px]"></div>
    <div
      class="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-blue rounded-full blur-[100px]"
    ></div>
  </div>
  <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {#each stats as stat, i (stat.label)}
        <div use:fadeIn={{ delay: (i + 1) * 0.1 }}>
          <div
            class="text-4xl md:text-5xl font-bold text-accent-yellow counter"
            data-target={stat.target}
            data-suffix={stat.label.startsWith('%') ? '%' : '+'}
            use:animateCounter
          >
            0
          </div>
          <div class="text-white/50 text-sm mt-2 font-medium tracking-wide">{stat.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
