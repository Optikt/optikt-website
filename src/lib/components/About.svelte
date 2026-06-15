<script lang="ts">
  import { Calendar, CheckCircle } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';

  let { onOpenModal }: { onOpenModal: () => void } = $props();
</script>

<section id="nosotros" class="py-24 md:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div use:fadeIn={{ type: 'left' }} class="relative grid grid-cols-2 gap-4">
        <div class="space-y-4">
          <div class="rounded-2xl overflow-hidden h-64 lens-shine">
            <img src="https://picsum.photos/seed/optik-boutique-interior/400/500.jpg" alt="Interior" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div class="rounded-2xl overflow-hidden h-48 bg-accent-yellow flex items-center justify-center">
            <div class="text-center px-6">
              <svg width="60" height="25" viewBox="0 0 60 25" fill="none" class="mx-auto mb-2">
                <circle cx="15" cy="13" r="10" stroke="#0F1B33" stroke-width="2" fill="none" />
                <circle cx="45" cy="13" r="10" stroke="#0F1B33" stroke-width="2" fill="none" />
                <path d="M25 13 Q30 8 35 13" stroke="#0F1B33" stroke-width="2" fill="none" />
              </svg>
              <div class="text-2xl font-bold text-navy-600">OPTIK-T</div>
              <div class="text-navy-600/60 text-xs mt-1 tracking-widest uppercase">Since 2009</div>
            </div>
          </div>
        </div>
        <div class="space-y-4 pt-8">
          <div class="rounded-2xl overflow-hidden h-48 lens-shine">
            <img src="https://picsum.photos/seed/optik-lens-workshop/400/350.jpg" alt="Taller" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div class="rounded-2xl overflow-hidden h-64 lens-shine">
            <img src="https://picsum.photos/seed/optik-happy-client-wearing/400/500.jpg" alt="Cliente Feliz" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </div>

      <div use:fadeIn={{ type: 'right' }}>
        <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Sobre Nosotros</span>
        <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight leading-tight">Más que una Óptica,<br />una Experiencia</h2>
        <p class="text-navy-300 mt-6 leading-relaxed">En OPTIK-T creemos que ver bien es solo el comienzo. Nuestro espacio fue diseñado para que cada visita sea un momento de descubrimiento.</p>
        <p class="text-navy-300 mt-4 leading-relaxed">Nuestro equipo de optometristas y asesores de estilo trabajan juntos para ofrecerte una atención integral.</p>
        <div class="mt-8 grid grid-cols-2 gap-4">
          <div class="flex items-center gap-3"><CheckCircle class="w-5 h-5 text-accent-yellow flex-shrink-0" /><span class="text-navy-600 text-sm font-medium">Equipos Digitales</span></div>
          <div class="flex items-center gap-3"><CheckCircle class="w-5 h-5 text-accent-yellow flex-shrink-0" /><span class="text-navy-600 text-sm font-medium">Laboratorio Propio</span></div>
          <div class="flex items-center gap-3"><CheckCircle class="w-5 h-5 text-accent-yellow flex-shrink-0" /><span class="text-navy-600 text-sm font-medium">Marcas Exclusivas</span></div>
          <div class="flex items-center gap-3"><CheckCircle class="w-5 h-5 text-accent-yellow flex-shrink-0" /><span class="text-navy-600 text-sm font-medium">Garantía Total</span></div>
        </div>
        <button onclick={onOpenModal} class="mt-8 bg-navy-600 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-navy-500 transition-all duration-300 inline-flex items-center gap-2">
          <Calendar class="w-4 h-4" /> Conócenos en Persona
        </button>
      </div>
    </div>
  </div>
</section>
