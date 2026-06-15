<script lang="ts">
  import { Sun, Monitor, Layers, MoveDiagonal } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';
</script>

<section id="tecnologia" class="py-24 md:py-32 bg-navy-600 relative overflow-hidden">
  <div class="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-[120px]"></div>
  <div class="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px]"></div>

  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] animate-spin-slow pointer-events-none">
    <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
      <circle cx="400" cy="400" r="350" stroke="#FFCC00" stroke-width="1" />
      <circle cx="400" cy="400" r="250" stroke="#FFCC00" stroke-width="1" />
      <circle cx="400" cy="400" r="150" stroke="#FFCC00" stroke-width="1" />
      <circle cx="400" cy="400" r="80" stroke="#FFCC00" stroke-width="2" />
      <circle cx="400" cy="400" r="30" fill="#FFCC00" />
    </svg>
  </div>

  <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div use:fadeIn={{}} class="text-center mb-16">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Tecnología de Lentes</span>
      <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">Innovación en Cada Lente</h2>
      <p class="text-white/50 mt-4 max-w-xl mx-auto">Nuestros lentes incorporan la tecnología más avanzada para tu comodidad y protección visual.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="tech-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:border-accent-yellow/40">
        <div class="tech-icon w-14 h-14 rounded-xl bg-white/10 text-accent-yellow flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110 hover:bg-accent-yellow hover:text-navy-600">
          <Sun class="w-6 h-6" />
        </div>
        <h4 class="text-white font-semibold text-lg">Fotocromáticos</h4>
        <p class="text-white/40 text-sm mt-2 leading-relaxed">Se oscurecen con la luz solar y se aclaran en interiores automáticamente.</p>
        <div class="mt-4 rounded-lg overflow-hidden h-32">
          <img src="https://picsum.photos/seed/photochromic-lens-tech/400/250.jpg" alt="Fotocromáticos" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="tech-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:border-accent-yellow/40">
        <div class="tech-icon w-14 h-14 rounded-xl bg-white/10 text-accent-yellow flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110 hover:bg-accent-yellow hover:text-navy-600">
          <Monitor class="w-6 h-6" />
        </div>
        <h4 class="text-white font-semibold text-lg">Blue Block</h4>
        <p class="text-white/40 text-sm mt-2 leading-relaxed">Filtran la luz azul de pantallas, reduciendo la fatiga visual digital.</p>
        <div class="mt-4 rounded-lg overflow-hidden h-32">
          <img src="https://picsum.photos/seed/blueblock-lens-screen/400/250.jpg" alt="Blue Block" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="tech-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:border-accent-yellow/40">
        <div class="tech-icon w-14 h-14 rounded-xl bg-white/10 text-accent-yellow flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110 hover:bg-accent-yellow hover:text-navy-600">
          <Layers class="w-6 h-6" />
        </div>
        <h4 class="text-white font-semibold text-lg">Antirreflejo</h4>
        <p class="text-white/40 text-sm mt-2 leading-relaxed">Capas multicapa que eliminan reflejos molestos y mejoran la nitidez.</p>
        <div class="mt-4 rounded-lg overflow-hidden h-32">
          <img src="https://picsum.photos/seed/antireflective-coating/400/250.jpg" alt="Antirreflejo" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="tech-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-1.5 hover:border-accent-yellow/40">
        <div class="tech-icon w-14 h-14 rounded-xl bg-white/10 text-accent-yellow flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110 hover:bg-accent-yellow hover:text-navy-600">
          <MoveDiagonal class="w-6 h-6" />
        </div>
        <h4 class="text-white font-semibold text-lg">Progresivos</h4>
        <p class="text-white/40 text-sm mt-2 leading-relaxed">Corrección visual suave de cerca, medio y lejos en un solo lente.</p>
        <div class="mt-4 rounded-lg overflow-hidden h-32">
          <img src="https://picsum.photos/seed/progressive-lens-diagram/400/250.jpg" alt="Progresivos" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <div use:fadeIn={{}} class="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
      <div class="grid md:grid-cols-3 gap-8 items-center">
        <div class="text-center">
          <div class="relative inline-block">
            <div class="w-40 h-40 rounded-full border-4 border-white/10 mx-auto flex items-center justify-center relative overflow-hidden">
              <img src="https://picsum.photos/seed/lens-normal-view/300/300.jpg" alt="Sin Tratamiento" class="w-full h-full object-cover opacity-60" />
              <div class="absolute inset-0 bg-navy-600/40"></div>
            </div>
          </div>
          <h5 class="text-white/60 text-sm font-semibold mt-4">Sin Tratamiento</h5>
          <p class="text-white/30 text-xs mt-1">Reflejos y fatiga visual</p>
        </div>
        <div class="text-center">
          <div class="relative inline-block">
            <div class="w-40 h-40 rounded-full border-4 border-accent-yellow mx-auto flex items-center justify-center relative overflow-hidden shadow-lg shadow-accent-yellow/20">
              <img src="https://picsum.photos/seed/lens-clear-view/300/300.jpg" alt="Con Tratamiento" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -top-2 -right-2 bg-accent-yellow text-navy-600 text-[10px] font-bold px-2 py-0.5 rounded-full">✓</div>
          </div>
          <h5 class="text-accent-yellow text-sm font-semibold mt-4">Con Tratamiento OPTIK-T</h5>
          <p class="text-white/50 text-xs mt-1">Nitidez y protección total</p>
        </div>
        <div class="text-center">
          <div class="relative inline-block">
            <div class="w-40 h-40 rounded-full border-4 border-white/10 mx-auto flex items-center justify-center relative overflow-hidden">
              <img src="https://picsum.photos/seed/lens-glare-view/300/300.jpg" alt="Reflejos" class="w-full h-full object-cover opacity-50 blur-[1px]" />
              <div class="absolute inset-0 bg-white/10"></div>
            </div>
          </div>
          <h5 class="text-white/60 text-sm font-semibold mt-4">Lentes Comunes</h5>
          <p class="text-white/30 text-xs mt-1">Reflejos y baja nitidez</p>
        </div>
      </div>
    </div>
  </div>
</section>
