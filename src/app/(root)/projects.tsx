import Image, { type StaticImageData } from 'next/image'

import { Link } from '@components/ui/link'
import caLanding from '~/public/ca/landing.png'
import dsLanding from '~/public/ds/landing.png'
import ccLanding from '~/public/cc/landing.png'

export const Projects = (): React.ReactElement => (
  <div id="projects" className="scroll-mt-28">
    <h2 className="mb-7 text-2xl font-semibold">Personal projects</h2>

    <div className="group flex flex-col gap-5">
      {projects.map(({ title, href, img, description }) => (
        <Link
          className="flex gap-6 rounded border border-transparent p-4 transition-all hover:border-white/20 hover:bg-white/5 hover:!opacity-100 group-hover:opacity-50"
          href={href}
          key={title}
          variant="custom"
        >
          <Image
            src={img}
            alt={title}
            width="176"
            height="96"
            className="h-24 w-44 shrink-0 rounded border-2 border-teal-700"
          />

          <div className="flex flex-col gap-1">
            <h3>{title}</h3>
            <p className="text-sm text-white-dim">{description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
)

const projects: {
  title: string
  href: string
  img: StaticImageData
  description: string
}[] = [
  {
    title: 'Codenames Annihilator',
    href: '/codenames-annihilator',
    img: caLanding,
    description:
      "A joke-turned-serious project that helps you get better at the board game Codenames. The app allows you to input words that you've had a problem with connecting in previous games, and suggests ai-generated clues. These prompt-clue pairs can then be practised like flashcards.",
  },
  {
    title: 'Race results scraper',
    href: '/datasport-scraper',
    img: dsLanding,
    description:
      'A web scraper for wyniki.datasport.pl. My first foray into web scraping, this project was born out of the curiosity to see how unnecessarily complex deploying to Google Cloud Platform really is. To this day, this is my most expensive project in terms of hosting costs.',
  },
  {
    title: 'Cleaning calendar',
    href: '/cleaning-calendar',
    img: ccLanding,
    description:
      "Created out of the frustration of having to share a bathroom with my siblings, this app keeps track of whose turn it is to clean what part of the house. Extra care was put into making sure the website has an easy to remember URL, and an interface vaguely resembling TikTok's to keep them engaged long enough.",
  },
]
