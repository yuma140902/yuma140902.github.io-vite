import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundColor: {
        'header-color':
          'color-mix(in srgb, var(--color-primary-500) 30%, transparent)',
      },
      borderColor: {
        'header-border-color':
          'color-mix(in srgb, var(--color-primary-500) 45%, transparent)',
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
