import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    my_theme: {
      colors: {
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          450: 'var(--color-primary-450)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        gray: {
          0: 'var(--color-gray-000)',
          50: 'var(--color-gray-050)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        bluegray: {
          100: 'var(--color-bluegray-100)',
          200: 'var(--color-bluegray-200)',
          300: 'var(--color-bluegray-300)',
          400: 'var(--color-bluegray-400)',
          500: 'var(--color-bluegray-500)',
          600: 'var(--color-bluegray-600)',
          700: 'var(--color-bluegray-700)',
          800: 'var(--color-bluegray-800)',
          900: 'var(--color-bluegray-900)',
        },
      },
    },
    extend: {
      textColor: {
        'text-color': 'var(--color-text)',
        'dimmed-text-color': 'var(--color-text-dimmed)',
      },
      backgroundColor: {
        'highlight-color': 'var(--color-background-highlight)',
        'background-color': 'var(--color-background)',
        'header-color':
          'color-mix(in srgb, var(--color-primary-500) 30%, transparent)',
        'sidebar-color': 'var(--color-sidebar-background)',
      },
      borderColor: {
        'header-border-color':
          'color-mix(in srgb, var(--color-primary-500) 45%, transparent)',
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
