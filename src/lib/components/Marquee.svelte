<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    gap = 12,
    repeats = 3,
    ariaLabel = 'Contenido destacado',
    class: className = '',
  }: {
    children: Snippet;
    gap?: number;
    repeats?: number;
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
    style="gap: {gap * 0.25}rem"
  >
    {#each Array(repeats) as _}
      {@render children()}
    {/each}
  </div>
</div>
