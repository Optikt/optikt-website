<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import ArrowLink from './ArrowLink.svelte';
  import type { Collection } from '$lib/data/collections';
  import { imagenes } from '$lib/data/images';

  let { data, reversed = false }: { data: Collection; reversed?: boolean } = $props();

  let img = $derived(imagenes[data.imageKey]);
</script>

<div use:fadeIn={{}}>
  <div class="grid lg:grid-cols-2 gap-8 items-center">
    <div class="relative rounded-2xl overflow-hidden group {reversed ? 'lg:order-2' : ''}">
      <img
        src={img.pathUrl}
        alt={img.alt}
        class="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div class="absolute inset-0 bg-gradient-to-{reversed ? 'l' : 'r'} from-navy-600/50 to-transparent"></div>
      <div class="absolute bottom-6 {reversed ? 'right-6' : 'left-6'}">
        <span class="bg-accent-yellow text-navy-600 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">{data.badge}</span>
      </div>
    </div>
    <div class="{reversed ? 'lg:pr-8 lg:order-1' : 'lg:pl-8'}">
      <h3 class="text-3xl font-bold text-navy-600">{data.title}</h3>
      <p class="text-navy-300 mt-4 leading-relaxed">{data.description}</p>
      <div class="grid grid-cols-3 gap-3 mt-6">
        {#each data.thumbnails as thumb}
          {@const thumbImg = imagenes[thumb.imageKey]}
          <div class="rounded-xl overflow-hidden h-24 lens-shine">
            <img src={thumbImg.pathUrl} alt={thumb.alt ?? thumbImg.alt} class="w-full h-full object-cover" />
          </div>
        {/each}
      </div>
      <!-- TODO: Add support to redirect to specific collection page -->
      <!-- <ArrowLink /> -->
    </div>
  </div>
</div>
