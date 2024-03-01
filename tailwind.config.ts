import type { Config } from 'tailwindcss'

export const colors = {
  white: '#e2e8f0',
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
    colors: colors,
  },
}

export default config
