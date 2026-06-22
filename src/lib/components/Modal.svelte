<script lang="ts">
  import { X } from '@lucide/svelte';

  let {
    open = false,
    title = '',
    onClose,
    children,
    header,
    backdropClass = 'bg-black/50',
    class: className = '',
  }: {
    open?: boolean;
    title?: string;
    onClose: () => void;
    children?: import('svelte').Snippet;
    header?: import('svelte').Snippet;
    backdropClass?: string;
    class?: string;
  } = $props();

  let dialogEl: HTMLDivElement;

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') onClose();
  }

  $effect(() => {
    if (open) {
      dialogEl?.focus();
    }
  });
</script>

<div
  bind:this={dialogEl}
  role="dialog"
  aria-modal="true"
  tabindex="-1"
  class="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 {className}"
  class:opacity-0={!open}
  class:pointer-events-none={!open}
  class:opacity-100={open}
  class:pointer-events-auto={open}
  onkeydown={handleKeydown}
>
  <button
    class="fixed inset-0 {backdropClass} transition-opacity duration-200 cursor-default"
    onclick={onClose}
    aria-label="Cerrar"
  ></button>
  <div
    class="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto transition-transform duration-300"
    class:scale-90={!open}
    class:translate-y-5={!open}
    class:scale-100={open}
    class:translate-y-0={open}
  >
    {#if header}
      {@render header()}
    {:else if title || true}
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
