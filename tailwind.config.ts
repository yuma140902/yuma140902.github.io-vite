import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';
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
        'b16-tm': {
          0: 'var(--color-b16-00)',
          1: 'var(--color-b16-01)',
          2: 'var(--color-b16-02)',
          3: 'var(--color-b16-03)',
          4: 'var(--color-b16-04)',
          5: 'var(--color-b16-05)',
          6: 'var(--color-b16-06)',
          7: 'var(--color-b16-07)',
          8: 'var(--color-b16-08)',
          9: 'var(--color-b16-09)',
          10: 'var(--color-b16-10)',
          11: 'var(--color-b16-11)',
          12: 'var(--color-b16-12)',
          13: 'var(--color-b16-13)',
          14: 'var(--color-b16-14)',
          15: 'var(--color-b16-15)',
        },
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
          150: 'var(--color-base-150)',
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
          secondary: '#61afef',
          'secondary-content': '#282c34',
          accent: '#c678dd',
          'accent-content': '#282c34',
          neutral: '#abb2bf',
          'neutral-content': '#282c34',
          'base-100': '#282c34',
          'base-150': '#353b45',
          'base-200': '#3e4451',
          'base-300': '#545862',
          'base-content': '#abb2bf',
        },
      },
      {
        onelight: {
          primary: '#50a14f',
          'primary-content': '#fafafa',
          secondary: '#4078f2',
          'secondary-content': '#fafafa',
          accent: '#a626a4',
          'accent-content': '#fafafa',
          neutral: '#3a3c43',
          'neutral-content': '#fafafa',
          'base-100': '#fafafa',
          'base-150': '#f0f0f1',
          'base-200': '#e5e5e6',
          'base-300': '#a0a1a7',
          'base-content': '#3a3c43',
        },
      },
      {
        monokai: {
          primary: '#a6e22e',
          'primary-content': '#f8f8f2',
          secondary: '#66d9ef',
          'secondary-content': '#f8f8f2',
          accent: '#ae81ff',
          'accent-content': '#f8f8f2',
          neutral: '#75715e',
          'neutral-content': '#f8f8f2',
          'base-100': '#272822',
          'base-150': '#383830',
          'base-200': '#49483e',
          'base-300': '#75715e',
          'base-content': '#f8f8f2',
        },
      },
    ],
  },
  plugins: [
    daisyui,
    iconsPlugin({
      collections: getIconCollections([
        'carbon',
        'simple-icons',
        'icon-park-twotone',
        'icon-park-outline',
      ]),
    }),
    typography,
  ],
} satisfies Config;
