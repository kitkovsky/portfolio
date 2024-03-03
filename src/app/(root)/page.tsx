import { AboutMe } from './about-me'
import { Projects } from './projects'
import { GetInTouch } from './get-in-touch'

export default function HomePage(): React.ReactElement {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-24">
      <div className="mb-8">
        <h1 className="text-5xl font-bold">Hello there!</h1>
        <h1 className="text-5xl text-teal-700">I&apos;m Oliwer Kitkowski.</h1>
      </div>

      <AboutMe />
      <Projects />
      <GetInTouch />
    </div>
  )
}
