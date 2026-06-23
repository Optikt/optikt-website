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
  <meta property="og:title" content="OPTIK-T - Visión con Estilo" />
  <meta
    property="og:description"
    content="Descubre la colección de monturas y lentes que combinan estilo, comodidad y la mejor tecnología para tus ojos."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://optikt.pages.dev" />
  <meta property="og:image" content="https://optikt.pages.dev/images/hero/5.webp" />
  <meta property="og:locale" content="es_VE" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "OPTIK-T",
      "image": "https://optikt.pages.dev/images/hero/5.webp",
      "url": "https://optikt.pages.dev",
      "telephone": "+58 412 114 5790",
      "email": "optikt.vision@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Maturín, Sector Las Avenidas, Cruce Av Luis del Valle García con Av. Fuerzas Armadas, Calle Villa Pool, Local 01",
        "addressCountry": "VE"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "priceRange": "$$"
    }
  </script>
</svelte:head>

<a href="#main-content" class="skip-link">Saltar al contenido principal</a>

<div id="main-content">
  {@render children()}
</div>
