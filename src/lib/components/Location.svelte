<script lang="ts">
  import { MapPin, Clock, Phone, MessageCircle } from '@lucide/svelte';
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
          <div class="flex gap-3">
            <a href="#" aria-label="Instagram" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent-yellow hover:text-navy-600 hover:border-accent-yellow transition-all duration-300">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Facebook" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent-yellow hover:text-navy-600 hover:border-accent-yellow transition-all duration-300">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent-yellow hover:text-navy-600 hover:border-accent-yellow transition-all duration-300">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768"/></svg>
            </a>
            <a href="https://wa.me/584249593318" aria-label="WhatsApp" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"><MessageCircle class="w-4 h-4" /></a>
          </div>
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
                <span class="text-white text-sm font-medium">Abierto ahora — Cerramos a las 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
