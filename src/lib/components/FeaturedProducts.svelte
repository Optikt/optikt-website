<script lang="ts">
  import { ArrowRight } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';

  const products = [
    { name: 'Cat-Eye Sofia', type: 'Montura Acetato', price: 189, seed: 'optik-cat-eye-tortoise', badge: 'Nuevo', badgeClass: 'bg-accent-yellow text-navy-600' },
    { name: 'Aviator Clásico', type: 'Lentes de Sol', price: 245, seed: 'optik-aviator-gold', badge: null, badgeClass: '' },
    { name: 'Redondo Titanio', type: 'Montura Metal', price: 210, seed: 'optik-round-titanium', badge: 'Popular', badgeClass: 'bg-navy-600 text-white' },
    { name: 'Oversized Elegance', type: 'Lentes de Sol', price: 275, seed: 'optik-oversized-black', badge: null, badgeClass: '' },
    { name: 'Browline Retro', type: 'Montura Mixta', price: 195, seed: 'optik-browline-retro', badge: null, badgeClass: '' },
    { name: 'Sport Wrap', type: 'Sol Deportivo', price: 230, seed: 'optik-sport-wrap', badge: 'Deporte', badgeClass: 'bg-green-500 text-white' },
    { name: 'Geometric Hex', type: 'Montura Acetato', price: 265, seed: 'optik-geometric-hex', badge: 'Exclusivo', badgeClass: 'bg-accent-yellow text-navy-600' },
    { name: 'Rimless Minimal', type: 'Montura Titanio', price: 310, seed: 'optik-rimless-minimal', badge: null, badgeClass: '' }
  ];
</script>

<section class="py-24 bg-stone-50">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
      <div>
        <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Destacados</span>
        <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">Lo Más Nuevo</h2>
      </div>
      <a href="#" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-navy-500 text-sm font-semibold hover:text-accent-yellow transition-colors group">
        Ver todos los productos <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {#each products.slice(0, 4) as product, i}
        <div use:fadeIn={{ delay: (i + 1) * 0.1 }} class="group cursor-pointer">
          <div class="relative bg-white rounded-2xl p-4 overflow-hidden border border-stone-100 group-hover:border-accent-yellow/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-yellow/5 lens-shine">
            <img src="https://picsum.photos/seed/{product.seed}/400/400.jpg" alt={product.name} class="w-full aspect-square object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
            {#if product.badge}
              <div class="absolute top-6 left-6 {product.badgeClass} text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">{product.badge}</div>
            {/if}
          </div>
          <div class="mt-4 px-1">
            <h4 class="font-semibold text-navy-600">{product.name}</h4>
            <p class="text-navy-300 text-sm mt-1">{product.type}</p>
            <p class="text-accent-yellow font-bold mt-2">${product.price}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {#each products.slice(4) as product, i}
        <div use:fadeIn={{ delay: (i + 1) * 0.1 }} class="group cursor-pointer">
          <div class="relative bg-white rounded-2xl p-4 overflow-hidden border border-stone-100 group-hover:border-accent-yellow/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-yellow/5 lens-shine">
            <img src="https://picsum.photos/seed/{product.seed}/400/400.jpg" alt={product.name} class="w-full aspect-square object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
            {#if product.badge}
              <div class="absolute top-6 left-6 {product.badgeClass} text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">{product.badge}</div>
            {/if}
          </div>
          <div class="mt-4 px-1">
            <h4 class="font-semibold text-navy-600">{product.name}</h4>
            <p class="text-navy-300 text-sm mt-1">{product.type}</p>
            <p class="text-accent-yellow font-bold mt-2">${product.price}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
