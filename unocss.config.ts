import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { useTheme } from './src/composables/theme'

const { colors, breakpoints } = useTheme()
export default defineConfig({
  // shortcuts: [
  //   ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  //   ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  // ],
  theme: {
    colors,
    breakpoints,
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Roboto',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
