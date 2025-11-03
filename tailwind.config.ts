import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          light: '#66BB6A',
          dark: '#388E3C',
        },
        secondary: {
          DEFAULT: '#FF8A65',
          light: '#FFAB91',
          dark: '#FF7043',
        },
        background: {
          DEFAULT: '#F7F8FC',
          white: '#FFFFFF',
        },
        text: {
          DEFAULT: '#333333',
          light: '#666666',
          lighter: '#999999',
        }
      },
      fontFamily: {
        sans: ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
      },
    },
  },
  plugins: [],
}
export default config
