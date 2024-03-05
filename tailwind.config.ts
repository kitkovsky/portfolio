import type { Config } from 'tailwindcss'
import twColors from 'tailwindcss/colors'

export const colors = {
  white: '#e2e8f0',
  ['white-dim']: twColors.teal[600],
  ['white-extra-dim']: twColors.teal[700],
  black: '#111010',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      mono: ['var(--font-geist-mono)'],
    },
    extend: {
      colors,
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
