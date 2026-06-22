<script lang="ts">
  import { ArrowLeft, Frown } from '@lucide/svelte';
  import { ImagotipoHorizontal } from '$lib/components/branding';
  import { page } from '$app/stores';
  import { resolve } from '$app/paths';

  const fallback = {
    title: 'Oops, algo salió mal',
    description: 'Ocurrió un error inesperado. Por favor, vuelve a intentarlo.',
  } as const;

  const messages: Record<number, { title: string; description: string }> = {
    400: {
      title: 'Solicitud Inválida',
      description: 'Algo salió mal con tu solicitud. Verifica los datos e intenta de nuevo.',
    },
    404: {
      title: 'Página No Encontrada',
      description: 'Esta página no existe o fue movida. Revisa la URL o vuelve al inicio.',
    },
    500: {
      title: 'Error del Servidor',
      description: 'Tuvimos un problema interno. Nuestro equipo ya fue notificado.',
    },
  };

  let title = $derived(messages[$page.status]?.title ?? fallback.title);
  let description = $derived(messages[$page.status]?.description ?? fallback.description);
</script>

<svelte:head>
  <title>Error {$page.status} — OPTIK-T</title>
</svelte:head>

<div class="min-h-screen bg-navy-700 flex flex-col">
  <div class="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
    <div class="mb-8">
      <a href={resolve('/')}>
        <ImagotipoHorizontal theme="light" class="h-12 w-auto" ariaLabel="OPTIK-T" />
      </a>
    </div>

    <div class="relative mb-10">
      <Frown class="w-24 h-24 text-accent-yellow/20" />
      <span
        class="absolute inset-0 flex items-center justify-center text-6xl font-bold text-accent-yellow tabular-nums"
      >
        {$page.status}
      </span>
    </div>

    <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
      {title}
    </h1>
    <p class="text-white/50 text-lg max-w-md mb-12">
      {description}
    </p>

    <a
      href={resolve('/')}
      class="inline-flex items-center gap-2 bg-accent-yellow text-navy-600 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-accent-yellow-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent-yellow/25"
    >
      <ArrowLeft class="w-4 h-4" />
      Volver al Inicio
    </a>
  </div>

  <footer class="py-6 text-center">
    <p class="text-white/20 text-xs">
      &copy; {new Date().getFullYear()} OPTIK-T. Todos los derechos reservados.
    </p>
  </footer>
</div>
