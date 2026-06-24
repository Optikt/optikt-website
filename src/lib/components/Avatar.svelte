<script lang="ts">
  import { nameToColor, nameToInitials } from '$lib/utils/avatar';

  let {
    name,
    size = 'md',
    class: className = '',
  }: {
    name: string;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  } = $props();

  let color = $derived(nameToColor(name));
  let initials = $derived(nameToInitials(name));

  let sizeClasses = $derived(
    size === 'sm' ? 'w-8 h-8 text-xs' : size === 'lg' ? 'w-14 h-14 text-xl' : 'w-10 h-10 text-sm',
  );
</script>

<div
  class="rounded-full flex items-center justify-center font-bold text-white select-none {sizeClasses} {className}"
  style="background-color: {color}"
  aria-label={name}
  role="img"
>
  {initials}
</div>
