import Image from 'next/image'
import { TfiArrowRight, TfiArrowTopRight } from 'react-icons/tfi'
import Link from 'next/link'

const projects = [
  {
    title: 'Generate NFTs',
    description:
      'dApp built from the ground up as the final exercise for the Ethereum Bootcamp. It allow users to upload images/gifs, add metadata for personalization, and it generates a custom NFTs. It consist of a contract deployed in Polygon blockhain that stores the image in IPFS, a front end built with React and a serverless infrastructure deployed in Github Pages and CICD usng GitHub Actions.',
    githubLink: 'https://jaymgonzalez.github.io/generatenfts/',
    technologies: ['React', 'Web3', 'Smart Contracts', 'Serverless'],
    imageAlt: 'Generate NFTs dApp homepage',
    imageSrc: `/assets/generatenfts.webp`,
  },
  {
    title: 'Robo Recruiter',
    description:
      'AI SaaS developed with React, Flask and OpenAI API. It generates a personalize CV based on a current CV and the job the candidate wants to apply for. It gathers data from the job description, finding the right words and tone of voice to maximize the chances of being selected and it generates the output using a CV template to build the CV in PDF.',
    githubLink: 'https://jaymgonzalez.github.io/generatenfts/',
    technologies: ['AI', 'React', 'Flask', 'SaaS'],
    imageAlt: 'Robo Recruiter SaaS profile page',
    imageSrc: `/assets/roborecruiter.webp`,
  },
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
            src={`/my-site-v2${project.imageSrc}`}
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
        <Link
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
        </Link>
      </div>
    </section>
  )
}

export default Projects
