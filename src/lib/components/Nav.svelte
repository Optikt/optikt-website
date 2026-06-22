<script lang="ts">
  import { Menu, X } from '@lucide/svelte';
  import { ImagotipoHorizontal } from '$lib/components/branding';
  import { resolve } from '$app/paths';

  let { onOpenModal }: { onOpenModal: () => void } = $props();

  let scrolled = $state(false);
  let menuOpen = $state(false);

  $effect(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 80;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });

  function toggleMenu() {
    menuOpen = !menuOpen;
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  function closeMenu() {
    menuOpen = false;
    document.body.style.overflow = '';
  }

  function handleModal() {
    closeMenu();
    onOpenModal();
  }
</script>

<nav
  class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
  class:nav-scrolled={scrolled}
  class:bg-transparent={!scrolled}
>
  <div class="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
    <a href={resolve("/")} class="flex items-center">
      <ImagotipoHorizontal theme="light" class="h-10 w-auto" ariaLabel="OPTIK-T" />
    </a>
    <div class="hidden lg:flex items-center gap-10">
      <a
        href="#colecciones"
        class="text-white/70 hover:text-accent-yellow text-sm font-medium tracking-wide transition-colors duration-300"
        >Colecciones</a
      >
      <a
        href="#tecnologia"
        class="text-white/70 hover:text-accent-yellow text-sm font-medium tracking-wide transition-colors duration-300"
        >Tecnología</a
      >
      <a
        href="#servicios"
        class="text-white/70 hover:text-accent-yellow text-sm font-medium tracking-wide transition-colors duration-300"
        >Servicios</a
      >
      <a
        href="#galeria"
        class="text-white/70 hover:text-accent-yellow text-sm font-medium tracking-wide transition-colors duration-300"
        >Galería</a
      >
      <a
        href="#comunidad"
        class="text-white/70 hover:text-accent-yellow text-sm font-medium tracking-wide transition-colors duration-300"
        >Comunidad</a
      >
      <button
        onclick={handleModal}
        class="bg-accent-yellow text-navy-600 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-yellow-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/25"
        >Agenda tu Cita</button
      >
    </div>
    <button onclick={toggleMenu} class="lg:hidden text-white p-2" aria-label="Menú">
      <Menu class="w-6 h-6" />
    </button>
  </div>
</nav>

<!-- Mobile Menu -->
<div
  class="fixed top-0 right-0 w-80 h-full bg-navy-600 z-60 p-8 flex flex-col transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
  class:translate-x-0={menuOpen}
  class:translate-x-full={!menuOpen}
>
  <button onclick={toggleMenu} class="self-end text-white mb-10" aria-label="Cerrar menú">
    <X class="w-7 h-7" />
  </button>
  <div class="flex flex-col gap-6">
    <a
      href="#colecciones"
      onclick={closeMenu}
      class="text-white text-2xl font-light hover:text-accent-yellow transition-colors"
      >Colecciones</a
    >
    <a
      href="#tecnologia"
      onclick={closeMenu}
      class="text-white text-2xl font-light hover:text-accent-yellow transition-colors"
      >Tecnología</a
    >
    <a
      href="#servicios"
      onclick={closeMenu}
      class="text-white text-2xl font-light hover:text-accent-yellow transition-colors">Servicios</a
    >
    <a
      href="#galeria"
      onclick={closeMenu}
      class="text-white text-2xl font-light hover:text-accent-yellow transition-colors">Galería</a
    >
    <a
      href="#comunidad"
      onclick={closeMenu}
      class="text-white text-2xl font-light hover:text-accent-yellow transition-colors">Comunidad</a
    >
  </div>
  <div class="mt-auto">
    <button
      onclick={handleModal}
      class="w-full bg-accent-yellow text-navy-600 py-3 rounded-full text-sm font-semibold hover:bg-accent-yellow-hover transition-all"
      >Agenda tu Cita</button
    >
  </div>
</div>
