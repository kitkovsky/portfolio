import Link from 'next/link'
import {
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

import { type HeroIcon } from '@/app/types'

export const NavBar = (): React.ReactElement => {
  return (
    <div className="sticky top-0 flex h-dvh flex-col items-center justify-between border border-y-0 border-l-0 border-teal-950 p-4">
      <Link href="/" className="font-bold">
        OK
      </Link>

      <nav className="my-auto flex flex-col gap-3">
        {navButtons.map(({ href, Icon }) => (
          <Link
            href={href}
            key={href}
            className="flex h-10 w-10 items-center justify-center rounded text-white/80 transition-all hover:bg-teal-900 hover:text-white"
          >
            <Icon className="h-6 w-6" />
          </Link>
        ))}
      </nav>
    </div>
  )
}

const navButtons: { label: string; href: string; Icon: HeroIcon }[] = [
  { label: 'About', href: '#about', Icon: UserIcon },
  { label: 'Projects', href: '#projects', Icon: BriefcaseIcon },
  { label: 'Contact', href: '#contact', Icon: EnvelopeIcon },
]
