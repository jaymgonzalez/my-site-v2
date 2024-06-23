import Image from 'next/image'
import { TfiArrowTopRight } from 'react-icons/tfi'

const courses = [
  {
    title: 'BSc in Business and Finance',
    description: 'Undergraduate in Finance',
    technologies: ['Business', 'Math', 'Entrepreneurship'],
    githubLink: '',
    imageAlt: 'university_of_sussex_logo',
    imageSrc: '/assets/university_of_sussex_logo.jpeg',
  },
  {
    title: 'Machine Learning Specialization',
    description:
      'Fundamentals of ML and how to use these techniques to build real-world AI applications',
    technologies: ['ML', 'Tensorflow', 'Python'],
    githubLink: '',
    imageAlt: 'coursera_logo',
    imageSrc: '/assets/coursera_logo.jpeg',
  },
  {
    title: 'Ethereum Blockchain Bootcamp',
    description:
      'Ethereum-focused bootcamp teaching fundamentals of the blockchain and Solidity',
    technologies: ['Web 3', 'Ethereum', 'EVM'],
    githubLink: '',
    imageAlt: 'alchemy_university_logo',
    imageSrc: '/assets/alchemy_university_logo.jpeg',
  },
]

const Courses = () => {
  const basePath = process.env.TARGET_ENV === 'production' ? '' : '/my-site-v2'
  return (
    <>
      {courses.map((course, index) => (
        <li key={index} className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  href={course.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub course link (opens in a new tab)"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {course.title}
                    <span className="inline-block">
                      <TfiArrowTopRight
                        className="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px pl-1"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                {course.description}
              </p>

              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used:"
              >
                {course.technologies.map((tech, index) => (
                  <li key={index} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              alt={course.imageAlt}
              loading="lazy"
              unoptimized
              width="200"
              height="48"
              decoding="async"
              className="rounded-xl border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
              style={{ color: 'transparent' }}
              src={`${basePath}${course.imageSrc}`}
            />
          </div>
        </li>
      ))}
    </>
  )
}
const Education = () => {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Education
        </h2>
      </div>
      <div className="">
        <ul className="group/list">
          <Courses />
        </ul>
      </div>
      <div className="mt-12"></div>
    </section>
  )
}

export default Education
