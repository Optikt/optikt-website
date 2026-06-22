<script lang="ts">
  import '../app.css';
  import { setContext } from 'svelte';
  import { business } from '$lib/data/business';
  let { children } = $props();

  setContext('business', business);
</script>

<svelte:head>
  <title>OPTIK-T - Visión con Estilo</title>
  <meta
    name="description"
    content="Descubre la colección de monturas y lentes que combinan estilo, comodidad y la mejor tecnología para tus ojos."
  />
</svelte:head>

{@render children()}
