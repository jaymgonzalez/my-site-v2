import { TfiArrowRight, TfiArrowTopRight } from 'react-icons/tfi'

const experiences = [
  {
    dateRange: '2024 — Present',
    title: 'DevOps Engineer',
    workType: 'Contract',
    company: 'Six Group',
    companyLink: 'https://www.six-group.com/',
    description: [
      'Develop CI/CD pipelines for managing the alerting within the CyberSecurity department',
      'Help the infrastructure team improving the way to manage their Elasticsearch infrastructure with Terraform and Gitlab',
      'Automate the migration of dashboards in Elastic from QA to Prod creating a custom script that handles backup, deletion and updates in both environments',
    ],
    relatedLinks: [],
    technologies: ['Gitlab', 'Terraform', 'Elasticsearch', 'Python'],
  },
  {
    dateRange: '2022 — 2024',
    title: 'AI Full Stack Engineer',
    company: 'Haymeh',
    workType: 'Freelance',
    companyLink: '',
    description: [
      "Developed a Full Stack AI app to generate CVs for each job application. It gathers data from the user CV, it scraps data from the Job Description and uses OPEN AI's API to generate a personalized CV to download in PDF",
      'Created sales automation for SME to personalize outreach efforts on LinkedIn. It works with a list of prospects, scrapes user profile and generates a personalize message',
      "Created several AI bots for clients with custom knowledge base and hooked with OPEN AI's API",
    ],
    relatedLinks: [],
    technologies: ['AI', 'Python', 'React', 'LLMs', 'AWS'],
  },
  {
    dateRange: '2020 — 2022',
    title: 'DevOps Engineer',
    workType: 'Full-time',
    company: 'Medallia',
    companyLink: 'https://www.medallia.com/',
    description: [
      'Responsible for monitoring more than 1000 servers with ELK across 5 regions while troubleshooting live issues to avoid customer down time and creating dashboards',
      'Participate in a cloud providers migration. From AWS to OCI - Update scripts, CI/CD pipelines, Terraform and Ansible code to work with the new provider while keeping the lights on and everything under tight project deadlines',
      'Run Terraform commands to get the infrastructure deployed - Create playbooks in Ansible to automate the installation and configuration of the necessary packages and orchestrating everything with Jenkins jobs to automate the whole process',
    ],
    relatedLinks: [],
    technologies: [
      'Jenkins',
      'AWS',
      'Ansible',
      'Terraform',
      'Kibana',
      'Monitoring',
      'Python',
    ],
  },
  {
    dateRange: '2019 — 2021',
    title: 'Solutions Engineer',
    workType: 'Full-time',
    company: 'Decibel',
    companyLink: 'https://www.decibel.com/',
    description: [
      'Provide customer facing technical implementation and configuration support ensuring timely on-boarding of new customers and improving current implementations',
      'Understand client requirements and communicate how we can solve their technical challenges, from high-level architecture to code implementation',
      'reate technical content to show clients how to implement specific use cases or best practices',
    ],
    relatedLinks: [],
    technologies: ['Javascript', 'AWS', 'Integrations', 'APIs'],
  },
]
const Experiences = () => (
  <>
    {experiences.map((exp, index) => (
      <li className="mb-12" key={index}>
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
              <div className="">
                <div className="text-slate-500">
                  {exp.workType && <span>{exp.workType}</span>}
                </div>
              </div>
            </h3>
            <ul className="list-disc">
              {exp.description.map((tech, index) => (
                <li key={index} className="">
                  <p className="mt-2 text-sm leading-normal">{tech}</p>
                </li>
              ))}
            </ul>
            {/* <ul className="mt-2 flex flex-wrap" aria-label="Related links">
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
            </ul> */}
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
          className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              View Full{' '}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                Résumé
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

export default Experience
