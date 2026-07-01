<script lang="ts">
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
  import { modalOpen, modalProductName, modalProductSku } from '$lib/stores/contact-modal';
  import type { HomePageData } from './+page.server.ts';

  let { data }: { data: HomePageData } = $props();

  function openModal() {
    modalProductName.set('');
    modalProductSku.set('');
    modalOpen.set(true);
  }

  function openConsult(product: { name: string; sku: string }) {
    modalProductName.set(product.name);
    modalProductSku.set(product.sku);
    modalOpen.set(true);
  }
</script>

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
