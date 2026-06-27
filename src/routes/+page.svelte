<script lang="ts">
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import BrandMarquee from '$lib/components/BrandMarquee.svelte';
  import Collections from '$lib/components/Collections.svelte';
  import LensTechnology from '$lib/components/LensTechnology.svelte';
  import FeaturedProducts from '$lib/components/FeaturedProducts.svelte';
  import Services from '$lib/components/Services.svelte';
  import Stats from '$lib/components/Stats.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import About from '$lib/components/About.svelte';
  import PartnersMarquee from '$lib/components/PartnersMarquee.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import Location from '$lib/components/Location.svelte';
  import FinalCTA from '$lib/components/FinalCTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ContactModal from '$lib/components/ContactModal.svelte';
  import type { HomePageData } from './+page.server.ts';

  let { data }: { data: HomePageData } = $props();

  let modalOpen = $state(false);
  let consultProduct = $state<{ name: string; sku: string } | null>(null);

  function openModal() {
    consultProduct = null;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function openConsult(product: { name: string; sku: string }) {
    consultProduct = product;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOpen = false;
    consultProduct = null;
    document.body.style.overflow = '';
  }
</script>

<Nav onOpenModal={openModal} />
<Hero onOpenModal={openModal} />
<BrandMarquee />
<Collections />
<LensTechnology />
<FeaturedProducts products={data.featured} onConsult={openConsult} />
<Services />
<Stats />
<Gallery />
<About onOpenModal={openModal} />
<PartnersMarquee />
<Testimonials />
<Location />
<FinalCTA onOpenModal={openModal} />
<Footer />
<ContactModal
  open={modalOpen}
  onClose={closeModal}
  productName={consultProduct?.name ?? ''}
  productSku={consultProduct?.sku ?? ''}
/>
