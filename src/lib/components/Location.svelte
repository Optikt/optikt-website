<script lang="ts">
  import { MapPin, Clock, Phone } from '@lucide/svelte';
  import { business } from '$lib/data/business';
  import type { HoursRange } from '$lib/data/business';

  function getVenezuelaTime() {
    const now = new Date();
    const v = new Date(now.getTime() + business.timezoneOffset * 3600000);
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
    return (
      business.hours.find((r) => vTime.day >= r.weekdayStart && vTime.day <= r.weekdayEnd) ?? null
    );
  }

  function getNextOpenDay(): { range: HoursRange; dayLabel: string } | null {
    for (let i = 1; i <= 7; i++) {
      const checkDay = (vTime.day + i) % 7;
      const range = business.hours.find(
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

  function observe(element: HTMLElement) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    );
    observer.observe(element);
    return {
      destroy() {
        observer.disconnect();
      },
    };
  }
</script>

<section id="comunidad" class="py-24 md:py-32 bg-[#0F1B33] relative overflow-hidden">
  <div class="absolute top-0 right-0 w-80 h-80 bg-[#FFCC00]/5 rounded-full blur-[100px]"></div>
  <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div class="grid lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2 items-center">
      <div use:observe class="fade-left">
        <span class="text-[#FFCC00] text-xs font-bold tracking-[.3em] uppercase">Visítanos</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight leading-tight">
          Nuestro Espacio,<br />Tu Comunidad
        </h2>
        <p class="text-white/70 mt-6 leading-relaxed">
          Un lugar diseñado para que te sientas cómodo, inspirado y bien atendido en el corazón de
          Maturín.
        </p>

        <div class="mt-10 space-y-6">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer external"
            class="flex gap-4 items-start group cursor-pointer rounded-xl transition-colors duration-200 hover:bg-white/5 -mx-4 px-4 py-3"
          >
            <div
              class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
            >
              <MapPin class="w-5 h-5 text-[#FFCC00]" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Dirección</h4>
              <p
                class="text-white/70 text-sm mt-1 group-hover:text-white/70 transition-colors duration-200"
              >
                {business.address}
              </p>
            </div>
          </a>

          <div class="flex gap-4 items-start">
            <div
              class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
            >
              <Clock class="w-5 h-5 text-[#FFCC00]" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Horario</h4>
              {#each business.hours as h (h.label)}
                <p class="text-white/70 text-sm mt-1">
                  {h.label}: {formatTime(h.open)} - {formatTime(h.close)}
                </p>
              {/each}
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <div
              class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"
            >
              <Phone class="w-5 h-5 text-[#FFCC00]" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Contacto</h4>
              <a
                href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
                class="text-white/70 text-sm mt-1 block hover:text-white/70 transition-colors duration-200"
                >{business.phone}</a
              >
              <a
                href={`mailto:${business.email}`}
                class="text-white/70 text-sm hover:text-white/70 transition-colors duration-200"
                >{business.email}</a
              >
            </div>
          </div>
        </div>
      </div>

      <div use:observe class="fade-right">
        <div class="flex flex-col gap-6">
          <div
            class="rounded-2xl overflow-hidden h-[400px] md:h-[450px] relative border border-white/10 shadow-2xl group cursor-pointer"
          >
            <iframe
              src={business.mapsEmbedUrl}
              class="map-dark-mode grayscale group-hover:grayscale-0 transition-all duration-700 absolute inset-0 w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación de OPTIK-T en Maturín"
            ></iframe>
            <div class="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
              <div
                class="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg flex items-center gap-3"
              >
                <div
                  class="w-3 h-3 rounded-full animate-pulse {isOpen
                    ? 'bg-green-400'
                    : 'bg-red-400'} shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                ></div>
                <span class="text-white text-sm font-medium">{statusText}</span>
              </div>
            </div>
          </div>

          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer external"
            class="bg-[#FFCC00] text-[#0F1B33] px-8 py-3.5 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-[#FFCC00]/10 flex items-center gap-2 justify-center w-full md:w-auto md:self-start"
          >
            <MapPin class="w-5 h-5" />
            Cómo Llegar
          </a>
        </div>
      </div>

      <div class="lg:col-start-1 lg:row-start-2">
        <p class="text-white/70 text-xs font-bold tracking-widest uppercase my-4">Síguenos</p>
        <div class="flex gap-3">
          {#each business.socialLinks as { href, label, path } (label)}
            <a
              {href}
              target="_blank"
              rel="noreferrer external"
              aria-label={label}
              class="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#FFCC00]/10 hover:text-[#FFCC00] hover:border-[#FFCC00]/50 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path d={path} />
              </svg>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  :global(.fade-left) {
    opacity: 0;
    transform: translateX(-40px);
    transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
  }
  :global(.fade-left.visible) {
    opacity: 1;
    transform: translateX(0);
  }
  :global(.fade-right) {
    opacity: 0;
    transform: translateX(40px);
    transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
  }
  :global(.fade-right.visible) {
    opacity: 1;
    transform: translateX(0);
  }
  .map-dark-mode {
    filter: invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9);
  }
</style>
