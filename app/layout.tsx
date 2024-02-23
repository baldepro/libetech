import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from './ui/Provider'
import clsx from 'clsx'
import { cn } from '@/utils/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Talibé BALDE',
  description: 'Application web portfolio de Talibé BALDE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  <body className={cn("bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen", inter.className)}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
