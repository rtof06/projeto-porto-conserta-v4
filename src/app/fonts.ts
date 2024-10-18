import { Lexend, Fredoka, Francois_One } from "next/font/google"

export const mainFontFamily = Lexend({
   subsets: ['latin'],
   variable: '--main-font-family'
}
)
export const secFontFamily = Fredoka({
   subsets: ['latin'],
   variable: '--sec-font-family'
}
)
export const titleFontFamily = Francois_One({
   weight: '400',
   subsets: ['latin'],
   variable: '--title-font-family'
}
)