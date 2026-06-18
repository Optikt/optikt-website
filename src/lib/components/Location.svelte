<script lang="ts">
  import { MapPin, Clock, Phone } from '@lucide/svelte';
  import { locationData } from '$lib/data/location';
  import type { HoursRange } from '$lib/data/location';

  function getVenezuelaTime() {
    const now = new Date();
    const v = new Date(now.getTime() + locationData.timezoneOffset * 3600000);
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

  const mapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62851.65412273824!2d-63.2159275!3d9.7460715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3a2da5a8e3e4a1%3A0x1234567890abcdef!2sMatur%C3%ADn%2C%20Monagas!5e0!3m2!1ses!2sve!4v1612345678901!5m2!1ses!2sve';

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
    return { destroy() { observer.disconnect(); } };
  }

  const socialLinks = [
    {
      href: 'https://www.instagram.com/optikt_/',
      label: 'Instagram',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
    {
      href: 'https://www.facebook.com/optikt.vision/',
      label: 'Facebook',
      path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    },
    {
      href: 'https://wa.me/584121145790',
      label: 'WhatsApp',
      path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
    },
  ];
</script>

<section id="comunidad" class="py-24 md:py-32 bg-[#0F1B33] relative overflow-hidden">
  <div class="absolute top-0 right-0 w-80 h-80 bg-[#FFCC00]/5 rounded-full blur-[100px]"></div>
  <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div class="grid lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-2 items-center">
      <div use:observe class="fade-left">
        <span class="text-[#FFCC00] text-xs font-bold tracking-[.3em] uppercase">Visítanos</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight leading-tight">Nuestro Espacio,<br />Tu Comunidad</h2>
        <p class="text-white/50 mt-6 leading-relaxed">Un lugar diseñado para que te sientas cómodo, inspirado y bien atendido en el corazón de Maturín.</p>

        <div class="mt-10 space-y-6">
          <a href={locationData.mapsUrl} target="_blank" rel="noreferrer" class="flex gap-4 items-start group cursor-pointer rounded-xl transition-colors duration-200 hover:bg-white/5 -mx-4 px-4 py-3">
            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <MapPin class="w-5 h-5 text-[#FFCC00]" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Dirección</h4>
              <p class="text-white/50 text-sm mt-1 group-hover:text-white/70 transition-colors duration-200">{locationData.address}</p>
            </div>
          </a>

          <div class="flex gap-4 items-start">
            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <Clock class="w-5 h-5 text-[#FFCC00]" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Horario</h4>
              {#each locationData.hours as h}
                <p class="text-white/50 text-sm mt-1">{h.label}: {formatTime(h.open)} - {formatTime(h.close)}</p>
              {/each}
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <Phone class="w-5 h-5 text-[#FFCC00]" />
            </div>
            <div>
              <h4 class="text-white font-semibold">Contacto</h4>
              <a href={`tel:${locationData.phone.replace(/[^+\d]/g, '')}`} class="text-white/50 text-sm mt-1 block hover:text-white/70 transition-colors duration-200">{locationData.phone}</a>
              <a href={`mailto:${locationData.email}`} class="text-white/50 text-sm hover:text-white/70 transition-colors duration-200">{locationData.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div use:observe class="fade-right">
        <div class="flex flex-col gap-6">
          <div class="rounded-2xl overflow-hidden h-[400px] md:h-[450px] relative border border-white/10 shadow-2xl group cursor-pointer">
            <iframe
              src={mapsEmbedUrl}
              class="map-dark-mode grayscale group-hover:grayscale-0 transition-all duration-700 absolute inset-0 w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación de OPTIK-T en Maturín"
            ></iframe>
            <div class="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
              <div class="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg flex items-center gap-3">
                <div class="w-3 h-3 rounded-full animate-pulse {isOpen ? 'bg-green-400' : 'bg-red-400'} shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                <span class="text-white text-sm font-medium">{statusText}</span>
              </div>
            </div>
          </div>

          <a href="https://www.google.com/maps/search/?api=1&query=Optik-T+Maturin" target="_blank" rel="noreferrer" class="bg-[#FFCC00] text-[#0F1B33] px-8 py-3.5 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-[#FFCC00]/10 flex items-center gap-2 justify-center w-full md:w-auto md:self-start">
            <MapPin class="w-5 h-5" />
            Cómo Llegar
          </a>
        </div>
      </div>

       <div class="lg:col-start-1 lg:row-start-2">
        <p class="text-white/50 text-xs font-bold tracking-widest uppercase my-4">Síguenos</p>
        <div class="flex gap-3">
          {#each socialLinks as { href, label, path }}
            <a {href} target="_blank" rel="noreferrer" aria-label={label} class="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#FFCC00]/10 hover:text-[#FFCC00] hover:border-[#FFCC00]/50 transition-all">
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
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  :global(.fade-left.visible) {
    opacity: 1;
    transform: translateX(0);
  }
  :global(.fade-right) {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  :global(.fade-right.visible) {
    opacity: 1;
    transform: translateX(0);
  }
  .map-dark-mode {
    filter: invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9);
  }
</style>
