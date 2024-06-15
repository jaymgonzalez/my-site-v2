import Image from 'next/image'
import { TfiArrowRight } from 'react-icons/tfi'

const projects = [
  {
    title: 'Spotify',
    subtitle: 'Profile',
    link: 'https://spotify-profile.herokuapp.com/',
    description:
      'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    githubLink: 'https://github.com/bchiang7/spotify-profile',
    stars: '625',
    technologies: ['React', 'Express', 'Spotify API', 'Heroku'],
    imageAlt: 'Spotify Profile app homepage',
    imageSrcSet:
      '/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=256&q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=640&q=75 2x',
    imageSrc:
      '/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=640&q=75',
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
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {project.title}
                  <span className="inline-block">
                    {project.subtitle}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </h3>
            <p className="mt-2 text-sm leading-normal">{project.description}</p>
            <a
              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
              href={project.githubLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.stars} stars on GitHub (opens in a new tab)`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-3 w-3"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{project.stars}</span>
            </a>
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
