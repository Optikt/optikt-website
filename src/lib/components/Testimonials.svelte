<script lang="ts">
  import { Star, ExternalLink } from '@lucide/svelte';
  import { fadeIn } from '$lib/utils/animations';
  import { testimonials } from '$lib/data/testimonials';
  import { imagenes } from '$lib/data/images';
  import Modal from './Modal.svelte';

  let modalOpen = $state(false);
  let modalName = $state('');
  let modalText = $state('');

  const TRUNCATE_AT = 120;

  function openFull(t: (typeof testimonials)[number]) {
    modalName = t.name;
    modalText = t.text;
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
  }

  function createOpenFullHandler(t: (typeof testimonials)[number]) {
    return () => openFull(t);
  }
</script>

<section class="py-24 bg-stone-50">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div use:fadeIn={{}} class="text-center mb-16">
      <span class="text-accent-yellow text-xs font-bold tracking-[.3em] uppercase">Testimonios</span
      >
      <h2 class="text-4xl md:text-5xl font-bold text-navy-600 mt-4 tracking-tight">
        Lo que Dicen Nuestros Pacientes
      </h2>
    </div>
    <div class="grid md:grid-cols-3 gap-8">
      {#each testimonials as t, i (t.name)}
        {@const isLong = t.text.length > TRUNCATE_AT}
        {@const displayText = isLong ? t.text.slice(0, TRUNCATE_AT) + '…' : t.text}
        <div
          use:fadeIn={{ delay: (i + 1) * 0.1 }}
          class="bg-white rounded-2xl p-8 border border-stone-100 hover:border-accent-yellow/20 transition-all duration-300 hover:shadow-lg"
        >
          <div class="flex gap-1 mb-4">
            {#each Array(5) as _, s (s)}
              <Star class="w-4 h-4 text-accent-yellow fill-accent-yellow" />
            {/each}
          </div>
          <p class="text-navy-400 text-sm leading-relaxed">
            {displayText}
          </p>
          {#if isLong}
            <button
              onclick={createOpenFullHandler(t)}
              class="text-accent-yellow text-sm font-semibold mt-2 hover:underline transition-all cursor-pointer"
            >
              Leer más
            </button>
          {/if}
          <div class="flex items-center gap-3 mt-6">
            <img
              src={imagenes[t.imageKey].src as string}
              alt={imagenes[t.imageKey].alt}
              class="w-10 h-10 rounded-full object-cover"
              loading="lazy"
            />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-1.5">
                <span class="text-navy-600 text-sm font-semibold">{t.name}</span>
                {#if t.link}
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noreferrer external"
                    class="text-navy-300 hover:text-accent-yellow transition-colors inline-flex cursor-pointer"
                    aria-label={t.linkLabel ?? 'Ver reseña externa'}
                  >
                    <ExternalLink class="w-3.5 h-3.5" />
                  </a>
                {/if}
              </div>
              <div class="text-navy-300 text-xs">Cliente desde {t.clientSince}</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<Modal open={modalOpen} title={modalName} onClose={closeModal}>
  <p class="text-navy-400 text-sm leading-relaxed">{modalText}</p>
</Modal>
