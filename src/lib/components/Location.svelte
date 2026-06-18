<script lang="ts">
  import { MapPin, Clock, Phone } from '@lucide/svelte';
  import SocialIcons from './SocialIcons.svelte';
  import { locationData } from '$lib/data/location';
  import type { HoursRange } from '$lib/data/location';
  import { fadeIn } from '$lib/utils/animations';

  function getVenezuelaTime(): { day: number; hours: number; minutes: number } {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const v = new Date(utc + locationData.timezoneOffset * 3600000);
    return { day: v.getUTCDay(), hours: v.getUTCHours(), minutes: v.getUTCMinutes() };
  }

  function parseTime(t: string): number {
    const [h, m] = t.split(':').map(Number);
    return h + m / 60;
  }

  function formatTime(t: string): string {
    const [h, m] = t.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
  }

  const vTime = getVenezuelaTime();
  const currentMinutes = vTime.hours * 60 + vTime.minutes;

  function getTodayRange(): HoursRange | null {
    return locationData.hours.find(
      (r) => vTime.day >= r.weekdayStart && vTime.day <= r.weekdayEnd,
    ) ?? null;
  }

  function getNextOpenDay(): { range: HoursRange; dayLabel: string } | null {
    for (let i = 1; i <= 7; i++) {
      const checkDay = (vTime.day + i) % 7;
      const range = locationData.hours.find(
        (r) => checkDay >= r.weekdayStart && checkDay <= r.weekdayEnd,
      );
      if (range) {
        const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const label = i === 1 ? 'mañana' : `el ${dayNames[checkDay]}`;
        return { range, dayLabel: label };
      }
    }
    return null;
  }

  const todayRange = getTodayRange();

  let statusText: string;
  let isOpen: boolean;

  if (todayRange) {
    const openM = parseTime(todayRange.open) * 60;
    const closeM = parseTime(todayRange.close) * 60;

    if (currentMinutes >= openM && currentMinutes < closeM) {
      isOpen = true;
      statusText = `Abierto ahora - Cerramos a las ${formatTime(todayRange.close)}`;
    } else if (currentMinutes < openM) {
      isOpen = false;
      statusText = `Cerrado - Abrimos hoy a las ${formatTime(todayRange.open)}`;
    } else {
      isOpen = false;
      const next = getNextOpenDay();
      statusText = next
        ? `Cerrado - Volvemos ${next.dayLabel} a las ${formatTime(next.range.open)}`
        : 'Cerrado';
    }
  } else {
    isOpen = false;
    const next = getNextOpenDay();
    statusText = next
      ? `Cerrado hoy - Volvemos ${next.dayLabel} a las ${formatTime(next.range.open)}`
      : 'Cerrado';
  }
</script>

{#snippet infoItem(icon: typeof MapPin, title: string, lines: string[])}
  <div class="flex gap-4 items-start">
    <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
      <svelte:component this={icon} class="w-5 h-5 text-accent-yellow" />
    </div>
    <div>
      <h4 class="text-white font-semibold">{title}</h4>
      {#each lines as line}
        <p class="text-white/50 text-sm mt-1">{line}</p>
      {/each}
    </div>
  </div>
{/snippet}

{#snippet galleryImage(src: string, alt: string, className: string = 'h-48')}
  <div class="rounded-2xl overflow-hidden lens-shine {className}">
    <img {src} {alt} class="w-full h-full object-cover" />
  </div>
{/snippet}

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
          {@render infoItem(MapPin, 'Dirección', [locationData.address])}
          {@render infoItem(Clock, 'Horario', locationData.hours.map((h) => `${h.label}: ${formatTime(h.open)} - ${formatTime(h.close)}`))}
          {@render infoItem(Phone, 'Contacto', [locationData.phone, locationData.email])}
        </div>
        <div class="mt-10">
          <p class="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Síguenos</p>
          <SocialIcons variant="circles" />
        </div>
      </div>

      <div use:fadeIn={{ type: 'right' }}>
        <div class="grid grid-cols-2 gap-4">
          {@render galleryImage('https://picsum.photos/seed/optik-store-front-sign/400/300.jpg', 'Fachada')}
          {@render galleryImage('https://picsum.photos/seed/optik-display-shelves/400/300.jpg', 'Vitrina')}
          <div class="col-span-2 rounded-2xl overflow-hidden h-56 relative">
            <img src="https://picsum.photos/seed/optik-store-panorama/800/400.jpg" alt="Panorámica" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-navy-600/60 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 flex items-center gap-3">
                <div class="w-3 h-3 rounded-full animate-pulse {isOpen ? 'bg-green-400' : 'bg-red-400'}"></div>
                <span class="text-white text-sm font-medium">{statusText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
