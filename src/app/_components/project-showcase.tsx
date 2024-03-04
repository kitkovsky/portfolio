import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/20/solid'

import { Link } from '@components/ui/link'
import Image, { type StaticImageData } from 'next/image'
import type { PropsWithChildren } from 'react'

interface ProjectShowcaseProps {
  children: React.ReactNode
}

const ProjectShowcase = (props: ProjectShowcaseProps): React.ReactElement => {
  const { children } = props

  return <div className="flex flex-col gap-9">{children}</div>
}

interface ProjectShowcaseHeaderProps extends PropsWithChildren {
  title: string
  githubUrl: string
  liveUrl: string
  stack: string[]
  hosting: string[]
}

const ProjectShowcaseHeader = (
  props: ProjectShowcaseHeaderProps,
): React.ReactElement => {
  const { title, githubUrl, liveUrl, stack, hosting, children } = props

  return (
    <div className="mx-auto max-w-3xl">
      <div className="w-fit">
        <Link
          variant="custom"
          href="/"
          className="text-white-dim transition-all hover:text-white"
        >
          <ArrowLeftIcon className="mb-6 h-6 w-6" />
        </Link>
      </div>

      <h1 className="mb-3 text-5xl font-semibold">{title}</h1>

      <div className="mb-7 flex gap-3">
        <Link
          variant="default"
          href={githubUrl}
          className="flex w-fit items-center gap-1 rounded-md px-2 py-1 text-sm font-bold"
          target="_blank"
        >
          <CodeBracketIcon className="mr-1 h-5 w-5" />
          GitHub
        </Link>
        <Link
          variant="default"
          href={liveUrl}
          className="flex w-fit items-center gap-1 rounded-md px-2 py-1 text-sm font-bold"
          target="_blank"
        >
          <GlobeAltIcon className="mr-1 h-5 w-5" />
          Live
        </Link>
      </div>

      <div className="flex flex-col gap-9">
        <div className="text-white-dim">{children}</div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Stack</h3>
          <p className="text-white-dim">{stack.join(' · ')}</p>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">Infrastructure</h3>
          <p className="text-white-dim">{hosting.join(' · ')}</p>
        </div>
      </div>
    </div>
  )
}

interface ProjectShowcaseImageProps {
  priority?: boolean
  src: StaticImageData
  alt: string
}

const ProjectShowcaseImage = (
  props: ProjectShowcaseImageProps,
): React.ReactElement => {
  const { priority, src, alt } = props

  return (
    <div className="mx-auto max-w-5xl">
      <Image
        priority={priority}
        src={src}
        className="rounded-md border-2 border-teal-700"
        alt={alt}
      />
    </div>
  )
}

interface ProjectShowcaseInfoSectionProps {
  header: string
  children: React.ReactNode
}

const ProjectShowcaseInfoSection = (
  props: ProjectShowcaseInfoSectionProps,
): React.ReactElement => {
  const { header, children } = props

  return (
    <div className="mx-auto max-w-3xl">
      <h3 className="mb-4 text-3xl font-semibold">{header}</h3>
      <div className="flex flex-col gap-3 text-white-dim">{children}</div>
    </div>
  )
}

export {
  ProjectShowcase,
  ProjectShowcaseHeader,
  ProjectShowcaseImage,
  ProjectShowcaseInfoSection,
}
