<script lang="ts">
  import { Eye, Glasses, ScanLine, HeartPulse, ShieldCheck } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';
</script>

<section id="servicios" class="py-24 md:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div use:fadeIn={{ type: 'left' }}>
        <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Nuestros Servicios</span>
        <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight leading-tight">Cuidado Profesional para tus Ojos</h2>
        <p class="text-navy-300 mt-6 leading-relaxed">En OPTIK-T combinamos tecnología de vanguardia con atención personalizada para garantizar la salud visual y el bienestar de cada paciente.</p>
        <div class="mt-10 space-y-6">
          <div class="flex gap-5 p-5 rounded-xl bg-stone-50 transition-all duration-500 cursor-pointer border border-transparent hover:border-accent-yellow/20 hover:-translate-y-2 hover:shadow-xl">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-600 text-accent-yellow flex items-center justify-center transition-all duration-300 group-hover:bg-accent-yellow group-hover:text-navy-600">
              <Eye class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-semibold text-navy-600 text-lg">Examen Visual Completo</h4>
              <p class="text-navy-300 text-sm mt-1 leading-relaxed">Evaluación integral con equipos digitales de última generación.</p>
            </div>
          </div>
          <div class="flex gap-5 p-5 rounded-xl bg-stone-50 transition-all duration-500 cursor-pointer border border-transparent hover:border-accent-yellow/20 hover:-translate-y-2 hover:shadow-xl">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-600 text-accent-yellow flex items-center justify-center transition-all duration-300">
              <Glasses class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-semibold text-navy-600 text-lg">Adaptación Personalizada</h4>
              <p class="text-navy-300 text-sm mt-1 leading-relaxed">Seleccionamos la montura perfecta según tu rostro y necesidades.</p>
            </div>
          </div>
          <div class="flex gap-5 p-5 rounded-xl bg-stone-50 transition-all duration-500 cursor-pointer border border-transparent hover:border-accent-yellow/20 hover:-translate-y-2 hover:shadow-xl">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-600 text-accent-yellow flex items-center justify-center transition-all duration-300">
              <ScanLine class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-semibold text-navy-600 text-lg">Lentes con Tecnología Digital</h4>
              <p class="text-navy-300 text-sm mt-1 leading-relaxed">Progresivos, antirreflejo, fotocromáticos y blue-block.</p>
            </div>
          </div>
          <div class="flex gap-5 p-5 rounded-xl bg-stone-50 transition-all duration-500 cursor-pointer border border-transparent hover:border-accent-yellow/20 hover:-translate-y-2 hover:shadow-xl">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-600 text-accent-yellow flex items-center justify-center transition-all duration-300">
              <HeartPulse class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-semibold text-navy-600 text-lg">Seguimiento y Garantía</h4>
              <p class="text-navy-300 text-sm mt-1 leading-relaxed">Acompañamiento post-venta y ajustes gratuitos.</p>
            </div>
          </div>
        </div>
      </div>

      <div use:fadeIn={{ type: 'right' }} class="relative">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <div class="rounded-2xl overflow-hidden h-52 lens-shine">
              <img src="https://picsum.photos/seed/optik-eye-exam-close/400/400.jpg" alt="Examen Visual" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="rounded-2xl overflow-hidden h-40 lens-shine">
              <img src="https://picsum.photos/seed/optik-lens-cutting-lab/400/300.jpg" alt="Laboratorio" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div class="space-y-4 pt-8">
            <div class="rounded-2xl overflow-hidden h-40 lens-shine">
              <img src="https://picsum.photos/seed/optik-frame-fitting/400/300.jpg" alt="Adaptación" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div class="rounded-2xl overflow-hidden h-52 lens-shine">
              <img src="https://picsum.photos/seed/optik-phoropter-device/400/400.jpg" alt="Equipos" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl p-5 border border-stone-100 flex items-center gap-4">
          <div class="w-10 h-10 bg-accent-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
            <ShieldCheck class="w-5 h-5 text-accent-yellow" />
          </div>
          <div>
            <div class="font-bold text-navy-600 text-sm">Optometristas Certificados</div>
            <div class="text-navy-300 text-xs">+15 años de experiencia</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
