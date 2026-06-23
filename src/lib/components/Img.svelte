<script lang="ts">
  import type { Picture } from '@sveltejs/enhanced-img';

  type ImgSrc = string | Picture;

  let {
    src,
    alt,
    class: className = '',
    loading,
    fetchpriority,
    width,
    height,
  }: {
    src: ImgSrc;
    alt: string;
    class?: string;
    loading?: 'lazy' | 'eager';
    fetchpriority?: 'high' | 'low' | 'auto';
    width?: number | string;
    height?: number | string;
  } = $props();
</script>

{#if typeof src === 'string'}
  <img {src} {alt} class={className} {loading} {fetchpriority} {width} {height} />
{:else}
  <enhanced:img {src} {alt} class={className} {loading} {fetchpriority} />
{/if}
