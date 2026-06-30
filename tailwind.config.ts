import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        gold: '#C9A84C',
        parchment: '#F5F3EE',
        slate: '#4A5568',
        midgrey: '#8A94A8',
        deepink: '#1A1D26',
        goldlight: '#E8C97A',
        golddark: '#9A7A2E',
      },
      fontFamily: {
  sans: ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans],
  mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],

      },
      backgroundImage: {
        'grid-motif': `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.5' opacity='0.06'%3E%3Cline x1='0' y1='0' x2='64' y2='0'/%3E%3Cline x1='0' y1='16' x2='64' y2='16'/%3E%3Cline x1='0' y1='32' x2='64' y2='32'/%3E%3Cline x1='0' y1='48' x2='64' y2='48'/%3E%3Cline x1='0' y1='64' x2='64' y2='64'/%3E%3Cline x1='0' y1='0' x2='0' y2='64'/%3E%3Cline x1='16' y1='0' x2='16' y2='64'/%3E%3Cline x1='32' y1='0' x2='32' y2='64'/%3E%3Cline x1='48' y1='0' x2='48' y2='64'/%3E%3Cline x1='64' y1='0' x2='64' y2='64'/%3E%3C/g%3E%3C/svg%3E")`,
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
