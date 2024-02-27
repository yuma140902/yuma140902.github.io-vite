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
        primary: 'var(--color-primary)',
        'primary-content': 'var(--color-primary-content)',
        secondary: 'var(--color-secondary)',
        'secondary-content': 'var(--color-secondary-content)',
        accent: 'var(--color-accent)',
        'accent-content': 'var(--color-accent-content)',
        neutral: 'var(--color-neutral)',
        'neutral-content': 'var(--color-neutral-content)',
        base: {
          100: 'var(--color-base-100)',
        },
        'base-content': 'var(--color-base-content)',
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
    themes: ['onedark', 'onelight'],
  },
  plugins: [
    daisyui,
    iconsPlugin({
      collections: getIconCollections(['carbon', 'icon-park-twotone']),
    }),
  ],
} satisfies Config;
