'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import { isClientSide, isProd } from '@utils/flags.utils'

if (isClientSide && isProd) {
  posthog.init(process.env['NEXT_PUBLIC_POSTHOG_KEY']!, {
    api_host: 'https://www.oliwerkitkowski.com/ingest',
    ui_host: 'https://eu.posthog.com',
  })
}

export const CSPostHogProvider = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement => (
  <PostHogProvider client={posthog}>{children}</PostHogProvider>
)
