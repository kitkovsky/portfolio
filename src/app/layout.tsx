import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'

import { cn } from '@utils/cn.utils'
import { AboutMeColumn } from '@components/layout/about-me-column'
import { NavBar } from '@components/layout/nav-bar'
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
      <body
        className={cn(
          GeistMono.variable,
          'flex min-h-dvh bg-black font-mono text-white',
        )}
      >
        <StarsBG />
        <NavBar />
        <AboutMeColumn />

        <div className="p-10">{children}</div>
      </body>
    </html>
  )
}

const StarsBG = (): React.ReactElement => (
  <>
    <div className="stars pointer-events-none absolute left-0 top-0 h-px w-px opacity-10" />
    <div className="stars-2 pointer-events-none absolute left-0 top-0 h-0.5 w-0.5 opacity-10" />
  </>
)
