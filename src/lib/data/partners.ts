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
    label: 'Proveedores',
    icon: Building2,
    partners: [
      { name: 'Marchon' },
      { name: 'Safilo' },
      { name: 'Luxottica' },
      { name: 'Marcolin' },
      { name: 'De Rigo' },
      { name: 'Kering Eyewear' },
    ],
  },
  {
    label: 'Laboratorios',
    icon: FlaskConical,
    partners: [
      { name: 'Carl Zeiss' },
      { name: 'Essilor' },
      { name: 'Hoya Vision' },
      { name: 'Rodenstock' },
      { name: 'Seiko Optical' },
    ],
  },
  {
    label: 'Marcas',
    icon: Cog,
    partners: [
      { name: 'Oakley' },
      { name: 'Ray-Ban' },
      { name: 'Prada' },
      { name: 'Tom Ford' },
      { name: 'Persol' },
      { name: 'Maui Jim' },
      { name: 'Costa' },
    ],
  },
  {
    label: 'Tecnologías',
    icon: Microscope,
    partners: [
      { name: 'Transitions' },
      { name: 'Crizal' },
      { name: 'Varilux' },
      { name: 'Sunlens' },
      { name: 'Blue Protect' },
    ],
  },
];
