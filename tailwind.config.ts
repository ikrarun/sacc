import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        main:'#fff1e1',
        accent:'#d2601a',
        secondary:'#1d3c45'
      }
    },
  },
  plugins: [],
}
export default config
