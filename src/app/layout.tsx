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
          'flex min-h-dvh bg-black font-mono text-white selection:bg-white selection:text-black',
        )}
      >
        <StarsBG />
        <NavBar className="z-10" />
        <AboutMeColumn className="z-10" />

        <div className="z-10 w-full gap-10 overflow-y-scroll px-10 py-20">
          {children}
        </div>
      </body>
    </html>
  )
}

const StarsBG = (): React.ReactElement => (
  <>
    <div className="stars pointer-events-none absolute left-0 top-0 h-px w-px opacity-15" />
    <div className="stars-2 pointer-events-none absolute left-0 top-0 h-0.5 w-0.5 opacity-15" />
  </>
)
