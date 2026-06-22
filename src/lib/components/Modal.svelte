<script lang="ts">
  import { X } from '@lucide/svelte';

  let {
    open = false,
    title = '',
    onClose,
    children,
  }: {
    open?: boolean;
    title?: string;
    onClose: () => void;
    children?: import('svelte').Snippet;
  } = $props();
</script>

{#if open}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-black/50 transition-opacity duration-200"
      role="button"
      tabindex="0"
      onclick={onClose}
      onkeydown={(e) => e.key === 'Escape' && onClose()}
    ></div>
    <div
      class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
    >
      {#if title || true}
        <div class="flex items-center justify-between p-6 border-b border-stone-100">
          <h3 class="text-lg font-semibold text-navy-600">{title}</h3>
          <button
            onclick={onClose}
            class="text-navy-300 hover:text-navy-600 transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X class="w-5 h-5" />
          </button>
        </div>
      {/if}
      <div class="p-6">
        {@render children?.()}
      </div>
    </div>
  </div>
{/if}
