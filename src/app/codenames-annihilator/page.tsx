import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

import { Link } from '@components/ui/link'
import { urls } from '@consts/urls.consts'
import caLanding from '~/public/ca/landing.png'
import caGenerator from '~/public/ca/generator.png'
import caFlashcards from '~/public/ca/flashcards.png'

export default function CodenamesAnnihilatorPage(): React.ReactElement {
  const stack = ['Next.js', 'Typescript', 'Tailwind CSS', 'Drizzle']
  const hosting = ['Vercel', 'Turso']

  return (
    <div className="flex flex-col gap-9">
      <div className="mx-auto max-w-3xl">
        <Link
          variant="custom"
          href="/"
          className="text-white-dim transition-all hover:text-white"
        >
          <ArrowLeftIcon className="mb-6 h-6 w-6" />
        </Link>

        <h1 className="mb-3 text-5xl font-semibold">Codenames Annihilator</h1>

        <div className="mb-7 flex gap-3">
          <Link
            variant="default"
            href={urls.ca.github}
            className="flex w-fit items-center gap-1 rounded-md px-2 py-1 text-sm font-bold"
            target="_blank"
          >
            <CodeBracketIcon className="mr-1 h-5 w-5" />
            GitHub
          </Link>
          <Link
            variant="default"
            href={urls.ca.live}
            className="flex w-fit items-center gap-1 rounded-md px-2 py-1 text-sm font-bold"
            target="_blank"
          >
            <GlobeAltIcon className="mr-1 h-5 w-5" />
            Live
          </Link>
        </div>

        <div className="flex flex-col gap-9">
          <p className="text-white-dim">
            Codenames Annihilator started as a joke idea for a website, which
            would be able to create perfect clue words for Codenames (with some
            help from ChatGPT). It quickly evolved into my favorite side project
            so far, and was my playground for learning RSC along Next.js&apos;
            app router.
          </p>

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

      <div className="mx-auto max-w-5xl">
        <Image
          priority
          src={caLanding}
          className="rounded-md border-2 border-teal-700"
          alt="Image of Codenames Annihilator landing page"
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-3xl font-semibold">Goals</h3>

        <div className="flex flex-col gap-3 text-white-dim">
          <p>
            When designing the app I knew I wanted to include these 3 major
            features:
          </p>
          <ul className="ml-6 list-disc">
            <li>clues generation using ChatGPT&apos;s API</li>
            <li>user authentication to save generated clues</li>
            <li>
              ability to practice remembering past clues, just like with
              flashcards
            </li>
          </ul>
          <p>
            What was also important to me, was to have a separate preview
            environment as soon as possible. Since I knew I&apos;d actually show
            this website to other people and encourage them to generate some
            clues, I didn&apos;t want to risk breaking the production
            deployment, just because something would behave differently on my
            local machine then in production.
          </p>
          <p>
            Because I was using GitHub actions for deployment, I was able to
            create a separate workflow for when a pull request was opened, that
            created a preview build using a separate database instance. It also
            automatically run any schema migrations, allowing me to ensure that
            no data would be lost between deployments.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <Image
          src={caGenerator}
          className="rounded-md border-2 border-teal-700"
          alt="Image of Codenames Annihilator generator page"
        />
      </div>

      <div className="mx-auto max-w-5xl">
        <Image
          src={caFlashcards}
          className="rounded-md border-2 border-teal-700"
          alt="Image of Codenames Annihilator flashcards page"
        />
      </div>

      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-3xl font-semibold">Challenges</h3>

        <div className="flex flex-col gap-3 text-white-dim">
          <p>
            The OpenAI API isn&apos;t the cheapest one. I had to somehow limit
            the per user usage of the clues generator, while also keeping the
            friction of using the app as low as possible.
          </p>
          <p>
            My first idea was to use a random words API instead of the
            OpenAi&apos;s one to generate random clues for non signed-in users.
            These would then be saved to a cookie, allowing the user to
            experience the flow of the app without the need of signing up. But I
            quickly realized that this would require me to double the amount of
            code I&apos;d have to maintain and create for new features, so I
            gave up on this idea.
          </p>
          <p>
            What I ended up doing was creating <i>ghost users</i> - users that
            are created automatically when a non signed-in user generates clues
            for the first time. These users would still get random words back,
            but they&apos;d be stored in the database alongside normal users,
            just with a different flag set. This allowed me to reuse the same
            code for the generator and flashcards, while also keeping the cost
            of the OpenAI API in check.
          </p>
        </div>
      </div>
    </div>
  )
}
