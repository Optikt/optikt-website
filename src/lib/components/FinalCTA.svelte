<script lang="ts">
  import { Sparkles, Calendar } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';
  import { business } from '$lib/data/business';

  let { onOpenModal }: { onOpenModal: () => void } = $props();
</script>

<section class="py-24 md:py-32 bg-white relative overflow-hidden">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-yellow/5 rounded-full blur-[120px]"></div>
  <div class="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
    <div use:fadeIn={{}}>
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-8">
        <Sparkles class="w-7 h-7 text-accent-yellow" />
      </div>
      <h2 class="text-4xl md:text-6xl font-bold text-navy-600 tracking-tight leading-tight">Tu Próximo Par de Lentes<br />Te Está Esperando</h2>
      <p class="text-navy-300 mt-6 max-w-xl mx-auto leading-relaxed">Agenda tu examen visual o visita nuestra tienda. Nuestro equipo está listo para ayudarte a ver mejor y verte increíble.</p>
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button onclick={onOpenModal} class="bg-accent-yellow text-navy-600 px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-accent-yellow-hover transition-all duration-300 hover:shadow-xl hover:shadow-accent-yellow/20 animate-pulse-glow inline-flex items-center gap-2">
          <Calendar class="w-5 h-5" /> Agendar Cita Ahora
        </button>
        <a href={business.socialLinks[2].href} target="_blank" rel="noreferrer" class="border-2 border-navy-600/10 text-navy-600 px-10 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-navy-600 hover:text-white transition-all duration-300 inline-flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d={business.socialLinks[2].path} /></svg> WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
