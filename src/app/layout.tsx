import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'

import { cn } from '@utils/cn.utils'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Oliwer Kitkowski',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="en-US">
      <body className={cn(GeistMono.variable, 'bg-black font-mono text-white')}>
        {children}
      </body>
    </html>
  )
}
