import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons';

export default {
  content: [
    './{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary-tm': 'var(--color-primary)',
        'primary-content-tm': 'var(--color-primary-content)',
        'secondary-tm': 'var(--color-secondary)',
        'secondary-content-tm': 'var(--color-secondary-content)',
        'accent-tm': 'var(--color-accent)',
        'accent-content-tm': 'var(--color-accent-content)',
        'neutral-tm': 'var(--color-neutral)',
        'neutral-content-tm': 'var(--color-neutral-content)',
        'base-tm': {
          100: 'var(--color-base-100)',
          200: 'var(--color-base-200)',
          300: 'var(--color-base-300)',
        },
        'base-content-tm': 'var(--color-base-content)',
      },
      backgroundColor: {
        'highlight-color': 'var(--color-background-highlight)',
        'header-color':
          'color-mix(in srgb, var(--color-base-100) 30%, transparent)',
        'sidebar-color': 'var(--color-sidebar-background)',
      },
      borderColor: {
        'header-border-color':
          'color-mix(in srgb, var(--color-base-200) 50%, transparent)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        onedark: {
          primary: '#98c379',
          'primary-content': '#282c34',
          secondary: '#c678dd',
          'secondary-content': '#282c34',
          accent: '#61afef',
          'accent-content': '#282c34',
          neutral: '#4b5263',
          'neutral-content': '#abb2bf',
          'base-100': '#282c34',
          'base-200': '#3e4451',
          'base-300': '#545862',
          'base-content': '#abb2bf',
        },
        onelight: {
          primary: '#549e51',
          'primary-content': '#f9f9f9',
          secondary: '#a22ea1',
          'secondary-content': '#f9f9f9',
          accent: '#3b7cf0',
          'accent-content': '#f9f9f9',
          neutral: '#3a3c43',
          'neutral-content': '#f9f9f9',
          'base-100': '#f9f9f9',
          'base-200': '#cdcecf',
          'base-300': '#a2a4a6',
        },
      },
    ],
  },
  plugins: [
    daisyui,
    iconsPlugin({
      collections: getIconCollections([
        'carbon',
        'icon-park-twotone',
        'icon-park-outline',
      ]),
    }),
  ],
} satisfies Config;
