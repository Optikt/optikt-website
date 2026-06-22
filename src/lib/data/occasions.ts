export interface OccasionSound {
  src: string;
  volume?: number;
}

export interface OccasionConfig {
  id: string;
  name: string;
  /** Path to Lottie JSON file in /static/animations/ */
  src?: string;
  /**
   * Inline SVG markup as fallback when src is not set
   * or when Lottie file fails to load.
   */
  svg?: string;
  position: 'corner-br' | 'corner-bl' | 'corner-tr' | 'corner-tl' | 'fullscreen' | 'floating';
  size: number;
  speed?: number;
  loop?: boolean;
  autoplay?: boolean;
  sound?: OccasionSound;
  description?: string;
}

export interface OccasionData {
  active: string | null;
  occasions: OccasionConfig[];
}

export const occasions: OccasionData = {
  // ────────────────────────────────────────────
  // Set `active` to an occasion id to enable it.
  // Set to `null` to disable all occasion effects.
  // ────────────────────────────────────────────
  active: 'mundial-2026',

  occasions: [
    {
      id: 'mundial-2026',
      name: 'Mundial 2026',
      position: 'corner-br',
      size: 100,
      description: 'Balón de fútbol flotando en esquina inferior derecha',
      src: '/animations/mundial-2026.json',
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="white" stroke="#222" stroke-width="2"/>
        <path d="M50 2 L61 35 L96 35 L68 56 L78 90 L50 70 L22 90 L32 56 L4 35 L39 35 Z" fill="#222" opacity="0.9"/>
        <circle cx="50" cy="50" r="12" fill="white" stroke="#222" stroke-width="1.5"/>
      </svg>`,
    },
    {
      id: 'navidad',
      name: 'Navidad',
      position: 'fullscreen',
      size: 300,
      svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="100" r="3" fill="#94a3b8" opacity="0.8"><animate attributeName="cy" values="-10;310" dur="4s" repeatCount="indefinite"/><animate attributeName="cx" values="40;60;40" dur="3s" repeatCount="indefinite"/></circle>
        <circle cx="150" cy="50" r="4" fill="#cbd5e1" opacity="0.6"><animate attributeName="cy" values="-10;310" dur="5s" repeatCount="indefinite"/></circle>
        <circle cx="250" cy="180" r="2.5" fill="#e2e8f0" opacity="0.7"><animate attributeName="cy" values="-10;310" dur="3.5s" repeatCount="indefinite"/><animate attributeName="cx" values="250;230;250" dur="2.5s" repeatCount="indefinite"/></circle>
        <circle cx="80" cy="200" r="3.5" fill="#94a3b8" opacity="0.5"><animate attributeName="cy" values="-10;310" dur="6s" repeatCount="indefinite"/></circle>
        <circle cx="200" cy="90" r="3" fill="#cbd5e1" opacity="0.6"><animate attributeName="cy" values="-10;310" dur="4.5s" repeatCount="indefinite"/></circle>
        <circle cx="120" cy="260" r="4.5" fill="#e2e8f0" opacity="0.4"><animate attributeName="cy" values="-10;310" dur="7s" repeatCount="indefinite"/></circle>
        <circle cx="280" cy="40" r="2" fill="#94a3b8" opacity="0.7"><animate attributeName="cy" values="-10;310" dur="3s" repeatCount="indefinite"/></circle>
      </svg>`,
      description: 'Nieve cayendo en toda la pantalla',
    },
    {
      id: 'playa',
      name: 'Vacaciones de Playa',
      position: 'corner-bl',
      size: 120,
      svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="30" r="22" fill="#fbbf24" opacity="0.9"/>
        <g stroke="#f59e0b" stroke-width="2" stroke-linecap="round">
          <line x1="60" y1="4" x2="60" y2="10"/>
          <line x1="60" y1="50" x2="60" y2="56"/>
          <line x1="34" y1="30" x2="40" y2="30"/>
          <line x1="80" y1="30" x2="86" y2="30"/>
          <line x1="41" y1="11" x2="45" y2="15"/>
          <line x1="75" y1="11" x2="79" y2="15"/>
          <line x1="41" y1="49" x2="45" y2="45"/>
          <line x1="75" y1="49" x2="79" y2="45"/>
        </g>
        <path d="M20 105 Q40 85 60 105 Q80 85 100 105" fill="#fb923c" opacity="0.6"/>
        <rect x="55" y="65" width="10" height="25" fill="#a16207" rx="2"/>
        <path d="M40 70 Q60 55 80 70" fill="#f97316" opacity="0.8"/>
      </svg>`,
      description: 'Sombrilla y sol en esquina inferior izquierda',
    },
  ],
};

export function getActiveOccasion(): OccasionConfig | null {
  if (!occasions.active) return null;
  return occasions.occasions.find((o) => o.id === occasions.active) ?? null;
}
