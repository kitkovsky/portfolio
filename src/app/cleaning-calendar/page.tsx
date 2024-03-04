import ccLanding from '~/public/cc/landing.png'
import {
  ProjectShowcase,
  ProjectShowcaseHeader,
  ProjectShowcaseImage,
  ProjectShowcaseInfoSection,
} from '@components/project-showcase'
import { urls } from '@consts/urls.consts'

export default function CleaningCalendarPage(): React.ReactElement {
  const stack = ['Astro', 'React', 'TypeScript', 'TailwindCSS']
  const hosting = ['Vercel', 'Turso']

  return (
    <ProjectShowcase>
      <ProjectShowcaseHeader
        title="Cleaning Calendar"
        githubUrl={urls.cc.github}
        liveUrl={urls.cc.live}
        stack={stack}
        hosting={hosting}
      >
        <p>
          Cleaning Calendar was created partially becuase I was looking for an
          excuse to learn Astro. I had this idea of creating a one page app that
          would display the next weekend&apos;s cleaning schedule, so that my
          siblings would finally know when it&apos;s their turn to clean the
          bathroom.
        </p>
      </ProjectShowcaseHeader>

      <ProjectShowcaseImage
        priority
        src={ccLanding}
        alt="Image of Cleaning Calendar landing page"
      />

      <ProjectShowcaseInfoSection header="Goals">
        <p>
          My biggest goal was to create an experience around the calendar, that
          would keep them engaged long enough to actually read the cleaning
          schedule. You see, their attention span is about 3 seconds, so I had
          to include some flashy animations to keep them interested. That&apos;s
          why the two gifs take up more space than the actual calendar.
        </p>
        <p>
          I also had to include a way to edit the schedule, in the likely
          scenario when one of them would still forget to clean their respective
          area, so I hooked up a little Turso database that stored the schedule
          order.
        </p>
      </ProjectShowcaseInfoSection>

      <ProjectShowcaseInfoSection header="Challenges">
        <p>
          Gifs are very heavy. You need to compress them multiple times to get
          them to a reasonably small size, but by then they look really bad.
          Don&apos;t use gifs on your website if you don&apos;t have to.
        </p>
      </ProjectShowcaseInfoSection>
    </ProjectShowcase>
  )
}
