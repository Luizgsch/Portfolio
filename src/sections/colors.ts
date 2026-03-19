export interface Palette {
  id: string;
  name: string;
  colors: {
    '--bg-primary': string;
    '--bg-secondary': string;
    '--bg-card': string;
    '--border-color': string;
    '--color-primary': string;
    '--color-secondary': string;
    '--text-primary': string;
    '--text-secondary': string;
  };
}

export const palettes: Palette[] = [
  {
    id: 'default',
    name: 'Obsidian Warm (Padrão)',
    colors: {
      '--bg-primary': '#0b0f12',
      '--bg-secondary': '#12181d',
      '--bg-card': '#1b2329',
      '--border-color': '#2a333a',
      '--color-primary': '#c08457',
      '--color-secondary': '#e2b49a',
      '--text-primary': '#f9fafb',
      '--text-secondary': '#9ca3af',
    },
  },
  {
    id: 'crimson',
    name: 'Neo Crimson',
    colors: {
      '--bg-primary': '#0a0a0a',
      '--bg-secondary': '#121212',
      '--bg-card': '#1a1a1a',
      '--color-primary': '#e11d48',
      '--color-secondary': '#fb7185',
      '--text-primary': '#fafafa',
      '--text-secondary': '#a1a1aa',
      '--border-color': '#27272a',
    },
  },
  {
    id: 'minimal',
    name: 'Soft Minimal',
    colors: {
      '--bg-primary': '#f8fafc',
      '--bg-secondary': '#969494ff',
      '--bg-card': '#6d6d6dff',
      '--color-primary': '#1e293b',
      '--color-secondary': '#64748b',
      '--text-primary': '#0f172a',
      '--text-secondary': '#000000ff',
      '--border-color': '#e2e8f0',
    },
  },
  {
    id: 'teal',
    name: 'Deep Teal',
    colors: {
      '--bg-primary': '#020617',
      '--bg-secondary': '#0b1120',
      '--bg-card': '#111827',
      '--color-primary': '#14b8a6',
      '--color-secondary': '#5eead4',
      '--text-primary': '#f1f5f9',
      '--text-secondary': '#94a3b8',
      '--border-color': '#1f2937',
    },
  },
  {
    id: 'violet',
    name: 'Royal Violet',
    colors: {
      '--bg-primary': '#0a0a12',
      '--bg-secondary': '#12121c',
      '--bg-card': '#1a1a2b',
      '--color-primary': '#7c3aed',
      '--color-secondary': '#a78bfa',
      '--text-primary': '#f8fafc',
      '--text-secondary': '#a1a1aa',
      '--border-color': '#27272a',
    },
  },
];
