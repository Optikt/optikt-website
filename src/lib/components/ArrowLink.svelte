<script lang="ts">
  import { ArrowRight } from '@lucide/svelte';

  let { href = '#', label = 'Ver toda la colección' }: { href?: string; label?: string } = $props();
</script>

<a {href} class="inline-flex items-center gap-2 text-accent-yellow text-sm font-semibold mt-6 hover:gap-3 transition-all">
  {label} <ArrowRight class="w-4 h-4" />
</a>
