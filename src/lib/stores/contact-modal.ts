import { writable } from 'svelte/store';

export const modalOpen = writable(false);
export const modalProductName = writable('');
export const modalProductSku = writable('');
