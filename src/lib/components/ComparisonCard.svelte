<script lang="ts">
  import type { ComparisonData } from '$lib/data/lenses';
  import { imagenes } from '$lib/data/images';

  let { data }: { data: ComparisonData } = $props();

  let img = $derived(imagenes[data.imageKey]);
</script>

<div class="text-center">
  <div class="relative inline-block">
    <div
      class="w-40 h-40 rounded-full border-4 mx-auto flex items-center justify-center relative overflow-hidden {data.accented
        ? 'border-accent-yellow shadow-lg shadow-accent-yellow/20'
        : 'border-white/10'}"
    >
      <img
        src={img.pathUrl}
        alt={img.alt}
        class="w-full h-full object-cover {data.blur
          ? 'opacity-50 blur-[1px]'
          : ''} {data.overlay && !data.accented ? 'opacity-60' : ''}"
      />
      {#if data.overlay}
        <div class="absolute inset-0 bg-navy-600/40"></div>
      {/if}
    </div>
    {#if data.accented}
      <div
        class="absolute -top-2 -right-2 bg-accent-yellow text-navy-600 text-[10px] font-bold px-2 py-0.5 rounded-full"
      >
        ✓
      </div>
    {/if}
  </div>
  <h5 class="text-sm font-semibold mt-4 {data.accented ? 'text-accent-yellow' : 'text-white/60'}">
    {data.title}
  </h5>
  <p class="text-xs mt-1 {data.accented ? 'text-white/50' : 'text-white/30'}">{data.description}</p>
</div>
