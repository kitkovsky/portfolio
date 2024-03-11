import dsLanding from '~/public/ds/landing.png'
import {
  ProjectShowcase,
  ProjectShowcaseHeader,
  ProjectShowcaseImage,
  ProjectShowcaseInfoSection,
} from '@components/project-showcase'
import { urls } from '@consts/urls.consts'
import { Link } from '@components/ui/link'

export default function DatasportScraperPage(): React.ReactElement {
  const stack = ['Selenium', 'BeautifulSoup', 'Flask', 'SQLAlchemy', 'Docker']
  const hosting = ['Google Cloud Platform', 'Turso']

  return (
    <ProjectShowcase>
      <ProjectShowcaseHeader
        title="Datasport Scraper"
        githubUrl={urls.ds.github}
        stack={stack}
        hosting={hosting}
      >
        <p>
          Datasport Scraper was a project I started with the goal of learning
          more about GCP. I was curious about the process of deploying web apps
          to something different than Vercel, something with more granular
          control. So I came up with the idea of creating 2 python apps: a
          scraper that would run periodically using Cloud Run and scrape race
          results from{' '}
          <Link
            className="text-white underline"
            href="https://wyniki.datasport.pl"
            variant="custom"
            target="_blank"
          >
            wyniki.datasport.pl
          </Link>
          , and a web Flask app that would display the scraped data.
        </p>

        <p className="mt-4">
          <span className="font-semibold text-white">Update:</span> I had to
          take down the GCP deployment, while I&apos;m looking for a less
          expensive (free) alternative.
        </p>
      </ProjectShowcaseHeader>

      <ProjectShowcaseImage
        priority
        src={dsLanding}
        alt="Image of Datasport Scraper landing page"
      />

      <ProjectShowcaseInfoSection header="Goals">
        <p>
          Since I knew I wanted to create 2 separate apps, I decided to go with
          a monorepo structure for this project. Since both apps would need
          access to the database, I wanted a shared schema and SQLAlchemy models
          that could be used by both of them.
        </p>
        <p>
          Cloud Run offers an &quot;automagical&quot; deployment when you link
          your GitHub repo, that automatically builds a new image after every
          push - but I wanted to have full control of the deployment process.
          That&apos;s why I used separate GitHub workflows for each app, that
          used the GCP and Docker actions to build and upload an image for each
          pull requests.
        </p>
        <p>
          I also set up a cron job using GCP&apos;s Cloud Scheduler, that would
          run the scraper every day.
        </p>
      </ProjectShowcaseInfoSection>

      <ProjectShowcaseInfoSection header="Challenges">
        <p>
          GCP for small projects like this can be really expensive compared to
          other alternatives. Initially I used GCP&apos;s Cloud SQL PostgreSQL
          database, because why not, might as well test out their database
          solution. But hosting a traditional database on a dedicated machine
          was too pricey, especially when new services like Turso, PlanetScale,
          or Neon exist (that automatically scale down your machines to 0 when
          not in use), and offer free tiers with more than enough compute time.
        </p>
      </ProjectShowcaseInfoSection>
    </ProjectShowcase>
  )
}
