import { Manrope, Raleway } from "next/font/google"
import localFont from "next/font/local"

export const ralewayFont = Raleway({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
})

export const manropeFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
})

export const nauruzRedKedsFont = localFont({
  src: "nauryz-red-keds.ttf",
  variable: "--font-headline",
})
