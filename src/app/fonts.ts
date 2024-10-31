import { Lexend, Fredoka, Poppins } from "next/font/google"

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
export const titleFontFamily = Poppins({
   weight: '700',
   subsets: ['latin'],
   variable: '--title-font-family'
}
)