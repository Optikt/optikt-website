<script lang="ts">
  import { Calendar, CircleCheck } from '@lucide/svelte';
  import ImagotipoVertical from '$lib/components/branding/ImagotipoVertical.svelte';
  import { imagenes } from '$lib/data/images';
  import { fadeIn } from '$lib/utils/animations';

  let { onOpenModal }: { onOpenModal: () => void } = $props();

  const features = ['Exámen visual', 'Laboratorios Top Aliados', 'Marcas Únicas', 'Garantía Total'];
</script>

{#snippet aboutImage(imageKey: string, tall: boolean)}
  {@const img = imagenes[imageKey]}
  <div class="rounded-2xl overflow-hidden {tall ? 'h-64' : 'h-48'} lens-shine">
    <img
      src={img.pathUrl}
      alt={img.alt}
      class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
    />
  </div>
{/snippet}

{#snippet featureItem(label: string)}
  <div class="flex items-center gap-3">
    <CircleCheck class="w-5 h-5 text-accent-yellow flex-shrink-0" />
    <span class="text-navy-600 text-sm font-medium">{label}</span>
  </div>
{/snippet}

<section id="nosotros" class="py-24 md:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div use:fadeIn={{ type: 'left' }} class="relative grid grid-cols-2 gap-4">
        <div class="space-y-4">
          {@render aboutImage('about-interior', true)}
          <div
            class="rounded-2xl overflow-hidden h-48 bg-accent-yellow flex flex-col items-center justify-center"
          >
            <ImagotipoVertical
              primaryColor="#0F1B33"
              secondaryColor="#0F1B33"
              class="h-24 w-auto"
            />
          </div>
        </div>
        <div class="space-y-4 pt-8">
          {@render aboutImage('about-taller', false)}
          {@render aboutImage('about-cliente-feliz', true)}
        </div>
      </div>

      <div use:fadeIn={{ type: 'right' }}>
        <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase"
          >Sobre Nosotros</span
        >
        <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight leading-tight">
          Más que una Óptica,<br />una Experiencia
        </h2>
        <p class="text-navy-300 mt-6 leading-relaxed">
          En OPTIK-T creemos que ver bien es solo el comienzo. Nuestro espacio fue diseñado para que
          cada visita sea un momento de descubrimiento.
        </p>
        <p class="text-navy-300 mt-4 leading-relaxed">
          Nuestro equipo y asesores de estilo trabajan juntos para ofrecerte una atención integral.
        </p>
        <div class="mt-8 grid grid-cols-2 gap-4">
          {#each features as f (f)}
            {@render featureItem(f)}
          {/each}
        </div>
        <button
          onclick={onOpenModal}
          class="mt-8 bg-navy-600 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-navy-500 transition-all duration-300 inline-flex items-center gap-2"
        >
          <Calendar class="w-4 h-4" /> Conócenos
        </button>
      </div>
    </div>
  </div>
</section>
