import {
  Tangerine,
  Josefin_Slab,
  Cinzel_Decorative,
  Cinzel,
} from 'next/font/google'

export const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const tangerine = Tangerine({ subsets: ['latin'], weight: ['700'] })

export const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400'],
})

export const cinzel = Cinzel({ subsets: ['latin'], weight: ['400'] })
