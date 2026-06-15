<script lang="ts">
  import { MapPin, Clock, Phone } from '@lucide/svelte';
  import SocialIcons from './SocialIcons.svelte';
  import { fadeIn } from '$lib/utils/animations';
</script>

<section id="comunidad" class="py-24 md:py-32 bg-navy-600 relative overflow-hidden">
  <div class="absolute inset-0 opacity-5">
    <img src="https://picsum.photos/seed/optik-city-bg/1920/800.jpg" alt="" class="w-full h-full object-cover" />
  </div>
  <div class="absolute top-0 right-0 w-80 h-80 bg-accent-yellow/5 rounded-full blur-[100px]"></div>
  <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div class="grid lg:grid-cols-2 gap-16">
      <div use:fadeIn={{ type: 'left' }}>
        <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Visítanos</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight leading-tight">Nuestro Espacio,<br />Tu Comunidad</h2>
        <p class="text-white/50 mt-6 leading-relaxed">Un lugar diseñado para que te sientas cómodo, inspirado y bien atendido.</p>
        <div class="mt-10 space-y-6">
          <div class="flex gap-4 items-start">
            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"><MapPin class="w-5 h-5 text-accent-yellow" /></div>
            <div><h4 class="text-white font-semibold">Dirección</h4><p class="text-white/50 text-sm mt-1">Centro Comercial Plaza Mayor, Nivel 2, Local 45</p></div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"><Clock class="w-5 h-5 text-accent-yellow" /></div>
            <div><h4 class="text-white font-semibold">Horario</h4><p class="text-white/50 text-sm mt-1">Lunes a Sábado: 9:00 AM – 7:00 PM</p><p class="text-white/50 text-sm">Domingos: 10:00 AM – 4:00 PM</p></div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"><Phone class="w-5 h-5 text-accent-yellow" /></div>
            <div><h4 class="text-white font-semibold">Contacto</h4><p class="text-white/50 text-sm mt-1">+58 424 959 3318</p><p class="text-white/50 text-sm">info@optik-t.com</p></div>
          </div>
        </div>
        <div class="mt-10">
          <p class="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Síguenos</p>
          <SocialIcons variant="circles" />
        </div>
      </div>

      <div use:fadeIn={{ type: 'right' }}>
        <div class="grid grid-cols-2 gap-4">
          <div class="rounded-2xl overflow-hidden h-48 lens-shine">
            <img src="https://picsum.photos/seed/optik-store-front-sign/400/300.jpg" alt="Fachada" class="w-full h-full object-cover" />
          </div>
          <div class="rounded-2xl overflow-hidden h-48 lens-shine">
            <img src="https://picsum.photos/seed/optik-display-shelves/400/300.jpg" alt="Vitrina" class="w-full h-full object-cover" />
          </div>
          <div class="col-span-2 rounded-2xl overflow-hidden h-56 relative">
            <img src="https://picsum.photos/seed/optik-store-panorama/800/400.jpg" alt="Panorámica" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy-600/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center gap-3">
                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-white text-sm font-medium">Abierto ahora - Cerramos a las 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
