<script lang="ts">
  import { Camera } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';
</script>

<section id="galeria" class="py-24 md:py-32 bg-stone-50">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="text-center mb-16">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Lookbook</span>
      <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">Galería de Estilo</h2>
      <p class="text-navy-300 mt-4 max-w-xl mx-auto">Inspírate con nuestros looks. Cada imagen refleja la personalidad y el estilo que OPTIK-T puede darte.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="space-y-4">
        <div class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]">
          <img src="https://picsum.photos/seed/look1-woman-cat-eye/400/500.jpg" alt="Look Cat Eye" class="w-full h-64 object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-semibold tracking-wider uppercase">Cat Eye · Mujer</span>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]">
          <img src="https://picsum.photos/seed/look5-sunglasses-beach/400/350.jpg" alt="Look Sol Playa" class="w-full h-48 object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-semibold tracking-wider uppercase">Sol · Playa</span>
          </div>
        </div>
      </div>

      <div class="space-y-4 pt-8">
        <div class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]">
          <img src="https://picsum.photos/seed/look2-man-aviator/400/350.jpg" alt="Look Aviador" class="w-full h-48 object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-semibold tracking-wider uppercase">Aviador · Hombre</span>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]">
          <img src="https://picsum.photos/seed/look6-round-vintage/400/500.jpg" alt="Look Vintage" class="w-full h-64 object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-semibold tracking-wider uppercase">Redondo · Vintage</span>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]">
          <img src="https://picsum.photos/seed/look3-oversized-glam/400/500.jpg" alt="Look Oversized" class="w-full h-64 object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-semibold tracking-wider uppercase">Oversized · Glam</span>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]">
          <img src="https://picsum.photos/seed/look7-sport-active/400/350.jpg" alt="Look Deportivo" class="w-full h-48 object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-semibold tracking-wider uppercase">Sport · Activo</span>
          </div>
        </div>
      </div>

      <div class="space-y-4 pt-8">
        <div class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]">
          <img src="https://picsum.photos/seed/look4-geometric-modern/400/350.jpg" alt="Look Geométrico" class="w-full h-48 object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-semibold tracking-wider uppercase">Geométrico · Moderno</span>
          </div>
        </div>
        <div class="rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-[1.03]">
          <img src="https://picsum.photos/seed/look8-transparent-frame/400/500.jpg" alt="Look Transparente" class="w-full h-64 object-cover transition-all duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-600/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-semibold tracking-wider uppercase">Clear · Minimal</span>
          </div>
        </div>
      </div>
    </div>

    <div use:fadeIn={{}} class="text-center mt-12">
      <a href="#" class="inline-flex items-center gap-3 bg-navy-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-navy-500 transition-all duration-300">
        <Camera class="w-5 h-5" />
        Síguenos en @optik_t
      </a>
    </div>
  </div>
</section>
