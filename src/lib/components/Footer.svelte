<script lang="ts">
  import SocialIcons from './SocialIcons.svelte';
  import { ImagotipoHorizontal } from '$lib/components/branding';
  import { business } from '$lib/data/business';

  const year = new Date().getFullYear();
</script>

<footer class="bg-navy-600 pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid md:grid-cols-4 gap-12 mb-12">
      <div class="md:col-span-1">
        <ImagotipoHorizontal theme="light" class="h-9 w-auto mb-4" ariaLabel="OPTIK-T" />
        <p class="text-white/40 text-sm leading-relaxed">
          Visión con estilo. Cuidado profesional para tus ojos.
        </p>
      </div>
      <div>
        <h4 class="text-white font-semibold text-sm tracking-wider uppercase mb-4">Navegación</h4>
        <ul class="space-y-3">
          <li>
            <a
              href="#colecciones"
              class="text-white/40 text-sm hover:text-accent-yellow transition-colors"
              >Colecciones</a
            >
          </li>
          <li>
            <a
              href="#tecnologia"
              class="text-white/40 text-sm hover:text-accent-yellow transition-colors">Tecnología</a
            >
          </li>
          <li>
            <a
              href="#servicios"
              class="text-white/40 text-sm hover:text-accent-yellow transition-colors">Servicios</a
            >
          </li>
          <li>
            <a
              href="#galeria"
              class="text-white/40 text-sm hover:text-accent-yellow transition-colors">Galería</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold text-sm tracking-wider uppercase mb-4">Servicios</h4>
        <ul class="space-y-3">
          <li>
            <span class="text-white/40 text-sm">Examen Visual</span>
          </li>
          <li>
            <span class="text-white/40 text-sm">Adaptación de Monturas</span>
          </li>
          <li>
            <span class="text-white/40 text-sm">Lentes de Contacto</span>
          </li>
          <li>
            <span class="text-white/40 text-sm">Lentes Digitales</span>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contacto</h4>
        <ul class="space-y-3">
          <li class="text-white/40 text-sm">{business.phone}</li>
          <li class="text-white/40 text-sm">{business.email}</li>
          <li class="text-white/40 text-sm">{business.address}</li>
        </ul>
        <SocialIcons variant="text" />
      </div>
    </div>
    <div
      class="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p class="text-white/20 text-xs">© {year} OPTIK-T. Todos los derechos reservados.</p>
      <div class="flex gap-6">
        <span class="text-white/20 text-xs">Política de Privacidad</span>
        <span class="text-white/20 text-xs">Términos y Condiciones</span>
      </div>
    </div>
  </div>
</footer>
