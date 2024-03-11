import { CheckIcon } from '@heroicons/react/16/solid'

export const Tools = (): React.ReactElement => {
  const toolsSections: { title: string; tools: string[] }[] = [
    {
      title: 'Programming languages',
      tools: ['JavaScript', 'TypeScript', 'Python', 'Ruby'],
    },
    {
      title: 'Frameworks & libraries',
      tools: [
        'React',
        'Next.js',
        'Astro',
        'Node.js',
        'Tailwind CSS',
        'styled-components',
        'GraphQL',
        'Apollo Client',
        'DrizzleORM',
        'Vitest',
        'Jest',
        'SQLAlchemy',
        'Strawberry GraphQL',
        'Ruby on Rails',
      ],
    },
    {
      title: 'Software & applications',
      tools: ['Docker', 'Kubernetes', 'Git', 'Figma'],
    },
    {
      title: 'Third party services',
      tools: [
        'Vercel',
        'Google Cloud Platform',
        'Turso',
        'PlanetScale',
        'PostHog',
      ],
    },
  ]

  return (
    <div id="tools" className="scroll-mt-28">
      <h2 className="mb-7 text-2xl font-semibold">Tools I use</h2>

      <div className="flex flex-col gap-12">
        {toolsSections.map(({ title, tools }) => (
          <div key={title}>
            <h3 className="mb-3 text-xl font-semibold">{title}</h3>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <div className="flex items-center gap-2" key={tool}>
                  <CheckIcon className="h-4 w-4" />
                  <span className="text-sm text-white-dim">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
