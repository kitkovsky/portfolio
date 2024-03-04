import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  type IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

import { Link } from '@components/ui/link'
import myFace from '~/public/my-face.jpeg'
import { cn } from '@utils/cn.utils'

export interface AboutMeColumnProps {
  className?: string
}

export const AboutMeColumn = (
  props: AboutMeColumnProps,
): React.ReactElement => {
  const { className } = props

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-9 border border-x-0 border-teal-950 px-5 py-7 lg:sticky lg:top-0 lg:h-dvh lg:w-80 lg:min-w-80 lg:border-y-0 lg:border-r',
        className,
      )}
    >
      <Image
        src={myFace}
        className="rounded-full"
        alt="Picture of Oliwer Kitkowski"
        height={144}
        width={144}
      />

      <div className="text-center">
        <h3 className="text-lg font-bold">Oliwer Kitkowski</h3>
        <h4 className="text-white-dim">Web Developer</h4>
      </div>

      <div className="flex gap-4">
        {socialMediaLinks.map(({ href, icon }) => (
          <Link href={href} target="_blank" key={href} variant="custom">
            <FontAwesomeIcon
              icon={icon}
              className="mr-2 h-6 w-6 text-white-extra-dim transition-all hover:text-white"
            />
          </Link>
        ))}
      </div>

      <p className="text-balance text-center text-sm text-white-dim">
        I create modern, high-performance, and responsive websites using using
        the latest technologies.
      </p>

      <div className="mt-auto flex w-full flex-col gap-4">
        <Link href="cv.pdf" variant="outline" target="_blank">
          Download CV
        </Link>
        <Link href="#contact" variant="default">
          Get in touch
        </Link>
      </div>
    </div>
  )
}

const socialMediaLinks: {
  label: string
  href: string
  icon: IconDefinition
}[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/kitkovsky',
    icon: faGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oliwer-kitkowski',
    icon: faLinkedin,
  },
]
