<script lang="ts">
  import '../app.css';
  import { setContext } from 'svelte';
  import { business } from '$lib/data/business';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ContactModal from '$lib/components/ContactModal.svelte';
  import { modalOpen, modalProductName, modalProductSku } from '$lib/stores/contact-modal';

  let { children } = $props();

  setContext('business', business);

  let _modalOpen = $state(false);
  let _productName = $state('');
  let _productSku = $state('');

  $effect(() => {
    const unsub1 = modalOpen.subscribe(v => _modalOpen = v);
    const unsub2 = modalProductName.subscribe(v => _productName = v);
    const unsub3 = modalProductSku.subscribe(v => _productSku = v);
    return () => { unsub1(); unsub2(); unsub3(); };
  });

  $effect(() => {
    if (_modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  });

  function closeModal() {
    modalOpen.set(false);
    modalProductName.set('');
    modalProductSku.set('');
  }
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

<Nav />
<div id="main-content">
  {@render children()}
</div>
<Footer />

<ContactModal
  open={_modalOpen}
  onClose={closeModal}
  productName={_productName}
  productSku={_productSku}
/>
