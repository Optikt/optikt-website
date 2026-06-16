<script lang="ts">
  import { X, CalendarCheck, Check } from '@lucide/svelte';

  let { open, onClose, onToast }: { open: boolean; onClose: () => void; onToast: () => void } = $props();

  let formEl: HTMLFormElement;

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    onClose();
    onToast();
    formEl?.reset();
  }
</script>



<div
  role="dialog"
  aria-modal="true"
  tabindex="-1"
  class="fixed inset-0 bg-navy-600/80 backdrop-blur-sm z-70 flex items-center justify-center p-4 transition-opacity duration-300"
  class:opacity-0={!open}
  class:pointer-events-none={!open}
  class:opacity-100={open}
  class:pointer-events-auto={open}
  onclick={handleBackdropClick}
  onkeydown={(e) => { if (e.key === 'Escape') onClose(); }}
>
  <div
    class="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-transform duration-300"
    class:scale-90={!open}
    class:translate-y-5={!open}
    class:scale-100={open}
    class:translate-y-0={open}
  >
    <div class="flex items-center justify-between p-6 border-b border-stone-100">
      <div>
        <h3 class="text-xl font-bold text-navy-600">Agendar tu Cita</h3>
        <p class="text-navy-300 text-sm mt-1">Completa el formulario y te contactaremos</p>
      </div>
      <button onclick={onClose} class="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-navy-400 hover:bg-stone-100 transition-colors flex-shrink-0 cursor-pointer">
        <X class="w-5 h-5" />
      </button>
    </div>
    <form bind:this={formEl} class="p-6 space-y-5" onsubmit={handleSubmit}>
      <div>
        <label for="modal-name" class="text-navy-600 text-sm font-semibold block mb-2">Nombre Completo</label>
        <input id="modal-name" type="text" required placeholder="Ej: María González" class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all placeholder:text-navy-200" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="modal-phone" class="text-navy-600 text-sm font-semibold block mb-2">Teléfono</label>
          <input id="modal-phone" type="tel" required placeholder="+58 424..." class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all placeholder:text-navy-200" />
        </div>
        <div>
          <label for="modal-email" class="text-navy-600 text-sm font-semibold block mb-2">Email</label>
          <input id="modal-email" type="email" placeholder="tu@email.com" class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all placeholder:text-navy-200" />
        </div>
      </div>
      <div>
        <label for="modal-type" class="text-navy-600 text-sm font-semibold block mb-2">Tipo de Cita</label>
        <select id="modal-type" required class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all appearance-none cursor-pointer">
          <option value="" disabled selected>Selecciona una opción</option>
          <option value="examen">Examen Visual Completo</option>
          <option value="adaptacion">Adaptación de Monturas</option>
          <option value="contacto">Lentes de Contacto</option>
          <option value="seguimiento">Seguimiento / Ajuste</option>
        </select>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="modal-date" class="text-navy-600 text-sm font-semibold block mb-2">Fecha Preferida</label>
          <input id="modal-date" type="date" required class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all" />
        </div>
        <div>
          <label for="modal-time" class="text-navy-600 text-sm font-semibold block mb-2">Horario</label>
          <select id="modal-time" required class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all appearance-none cursor-pointer">
            <option value="" disabled selected>Selecciona</option>
            <option>8:00 AM</option><option>9:00 AM</option><option>10:00 AM</option><option>11:00 AM</option>
            <option>1:00 PM</option><option>2:00 PM</option><option>3:00 PM</option><option>4:00 PM</option>
          </select>
        </div>
      </div>
      <div>
        <label for="modal-notes" class="text-navy-600 text-sm font-semibold block mb-2">Notas Adicionales</label>
        <textarea id="modal-notes" rows="3" placeholder="Cuéntanos cualquier detalle adicional..." class="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent transition-all placeholder:text-navy-200 resize-none"></textarea>
      </div>
      <button type="submit" class="w-full bg-accent-yellow text-navy-600 py-4 rounded-lg font-bold text-sm tracking-wide hover:bg-accent-yellow-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/20 flex items-center justify-center gap-2 cursor-pointer">
        <CalendarCheck class="w-5 h-5" /> Confirmar Cita
      </button>
    </form>
  </div>
</div>
