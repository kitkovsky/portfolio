import { type PropsWithChildren } from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

import { cn } from '@utils/cn.utils'

export interface LinkProps
  extends NextLinkProps,
    PropsWithChildren,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  variant: 'default' | 'outline'
  className?: string
}

const variantToClassName: Record<LinkProps['variant'], string> = {
  default: 'bg-white text-black hover:bg-white/85',
  outline: 'border border-white-dim hover:bg-white/5 hover:border-white/85',
}

export const Link = (props: LinkProps): React.ReactElement => {
  const { className, children, variant, ...rest } = props

  return (
    <NextLink
      {...rest}
      className={cn(
        'rounded px-5 py-2 text-center transition-all',
        variantToClassName[variant],
        className,
      )}
    >
      {children}
    </NextLink>
  )
}
