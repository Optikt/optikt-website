import { Building2, Cog, FlaskConical, Microscope } from '@lucide/svelte';
import type { Component } from 'svelte';

export interface Partner {
  name: string;
}

export interface PartnerCategory {
  label: string;
  icon: Component;
  partners: Partner[];
}

export const partnerCategories: PartnerCategory[] = [
  {
    label: 'Laboratorios',
    icon: FlaskConical,
    partners: [
      { name: 'Novak' },
      { name: 'Autana Vision' },
      { name: 'FFTech' },
      { name: 'Rodenstock' },
    ],
  },
  {
    label: 'Marcas',
    icon: Cog,
    partners: [
      { name: 'American Specs' },
      { name: 'Kairos' },
      { name: 'Fairuz' },
      { name: 'Y&C' },
      { name: 'Lacoste' },
      { name: 'Palazzo' },
      { name: 'Dilusso' },
      { name: 'Ray-Ban' },
      { name: 'Hitch' },
      { name: 'Venetto' },
      { name: 'Gio' },
      { name: 'Boss' },
    ],
  },
  {
    label: 'Tecnologías',
    icon: Microscope,
    partners: [
      { name: 'Transitions' },
      { name: 'Evo-S' },
      { name: 'Precisa' },
      { name: 'Zeiss' },
      { name: 'NuPolar' },
      { name: 'AI-Lens' },
      { name: 'Rodenstock' },
    ],
  },
];
