<script lang="ts">
  import { X, Send } from '@lucide/svelte';
  import { business } from '$lib/data/business';
  import { getImagen } from '$lib/data/images';

  let {
    open,
    onClose,
    product = null,
  }: {
    open: boolean;
    onClose: () => void;
    product?: { imageKey: string } | null;
  } = $props();

  let formEl: HTMLFormElement;
  let nombre = $state('');
  let motivo = $state('Asesoría');
  let mensaje = $state('');

  let productEntry = $derived(product?.imageKey ? getImagen(product.imageKey) : null);

  $effect(() => {
    if (open) {
      nombre = '';
      motivo = product ? 'Consulta de producto' : 'Asesoría';
      mensaje = '';
    }
  });

  function handleClose() {
    onClose();
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    let msg = `Hola, soy ${nombre}. Quisiera ${motivo}.`;
    if (productEntry) {
      const ref = productEntry.metadata?.ref ? ` (Ref: ${productEntry.metadata.ref})` : '';
      msg += `\nMe interesa el modelo: ${productEntry.nombre ?? productEntry.alt}${ref}.`;
    } else if (product) {
      msg += `\nMe interesa el modelo consultado.`;
    }
    msg += `\n\n${mensaje}`;
    window.open(`${business.socialLinks[2].href}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  }
</script>

<div
  role="dialog"
  aria-modal="true"
  tabindex="-1"
  class="fixed inset-0 z-70 flex items-center justify-center p-4 transition-opacity duration-300"
  class:opacity-0={!open}
  class:pointer-events-none={!open}
  class:opacity-100={open}
  class:pointer-events-auto={open}
  onkeydown={(e) => {
    if (e.key === 'Escape') onClose();
  }}
>
  <button
    class="fixed inset-0 bg-navy-600/80 backdrop-blur-sm cursor-default"
    onclick={handleClose}
    aria-label="Cerrar"
  ></button>
  <div
    class="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-transform duration-300"
    class:scale-90={!open}
    class:translate-y-5={!open}
    class:scale-100={open}
    class:translate-y-0={open}
  >
    <div class="flex items-center justify-between p-6 border-b border-stone-100">
      <div>
        <h3 class="text-xl font-bold text-navy-600">Contáctanos</h3>
        <p class="text-navy-300 text-sm mt-1">Te responderemos por WhatsApp</p>
      </div>
      <button
        onclick={onClose}
        class="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-navy-400 hover:bg-stone-100 transition-colors flex-shrink-0 cursor-pointer"
      >
        <X class="w-5 h-5" />
      </button>
    </div>
    <form bind:this={formEl} class="p-6 space-y-5" onsubmit={handleSubmit}>
      {#if productEntry}
        <div class="bg-accent-yellow/10 rounded-lg px-4 py-3 text-sm text-navy-600 font-medium">
          Consultando por: <span class="font-bold">{productEntry.nombre ?? productEntry.alt}</span>
          {#if productEntry.metadata?.ref}
            <span class="text-navy-400 ml-1">({productEntry.metadata.ref})</span>
          {/if}
        </div>
      {/if}
      <div>
        <label for="contact-name" class="text-navy-600 text-sm font-semibold block mb-2"
          >Nombre</label
        >
        <input
          id="contact-name"
          type="text"
          required
          bind:value={nombre}
          placeholder="Ej: María González"
          class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all placeholder:text-navy-200"
        />
      </div>
      <div>
        <label for="contact-motivo" class="text-navy-600 text-sm font-semibold block mb-2"
          >Motivo</label
        >
        <select
          id="contact-motivo"
          required
          bind:value={motivo}
          disabled={!!product}
          class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <option value="Asesoría">Asesoría</option>
          <option value="Consulta general">Consulta general</option>
          <option value="Consulta de producto">Consulta de producto</option>
        </select>
      </div>
      <div>
        <label for="contact-mensaje" class="text-navy-600 text-sm font-semibold block mb-2"
          >Mensaje</label
        >
        <textarea
          id="contact-mensaje"
          rows="4"
          bind:value={mensaje}
          placeholder="Cuéntanos qué necesitas..."
          class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all placeholder:text-navy-200 resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-accent-yellow text-navy-600 py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-accent-yellow-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/20 flex items-center justify-center gap-2 cursor-pointer"
      >
        <Send class="w-5 h-5" /> Enviar a WhatsApp
      </button>
    </form>
  </div>
</div>
