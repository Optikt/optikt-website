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
  import Testimonials from '$lib/components/Testimonials.svelte';
  import Location from '$lib/components/Location.svelte';
  import FinalCTA from '$lib/components/FinalCTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import AppointmentModal from '$lib/components/AppointmentModal.svelte';
  import Toast from '$lib/components/Toast.svelte';

  let modalOpen = $state(false);
  let toastShow = $state(false);
  let toastTimer: ReturnType<typeof setTimeout> | undefined = $state(undefined);

  function openModal() { modalOpen = true; document.body.style.overflow = 'hidden'; }
  function closeModal() { modalOpen = false; document.body.style.overflow = ''; }
  function showToast() {
    toastShow = true;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toastShow = false; }, 4000);
  }
</script>

<Nav onOpenModal={openModal} />
<Hero onOpenModal={openModal} />
<BrandMarquee />
<Collections />
<LensTechnology />
<FeaturedProducts />
<Services />
<Stats />
<Gallery />
<About onOpenModal={openModal} />
<Testimonials />
<Location />
<FinalCTA onOpenModal={openModal} />
<Footer />
<AppointmentModal open={modalOpen} onClose={closeModal} onToast={showToast} />
<Toast show={toastShow} />
