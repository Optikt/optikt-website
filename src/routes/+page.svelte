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

  let modalOpen = $state(false);
  let selectedProduct = $state<{ imageKey: string } | null>(null);

  function openModal(product?: { imageKey: string }) {
    selectedProduct = product ?? null;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOpen = false;
    selectedProduct = null;
    document.body.style.overflow = '';
  }
</script>

<Nav onOpenModal={openModal} />
<Hero onOpenModal={openModal} />
<BrandMarquee />
<Collections />
<LensTechnology />
<FeaturedProducts onOpenModal={openModal} />
<Services />
<Stats />
<Gallery />
<About onOpenModal={openModal} />
<PartnersMarquee />
<Testimonials />
<Location />
<FinalCTA onOpenModal={openModal} />
<Footer />
<ContactModal open={modalOpen} onClose={closeModal} product={selectedProduct} />
