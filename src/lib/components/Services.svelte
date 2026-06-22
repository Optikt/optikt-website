<script lang="ts">
  import { Eye, Glasses, ScanLine, HeartPulse, ShieldCheck } from '@lucide/svelte';
  import type { Component } from 'svelte';
  import { fadeIn } from '$lib/utils/animations';
  import { imagenes } from '$lib/data/images';

  interface ServiceItem {
    icon: Component;
    title: string;
    description: string;
  }

  const services: ServiceItem[] = [
    {
      icon: Eye,
      title: 'Examen Visual Completo',
      description: 'Evaluación integral para tu salud visual y precisión.',
    },
    {
      icon: Glasses,
      title: 'Adaptación Personalizada',
      description: 'Seleccionamos la montura perfecta según tu rostro y necesidades.',
    },
    {
      icon: ScanLine,
      title: 'Lentes con Tecnología Digital',
      description: 'Progresivos, antirreflejo, fotocromáticos y blue-block.',
    },
    {
      icon: HeartPulse,
      title: 'Seguimiento y Garantía',
      description: 'Acompañamiento post-venta.',
    },
  ];
</script>

{#snippet serviceCard(s: ServiceItem)}
  <div
    class="flex gap-5 p-5 rounded-xl bg-stone-50 transition-all duration-500 cursor-pointer border border-transparent hover:border-accent-yellow/20 hover:-translate-y-2 hover:shadow-xl"
  >
    <div
      class="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-600 text-accent-yellow flex items-center justify-center transition-all duration-300"
    >
      <svelte:component this={s.icon} class="w-5 h-5" />
    </div>
    <div>
      <h4 class="font-semibold text-navy-600 text-lg">{s.title}</h4>
      <p class="text-navy-300 text-sm mt-1 leading-relaxed">{s.description}</p>
    </div>
  </div>
{/snippet}

{#snippet galleryImage(imageKey: string, tall: boolean)}
  {@const img = imagenes[imageKey]}
  <div class="rounded-2xl overflow-hidden {tall ? 'h-52' : 'h-40'} lens-shine">
    <img
      src={img.pathUrl}
      alt={img.alt}
      class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
    />
  </div>
{/snippet}

<section id="servicios" class="py-24 md:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div use:fadeIn={{ type: 'left' }}>
        <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase"
          >Nuestros Servicios</span
        >
        <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight leading-tight">
          Cuidado Profesional para tus Ojos
        </h2>
        <p class="text-navy-300 mt-6 leading-relaxed">
          En OPTIK-T combinamos tecnología de vanguardia con atención personalizada para garantizar
          la salud visual y el bienestar de cada paciente.
        </p>
        <div class="mt-10 space-y-6">
          {#each services as s (s.title)}
            {@render serviceCard(s)}
          {/each}
        </div>
      </div>

      <div use:fadeIn={{ type: 'right' }} class="relative">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-4">
            {@render galleryImage('svc-examen-visual', true)}
            {@render galleryImage('svc-laboratorio', false)}
          </div>
          <div class="space-y-4 pt-8">
            {@render galleryImage('svc-adaptacion', false)}
            {@render galleryImage('svc-equipos', true)}
          </div>
        </div>
        <div
          class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl p-5 border border-stone-100 flex items-center gap-4"
        >
          <div
            class="w-10 h-10 bg-accent-yellow/10 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <ShieldCheck class="w-5 h-5 text-accent-yellow" />
          </div>
          <div>
            <div class="font-bold text-navy-600 text-sm">Calidad Certificada</div>
            <div class="text-navy-300 text-xs">Claridad y nitidez al 100%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
