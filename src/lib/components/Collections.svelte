<script lang="ts">
  import { ArrowRight } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';
</script>

<section id="colecciones" class="py-24 md:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="text-center mb-16">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Nuestras Colecciones</span>
      <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">Estilo que se Ve,<br />Calidad que se Siente</h2>
      <p class="text-navy-300 mt-4 max-w-xl mx-auto">Cada montura cuenta una historia. Encuentra la tuya en nuestras colecciones cuidadosamente curadas.</p>
    </div>

    <!-- Collection 1 -->
    <div use:fadeIn={{}} class="mb-20">
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div class="relative rounded-2xl overflow-hidden group">
          <img src="https://picsum.photos/seed/prescription-glasses-display/800/600.jpg" alt="Monturas Graduadas" class="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-r from-navy-600/50 to-transparent"></div>
          <div class="absolute bottom-6 left-6">
            <span class="bg-accent-yellow text-navy-600 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">01 — Monturas Graduadas</span>
          </div>
        </div>
        <div class="lg:pl-8">
          <h3 class="text-3xl font-bold text-navy-600">Monturas que Definen tu Mirada</h3>
          <p class="text-navy-300 mt-4 leading-relaxed">Desde las clásicas wayfarer hasta las más vanguardistas monturas de diseñador. Cada pieza es seleccionada por su calidad, comodidad y estilo.</p>
          <div class="grid grid-cols-3 gap-3 mt-6">
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/frame-cat-eye-opt/300/200.jpg" alt="Cat Eye" class="w-full h-full object-cover" /></div>
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/frame-round-opt/300/200.jpg" alt="Redondas" class="w-full h-full object-cover" /></div>
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/frame-rectangular-opt/300/200.jpg" alt="Rectangulares" class="w-full h-full object-cover" /></div>
          </div>
          <a href="#" class="inline-flex items-center gap-2 text-accent-yellow text-sm font-semibold mt-6 hover:gap-3 transition-all">
            Ver toda la colección <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <!-- Collection 2: Sunglasses -->
    <div use:fadeIn={{}} class="mb-20">
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div class="lg:order-2 relative rounded-2xl overflow-hidden group">
          <img src="https://picsum.photos/seed/sunglasses-beach-style/800/600.jpg" alt="Gafas de Sol" class="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-l from-navy-600/50 to-transparent"></div>
          <div class="absolute bottom-6 right-6">
            <span class="bg-accent-yellow text-navy-600 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">02 — Gafas de Sol</span>
          </div>
        </div>
        <div class="lg:pr-8 lg:order-1">
          <h3 class="text-3xl font-bold text-navy-600">Protección con Personalidad</h3>
          <p class="text-navy-300 mt-4 leading-relaxed">Lentes polarizados, espejados y fotocromáticos. Cada par combina protección UV 400 con el diseño que te define bajo el sol.</p>
          <div class="grid grid-cols-3 gap-3 mt-6">
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/sun-aviator-opt/300/200.jpg" alt="Aviador" class="w-full h-full object-cover" /></div>
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/sun-wayfarer-opt/300/200.jpg" alt="Wayfarer" class="w-full h-full object-cover" /></div>
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/sun-oversized-opt/300/200.jpg" alt="Oversized" class="w-full h-full object-cover" /></div>
          </div>
          <a href="#" class="inline-flex items-center gap-2 text-accent-yellow text-sm font-semibold mt-6 hover:gap-3 transition-all">
            Ver toda la colección <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    <!-- Collection 3: Contact Lenses -->
    <div use:fadeIn={{}}>
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div class="relative rounded-2xl overflow-hidden group">
          <img src="https://picsum.photos/seed/contact-lens-eye-closeup/800/600.jpg" alt="Lentes de Contacto" class="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-r from-navy-600/50 to-transparent"></div>
          <div class="absolute bottom-6 left-6">
            <span class="bg-accent-yellow text-navy-600 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">03 — Lentes de Contacto</span>
          </div>
        </div>
        <div class="lg:pl-8">
          <h3 class="text-3xl font-bold text-navy-600">Libertad Visual Total</h3>
          <p class="text-navy-300 mt-4 leading-relaxed">Lentes de contacto diarios, quincenales y mensuales. También opciones cosméticas y especializadas para astigmatismo y presbicia.</p>
          <div class="grid grid-cols-3 gap-3 mt-6">
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/contact-daily-opt/300/200.jpg" alt="Diarios" class="w-full h-full object-cover" /></div>
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/contact-monthly-opt/300/200.jpg" alt="Mensuales" class="w-full h-full object-cover" /></div>
            <div class="rounded-xl overflow-hidden h-24 lens-shine"><img src="https://picsum.photos/seed/contact-color-opt/300/200.jpg" alt="Cosméticos" class="w-full h-full object-cover" /></div>
          </div>
          <a href="#" class="inline-flex items-center gap-2 text-accent-yellow text-sm font-semibold mt-6 hover:gap-3 transition-all">
            Ver toda la colección <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
