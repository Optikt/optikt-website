<script lang="ts">
  import Instagram from '$lib/components/social-media/Instagram.svelte';
  import { business } from '$lib/data/business';

  let { variant = 'circles' }: { variant?: 'circles' | 'text' } = $props();

  const base = $derived(
    variant === 'circles'
      ? 'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300'
      : 'transition-colors',
  );

  const circleClasses =
    'bg-white/5 border border-white/10 text-white/60 hover:bg-accent-yellow hover:text-navy-600 hover:border-accent-yellow';
  const textClasses = 'text-white/30 hover:text-accent-yellow';

  const linkClass = $derived(`${base} ${variant === 'circles' ? circleClasses : textClasses}`);
</script>

<div class="flex gap-3" class:mt-6={variant === 'text'}>
  <a
    href={business.socialLinks[0].href}
    target="_blank"
    rel="noreferrer external"
    aria-label="Instagram"
    class={linkClass}
  >
    <Instagram class="w-4 h-4" />
  </a>
  <a
    href={business.socialLinks[1].href}
    target="_blank"
    rel="noreferrer external"
    aria-label="Facebook"
    class={linkClass}
  >
    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg
    >
  </a>
  {#if variant === 'circles'}
    <a
      href={business.socialLinks[2].href}
      target="_blank"
      rel="noreferrer external"
      aria-label="WhatsApp"
      class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/5 border border-white/10 text-white/60 hover:bg-green-500 hover:text-white hover:border-green-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4"
        ><path
          d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
        /></svg
      >
    </a>
  {/if}
</div>
