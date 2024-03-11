import { AboutMe } from './about-me'
import { Tools } from './tools'
import { Projects } from './projects'
import { GetInTouch } from './get-in-touch'

export default function HomePage(): React.ReactElement {
  return (
    <div className="sm:gap-18 mx-auto flex max-w-3xl flex-col gap-12 lg:gap-24">
      <div className="text-3xl sm:mb-8 sm:text-5xl">
        <h1 className="font-bold">Hello there!</h1>
        <h1 className="text-teal-700">I&apos;m Oliwer Kitkowski.</h1>
      </div>

      <AboutMe />
      <Tools />
      <Projects />
      <GetInTouch />
    </div>
  )
}
