<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';
  import type { Component } from 'svelte';

  let {
    icon: Icon,
    title,
    description,
    imageSrc,
    imageAlt,
    index = 0,
  }: {
    icon: Component;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    index?: number;
  } = $props();
</script>

<div use:fadeIn={{ delay: index * 0.1 }} class="tech-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:border-accent-yellow/40">
  <div class="tech-icon w-14 h-14 rounded-xl bg-white/10 text-accent-yellow flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110 hover:bg-accent-yellow hover:text-navy-600">
    <Icon class="w-6 h-6" />
  </div>
  <h4 class="text-white font-semibold text-lg">{title}</h4>
  <p class="text-white/40 text-sm mt-2 leading-relaxed">{description}</p>
  <div class="mt-4 rounded-lg overflow-hidden h-32">
    <img src={imageSrc} alt={imageAlt} class="w-full h-full object-cover" />
  </div>
</div>
