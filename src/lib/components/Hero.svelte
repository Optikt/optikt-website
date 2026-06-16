<script lang="ts">
  import { fadeIn } from '$lib/utils/animations';

  let { onOpenModal }: { onOpenModal: () => void } = $props();
</script>

<section class="relative h-screen min-h-[700px] flex items-center justify-center bg-navy-600 overflow-hidden">
  <div class="absolute inset-0">
    <img src="https://picsum.photos/seed/eyewear-display-luxury/1920/1080.jpg" alt="OPTIK-T Hero" class="w-full h-full object-cover opacity-25" />
    <div class="absolute inset-0 bg-gradient-to-b from-navy-600/80 via-navy-600/40 to-navy-600"></div>
  </div>

  <div class="absolute top-20 right-20 w-72 h-72 bg-accent-yellow/5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>

  <div class="absolute top-32 right-[8%] opacity-10 animate-float hidden lg:block">
    <svg width="180" height="70" viewBox="0 0 180 70" fill="none">
      <circle cx="45" cy="35" r="28" stroke="#FFCC00" stroke-width="2" />
      <circle cx="135" cy="35" r="28" stroke="#FFCC00" stroke-width="2" />
      <path d="M73 35 Q90 25 107 35" stroke="#FFCC00" stroke-width="2" fill="none" />
      <line x1="0" y1="35" x2="17" y2="35" stroke="#FFCC00" stroke-width="2" />
      <line x1="163" y1="35" x2="180" y2="35" stroke="#FFCC00" stroke-width="2" />
    </svg>
  </div>

  <div class="absolute bottom-40 left-[5%] opacity-10 animate-float-delay hidden lg:block">
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      <ellipse cx="30" cy="30" rx="25" ry="22" stroke="#B8D8E8" stroke-width="1.5" />
      <ellipse cx="90" cy="30" rx="25" ry="22" stroke="#B8D8E8" stroke-width="1.5" />
      <path d="M55 30 Q60 22 65 30" stroke="#B8D8E8" stroke-width="1.5" fill="none" />
    </svg>
  </div>

  <div class="absolute top-1/2 right-[3%] -translate-y-1/2 opacity-5 animate-spin-slow hidden xl:block">
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
      <circle cx="150" cy="150" r="140" stroke="#FFCC00" stroke-width="0.5" stroke-dasharray="8 12" />
      <circle cx="150" cy="150" r="120" stroke="#FFCC00" stroke-width="0.5" stroke-dasharray="4 8" />
      <circle cx="150" cy="150" r="100" stroke="#FFCC00" stroke-width="0.5" />
    </svg>
  </div>

  <div class="absolute right-[5%] bottom-[15%] hidden lg:block animate-float">
    <div class="relative">
      <div class="w-48 h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 lens-shine rotate-3">
        <img src="https://picsum.photos/seed/sunglasses-hero-float/400/250.jpg" alt="Gafas de Sol" class="w-full h-full object-cover" />
      </div>
      <div class="absolute -bottom-2 -right-2 bg-accent-yellow text-navy-600 text-[10px] font-bold px-3 py-1 rounded-full">Nuevo</div>
    </div>
  </div>

  <div class="absolute left-[3%] top-[25%] hidden lg:block animate-float-delay2">
    <div class="w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 lens-shine -rotate-6">
      <img src="https://picsum.photos/seed/frame-detail-hero/300/300.jpg" alt="Montura Detalle" class="w-full h-full object-cover" />
    </div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
    <div use:fadeIn={{}}>
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
        <div class="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
        <span class="text-white/80 text-xs font-semibold tracking-widest uppercase">Óptica Personalizda</span>
      </div>
    </div>
    <h1 use:fadeIn={{ delay: 0.15 }} class="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6">
      Tu Visión,<br /><span class="text-shimmer">Nuestra Pasión</span>
    </h1>
    <p use:fadeIn={{ delay: 0.3 }} class="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
      Descubre la colección de monturas y lentes que combinan estilo, comodidad y la mejor tecnología para tus ojos.
    </p>
    <div use:fadeIn={{ delay: 0.45 }} class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#colecciones" class="bg-accent-yellow text-navy-600 px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-accent-yellow-hover transition-all duration-300 hover:shadow-xl hover:shadow-accent-yellow/20 animate-pulse-glow">Explorar Colecciones</a>
      <button onclick={onOpenModal} class="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300">Escríbenos</button>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
    <span class="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
    <div class="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
      <div class="w-1 h-2.5 bg-accent-yellow rounded-full animate-bounce"></div>
    </div>
  </div>
</section>
