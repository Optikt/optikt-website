<script lang="ts">
  import Marquee from './Marquee.svelte';
</script>

<section class="bg-navy-600">
  <Marquee gap={12} repeats={2} ariaLabel="Especialidades" class="py-5">
    <span class="text-white/20 text-sm font-semibold tracking-[.3em] uppercase"
      >Óptica Profesional</span
    >
    <span class="text-accent-yellow/30">◆</span>
    <span class="text-white/20 text-sm font-semibold tracking-[.3em] uppercase"
      >Diseño Exclusivo</span
    >
    <span class="text-accent-yellow/30">◆</span>
    <span class="text-white/20 text-sm font-semibold tracking-[.3em] uppercase"
      >Tecnología Avanzada</span
    >
    <span class="text-accent-yellow/30">◆</span>
    <span class="text-white/20 text-sm font-semibold tracking-[.3em] uppercase">Monturas Top</span>
    <span class="text-accent-yellow/30">◆</span>
    <span class="text-white/20 text-sm font-semibold tracking-[.3em] uppercase"
      >Lentes de Contacto</span
    >
    <span class="text-accent-yellow/30">◆</span>
    <span class="text-white/20 text-sm font-semibold tracking-[.3em] uppercase">Lentes de Sol</span>
    <span class="text-accent-yellow/30">◆</span>
  </Marquee>
</section>
