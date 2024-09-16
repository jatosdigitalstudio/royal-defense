import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const custom = localFont({src : '../../styles/Supermolot.ttf'})

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
  })
 