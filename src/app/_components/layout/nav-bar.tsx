'use client'

import { useState, type Dispatch, type SetStateAction } from 'react'
import {
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Link } from '@components/ui/link'
import { Dialog, DialogContent, DialogTrigger } from '@components/ui/dialog'
import { type HeroIcon } from '@/app/types'
import { cn } from '@utils/cn.utils'

export interface NavBarProps {
  className?: string
}

export const NavBar = (props: NavBarProps): React.ReactElement => {
  const { className } = props

  const [mobileNavVisible, setMobileNavVisible] = useState(false)

  return (
    <div
      className={cn(
        'sticky top-0 flex items-center justify-between border border-x-0 border-t-0 border-teal-950 p-4 backdrop-blur-lg sm:h-dvh sm:w-fit sm:flex-col sm:border-y-0 sm:border-r sm:backdrop-blur-none',
        { 'h-[57px] border-b-0 backdrop-blur-none': mobileNavVisible },
        className,
      )}
    >
      <Link
        href="/"
        className={cn('font-bold', { hidden: mobileNavVisible })}
        variant="custom"
      >
        OK
      </Link>

      <Dialog open={mobileNavVisible} onOpenChange={setMobileNavVisible}>
        <DialogTrigger asChild>
          <button
            className={cn('sm:hidden', { hidden: mobileNavVisible })}
            onClick={() => setMobileNavVisible(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </DialogTrigger>

        <DialogContent
          className="p-4 backdrop-blur-lg"
          preventOutsideEvents
          fullScreen
        >
          <MobileNav setVisible={setMobileNavVisible} />
        </DialogContent>
      </Dialog>

      <DesktopNav />
    </div>
  )
}

const DesktopNav = (): React.ReactElement => (
  <nav className="my-auto hidden flex-col gap-3 sm:flex">
    {navButtons.map(({ href, Icon }) => (
      <Link
        href={href}
        key={href}
        className="flex h-10 w-10 items-center justify-center rounded text-white/80 transition-all hover:bg-teal-900 hover:text-white"
        variant="custom"
      >
        <Icon className="h-6 w-6" />
      </Link>
    ))}
  </nav>
)

const MobileNav = ({
  setVisible,
}: {
  setVisible: Dispatch<SetStateAction<boolean>>
}): React.ReactElement => (
  <div className="flex h-full flex-col">
    <div className="flex items-center justify-between">
      <Link
        href="/"
        className="font-bold"
        variant="custom"
        onClick={() => setVisible(false)}
      >
        OK
      </Link>
      <button onClick={() => setVisible(false)}>
        <XMarkIcon className="h-6 w-6" />
      </button>
    </div>

    <nav className="my-auto flex flex-col gap-7 duration-200 animate-in fade-in-0 zoom-in-95">
      {navButtons.map(({ label, href, Icon }) => (
        <Link
          href={href}
          key={href}
          className="flex items-center gap-3"
          variant="custom"
          onClick={() => setVisible(false)}
        >
          <Icon className="h-6 w-6" />
          {label}
        </Link>
      ))}
    </nav>
  </div>
)

const navButtons: { label: string; href: string; Icon: HeroIcon }[] = [
  { label: 'About', href: '/#about', Icon: UserIcon },
  { label: 'Projects', href: '/#projects', Icon: BriefcaseIcon },
  { label: 'Contact', href: '/#contact', Icon: EnvelopeIcon },
]
