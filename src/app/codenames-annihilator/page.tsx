import caLanding from '~/public/ca/landing.png'
import caGenerator from '~/public/ca/generator.png'
import caFlashcards from '~/public/ca/flashcards.png'
import {
  ProjectShowcase,
  ProjectShowcaseHeader,
  ProjectShowcaseImage,
  ProjectShowcaseInfoSection,
} from '@components/project-showcase'
import { urls } from '@consts/urls.consts'

export default function CodenamesAnnihilatorPage(): React.ReactElement {
  const stack = ['Next.js', 'Typescript', 'Tailwind CSS', 'Drizzle']
  const hosting = ['Vercel', 'Turso']

  return (
    <ProjectShowcase>
      <ProjectShowcaseHeader
        title="Codenames Annihilator"
        githubUrl={urls.ca.github}
        liveUrl={urls.ca.live}
        stack={stack}
        hosting={hosting}
      >
        <p>
          Codenames Annihilator started as a joke idea for a website, which
          would be able to create perfect clue words for Codenames (with some
          help from ChatGPT). It quickly evolved into my favorite side project
          so far, and was my playground for learning RSC along Next.js&apos; app
          router.
        </p>
      </ProjectShowcaseHeader>

      <ProjectShowcaseImage
        priority
        src={caLanding}
        alt="Image of Codenames Annihilator landing page"
      />

      <ProjectShowcaseInfoSection header="Goals">
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
          clues, I didn&apos;t want to risk breaking the production deployment,
          just because something would behave differently on my local machine
          then in production.
        </p>
        <p>
          Because I was using GitHub actions for deployment, I was able to
          create a separate workflow for when a pull request was opened, that
          created a preview build using a separate database instance. It also
          automatically run any schema migrations, allowing me to ensure that no
          data would be lost between deployments.
        </p>
      </ProjectShowcaseInfoSection>

      <ProjectShowcaseImage
        src={caGenerator}
        alt="Image of Codenames Annihilator generator page"
      />

      <ProjectShowcaseImage
        src={caFlashcards}
        alt="Image of Codenames Annihilator flashcards page"
      />

      <ProjectShowcaseInfoSection header="Challenges">
        <p>
          The OpenAI API isn&apos;t the cheapest one. I had to somehow limit the
          per user usage of the clues generator, while also keeping the friction
          of using the app as low as possible.
        </p>
        <p>
          My first idea was to use a random words API instead of the
          OpenAi&apos;s one to generate random clues for non signed-in users.
          These would then be saved to a cookie, allowing the user to experience
          the flow of the app without the need of signing up. But I quickly
          realized that this would require me to double the amount of code
          I&apos;d have to maintain and create for new features, so I gave up on
          this idea.
        </p>
        <p>
          What I ended up doing was creating <i>ghost users</i> - users that are
          created automatically when a non signed-in user generates clues for
          the first time. These users would still get random words back, but
          they&apos;d be stored in the database alongside normal users, just
          with a different flag set. This allowed me to reuse the same code for
          the generator and flashcards, while also keeping the cost of the
          OpenAI API in check.
        </p>
      </ProjectShowcaseInfoSection>
    </ProjectShowcase>
  )
}
