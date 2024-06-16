import Image from 'next/image'
import { TfiArrowRight, TfiArrowTopRight } from 'react-icons/tfi'

const projects = [
  {
    title: 'Spotify Profile',
    description:
      'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    githubLink: 'https://github.com/bchiang7/spotify-profile',
    technologies: ['React', 'Express', 'Spotify API', 'Heroku'],
    imageAlt: 'Spotify Profile app homepage',
    imageSrc: '',
  },
  // Add more project objects as needed
]

const Project = () => (
  <>
    {projects.map((project, index) => (
      <li key={index} className="mb-12">
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div className="z-10 sm:order-2 sm:col-span-6">
            <h3>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href={project.githubLink}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub project link (opens in a new tab)"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {project.title}
                  <span className="inline-block">
                    <TfiArrowTopRight
                      className="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px pl-1"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </a>
            </h3>
            <p className="mt-2 text-sm leading-normal">{project.description}</p>

            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
              {project.technologies.map((tech, index) => (
                <li key={index} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Image
            alt={project.imageAlt}
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            style={{ color: 'transparent' }}
            src={project.imageSrc}
          />
        </div>
      </li>
    ))}
  </>
)

const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div className="">
        <ul className="group/list">
          <Project />
        </ul>
      </div>
      <div className="mt-12">
        <a
          className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
          aria-label="View Full Project Archive"
          href="/archive"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Project{' '}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Archive
              </span>
              <TfiArrowRight
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none pl-1"
                aria-hidden="true"
              />
            </span>
          </span>
        </a>
      </div>
    </section>
  )
}

export default Projects
