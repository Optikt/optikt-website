<script lang="ts">
  import { Star } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';

  const testimonials = [
    { text: '"La atención fue excepcional. Me ayudaron a encontrar la montura perfecta y la receta quedó impecable. ¡Ahora veo y me veo genial!"', name: 'María González', clientSince: '2021', seed: 'testimonial-woman1' },
    { text: '"Los lentes progresivos cambiaron mi vida. La tecnología que usan para la medición es impresionante. Totalmente recomendados."', name: 'Carlos Mendoza', clientSince: '2019', seed: 'testimonial-man1' },
    { text: '"Llevé a mis hijos al examen visual y fueron súper pacientes. El ambiente es moderno y acogedor. Nuestra óptica de confianza."', name: 'Ana Rodríguez', clientSince: '2022', seed: 'testimonial-woman2' }
  ];
</script>

<section class="py-24 bg-stone-50">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="text-center mb-16">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Testimonios</span>
      <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">Lo que Dicen Nuestros Pacientes</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      {#each testimonials as t, i}
        <div use:fadeIn={{ delay: (i + 1) * 0.1 }} class="bg-white rounded-2xl p-8 border border-stone-100 hover:border-accent-yellow/20 transition-all duration-300 hover:shadow-lg">
          <div class="flex gap-1 mb-4">
            {#each Array(5) as _}
              <Star class="w-4 h-4 text-accent-yellow fill-accent-yellow" />
            {/each}
          </div>
          <p class="text-navy-400 text-sm leading-relaxed">{t.text}</p>
          <div class="flex items-center gap-3 mt-6">
            <img src="https://picsum.photos/seed/{t.seed}/80/80.jpg" alt={t.name} class="w-10 h-10 rounded-full object-cover" />
            <div>
              <div class="text-navy-600 text-sm font-semibold">{t.name}</div>
              <div class="text-navy-300 text-xs">Cliente desde {t.clientSince}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
