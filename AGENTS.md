# optikt-website

SvelteKit 5 site for OPTIKT, an eyewear brand. Spanish-language static site with admin panel.

## Stack

- **Runtime:** Svelte 5 (runes: `$state`, `$effect`, `$derived`, `$props`), SvelteKit 2, TypeScript 5.9
- **Build:** Vite 7, pnpm 10, `@sveltejs/adapter-auto`
- **Styling:** Tailwind CSS 4 (CSS-first config, no `tailwind.config.js`), via `@tailwindcss/vite`
- **UI:** bits-ui, embla-carousel-svelte, lucide icons, tailwind-variants, tw-animate-css
- **Forms:** sveltekit-superforms 2 + `zod/v4` (use `zod4()` adapter)
- **Env vars:** `ADMIN_PASSWORD` from `$env/dynamic/private`, dev default in `.env`

## Commands

```
pnpm dev        # vite dev
pnpm build      # vite build
pnpm preview    # vite preview
pnpm check      # svelte-kit sync && svelte-check --tsconfig ./tsconfig.json
```

## Architecture

- **All data is hardcoded** in `$lib/data` — no database, no CMS, no API.
- `$lib/utils` — `loadDetailBySlug()` helper for detail pages with related items.
- `$lib/schemas/` — Zod schemas (e.g. `contact` for the contact form).
- **Admin auth:** Cookie-based (`admin_auth` checked in `src/routes/admin/+layout.server.ts`). Password compared against `env.ADMIN_PASSWORD` (dev: `admin`). Session lasts 24h, httpOnly, sameSite=strict.
- No tests exist.

## Routes

| Path                  | Loads                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------- |
| `/`                   | `getFeaturedCollections()`, `getFeaturedLenses()`, services, testimonials, brandInfo        |
| `/colecciones`        | `collections`                                                                               |
| `/colecciones/[slug]` | `getCollectionBySlug()` via `loadDetailBySlug()`                                            |
| `/cristales`          | `lenses`                                                                                    |
| `/cristales/[slug]`   | `getLensBySlug()` via `loadDetailBySlug()`                                                  |
| `/servicios`          | `services`                                                                                  |
| `/contacto`           | `superValidate(zod4(contactFormSchema))` — validates name, email, phone?, message, service? |
| `/nosotros`           | static                                                                                      |
| `/admin`              | collections, lenses, services, testimonials, brandInfo; actions: `logout`                   |
| `/admin/login`        | actions: `default` checks password against env, sets cookie, redirects                      |

## Form pattern

```ts
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { contactFormSchema } from '$lib/schemas/contact';

export const load = async () => ({
  form: await superValidate(zod4(contactFormSchema)),
});

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod4(contactFormSchema));
    if (!form.valid) return fail(400, { form });
    return { form };
  },
};
```

## Notes

- `.github/prompts/` and `.github/skills/` contain AI config (scripts only in `__pycache__`, no source files committed).
- `design-system/optikt/pages/` is empty — reserved for design artifacts.
- No `.gitignore` yet; `node_modules/`, `.svelte-kit/`, `.env` should be ignored.
- Remote: `git@github.com:Optikt/optikt-website.git` (main branch: `main`).
- Fresh repo — no commits yet, source files need to be committed.
