import { FaLink } from 'react-icons/fa6'
import { TfiArrowTopRight } from 'react-icons/tfi'

const experiences = [
  {
    dateRange: 'July — Dec 2017',
    title: 'UI Engineer Co-op',
    company: 'Apple',
    companyLink: 'https://www.apple.com/apple-music/',
    description:
      'Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.',
    relatedLinks: [
      {
        text: 'MusicKit.js',
        link: 'https://developer.apple.com/documentation/musickitjs',
        icon: '<icon_1>',
      },
      {
        text: '9to5Mac',
        link: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/',
        icon: '<icon_2>',
      },
      {
        text: 'The Verge',
        link: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming',
        icon: '<icon_3>',
      },
    ],
    technologies: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
  },
  {
    dateRange: 'July — Dec 2017',
    title: 'UI Engineer Co-op',
    company: 'Apple',
    companyLink: 'https://www.apple.com/apple-music/',
    description:
      'Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.',
    relatedLinks: [
      {
        text: 'MusicKit.js',
        link: 'https://developer.apple.com/documentation/musickitjs',
        icon: '<icon_1>',
      },
      {
        text: '9to5Mac',
        link: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/',
        icon: '<icon_2>',
      },
      {
        text: 'The Verge',
        link: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming',
        icon: '<icon_3>',
      },
    ],
    technologies: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
  },
]
const Experiences = () => (
  <>
    {experiences.map((exp) => (
      <li className="mb-12" key={exp.title}>
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:drop-shadow-lg"></div>
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            aria-label={`${exp.dateRange}`}
          >
            {exp.dateRange}
          </header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <div>
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  href={exp.companyLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {`${exp.title} · `}
                    <span className="inline-block">
                      {exp.company}
                      <TfiArrowTopRight
                        className="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px pl-1"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </a>
              </div>
            </h3>
            <p className="mt-2 text-sm leading-normal">{exp.description}</p>
            <ul className="mt-2 flex flex-wrap" aria-label="Related links">
              {exp.relatedLinks &&
                exp.relatedLinks.map((link, index) => (
                  <li key={index} className="mr-4">
                    <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                      href={link.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${link.text} (opens in a new tab)`}
                    >
                      <FaLink className="mr-1 h-3 w-3" aria-hidden="true" />
                      <span>{link.text}</span>
                    </a>
                  </li>
                ))}
            </ul>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {exp.technologies.map((tech, index) => (
                <li key={index} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    ))}
  </>
)

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <ol>
        <Experiences />
      </ol>
      <div className="mt-12">
        <a
          className="inline-flex items-baseline leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full{' '}
            <span className="inline-block">
              Résumé
              <TfiArrowTopRight
                className="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px pl-1"
                aria-hidden="true"
              />
            </span>
          </span>
        </a>
      </div>
    </section>
  )
}

export default Experience
