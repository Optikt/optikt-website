<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    gap = 12,
    repeats = 3,
    duration = 25,
    ariaLabel = 'Contenido destacado',
    class: className = '',
  }: {
    children: Snippet;
    gap?: number;
    repeats?: number;
    duration?: number;
    ariaLabel?: string;
    class?: string;
  } = $props();
</script>

<div
  class="border-y border-white/5 overflow-hidden {className}"
  role="region"
  aria-label={ariaLabel}
>
  <div
    class="flex items-center whitespace-nowrap w-max animate-marquee motion-reduce:animate-none"
    style:gap="{gap * 0.25}rem"
    style:animation-duration="{duration}s"
  >
    {#each Array(repeats) as _, i (i)}
      {@render children()}
    {/each}
  </div>
</div>
