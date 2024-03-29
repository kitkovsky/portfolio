import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { cn } from '@utils/cn.utils'
import { AboutMeColumn } from '@components/layout/about-me-column'
import { NavBar } from '@components/layout/nav-bar'
import { CSPostHogProvider } from './providers'
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
  const currentYear = new Date().getFullYear()

  return (
    <html lang="en-US" className="scroll-smooth">
      <CSPostHogProvider>
        <body
          className={cn(
            GeistMono.variable,
            'flex min-h-dvh flex-col bg-black font-mono text-white selection:bg-white selection:text-black sm:flex-row',
          )}
        >
          <StarsBG />
          <NavBar />
          <div className="flex w-full flex-col-reverse lg:flex-row">
            <AboutMeColumn />

            <div className="w-full gap-10 overflow-y-scroll px-4 py-6 sm:px-6 sm:py-10 lg:px-10 lg:py-20">
              {children}
              <footer className="mx-auto mt-10 max-w-3xl border-t border-teal-950 sm:mt-20">
                <p className="mt-3 text-sm text-white-dim">
                  Copyright &copy; {currentYear} Oliwer Kitkowski. All rights
                  reserved.
                </p>
              </footer>
            </div>
          </div>

          <SpeedInsights />
        </body>
      </CSPostHogProvider>
    </html>
  )
}

const StarsBG = (): React.ReactElement => (
  <>
    <div className="stars pointer-events-none fixed left-0 top-0 -z-10 h-px w-px opacity-15" />
    <div className="stars-2 pointer-events-none fixed left-0 top-0 -z-10 h-0.5 w-0.5 opacity-15" />
  </>
)
