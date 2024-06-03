import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        superior: "url('/imgs/textura-sup-2.jpg')",
        inferior: "url('/imgs/textura-inf-2.jpg')",
        medio: "url('/imgs/tim-mossholder.jpg)",
        texturabeige: "url('/imgs/stepan-sargsyan.jpg')",
        texturapink: "url('/imgs/janke.jpg')",
        texturagray: "url('/imgs/augustine-wong.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
