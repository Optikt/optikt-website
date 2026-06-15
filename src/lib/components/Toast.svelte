<script lang="ts">
  import { Check } from '@lucide/svelte';

  let { show }: { show: boolean } = $props();
</script>

<div
  class="fixed bottom-6 right-6 bg-navy-600 text-white px-6 py-4 rounded-xl shadow-2xl z-80 flex items-center gap-3 max-w-sm transition-all duration-[400ms] ease-out"
  class:opacity-0={!show}
  class:translate-y-24={!show}
  class:opacity-100={show}
  class:translate-y-0={show}
>
  <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
    <Check class="w-4 h-4 text-green-400" />
  </div>
  <div>
    <div class="font-semibold text-sm">¡Cita Agendada!</div>
    <div class="text-white/60 text-xs mt-0.5">Te contactaremos para confirmar.</div>
  </div>
</div>
