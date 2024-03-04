import {
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'

import { Link } from '@components/ui/link'
import { type HeroIcon } from '@/app/types'
import { cn } from '@utils/cn.utils'

export interface NavBarProps {
  className?: string
}

export const NavBar = (props: NavBarProps): React.ReactElement => {
  const { className } = props

  return (
    <div
      className={cn(
        'sticky top-0 flex items-center justify-between border border-x-0 border-t-0 border-teal-950 p-4 backdrop-blur-lg sm:h-dvh sm:w-fit sm:flex-col sm:border-y-0 sm:border-r sm:backdrop-blur-none',
        className,
      )}
    >
      <Link href="/" className="font-bold" variant="custom">
        OK
      </Link>

      <button className="sm:hidden">
        <Bars3Icon className="h-6 w-6" />
      </button>

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
    </div>
  )
}

const navButtons: { label: string; href: string; Icon: HeroIcon }[] = [
  { label: 'About', href: '#about', Icon: UserIcon },
  { label: 'Projects', href: '#projects', Icon: BriefcaseIcon },
  { label: 'Contact', href: '#contact', Icon: EnvelopeIcon },
]
