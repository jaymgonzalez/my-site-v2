'use client'

import Link from 'next/link'
import { TfiArrowLeft, TfiArrowTopRight } from 'react-icons/tfi'
import { useQuery } from 'react-query'
import axios from 'axios'
import { FaGithub, FaJs, FaPython } from 'react-icons/fa'
import {
  SiCss3,
  SiHtml5,
  SiJupyter,
  SiSolidity,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { IconType } from 'react-icons'
import { GiMustache } from 'react-icons/gi'

interface LanguageIcons {
  JavaScript: IconType
  Python: IconType
  TypeScript: IconType
  'Jupyter Notebook': IconType
  Solidity: IconType
  Vue: IconType
  HTML: IconType
  CSS: IconType
  Mustache: IconType
}

const languageIcons: LanguageIcons = {
  JavaScript: FaJs,
  Python: FaPython,
  TypeScript: SiTypescript,
  'Jupyter Notebook': SiJupyter,
  Solidity: SiSolidity,
  Vue: SiVuedotjs,
  HTML: SiHtml5,
  CSS: SiCss3,
  Mustache: GiMustache,
}

interface LanguageIconProps {
  language: keyof typeof languageIcons
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ language }) => {
  const Icon: IconType | undefined = languageIcons[language]

  return <>{Icon ? <Icon className="h-6 w-6" /> : <span>{language}</span>}</>
}

interface Repo {
  id: number
  name: string
  owner: {
    login: string
  }
  homepage: string
  language: keyof typeof languageIcons
  html_url: string
  created_at: string
  topics: string[]
}

const fetchRepos = async (): Promise<Repo[]> => {
  const { data } = await axios.get(
    'https://api.github.com/users/jaymgonzalez/repos?sort=created&per_page=100'
  )
  return data
}

const Archive: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<Repo[], Error>(
    'repos',
    fetchRepos
  )

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>

  return (
    <>
      <div className="lg:py-24">
        <Link
          href="/"
          className="group font-bold mb-2 inline-flex items-center leading-tight text-teal-300"
        >
          <TfiArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2 pl-1 translate-y-0.5" />
          Jay M Gonzalez
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table id="content" className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                Project
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Topics
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((repo: Repo) => (
              <tr
                key={repo.id}
                className="border-b border-slate-300/10 last:border-none"
              >
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">
                    {new Date(repo.created_at).getFullYear()}
                  </div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base"
                        href={repo.homepage || repo.html_url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${repo.name} (opens in a new tab)`}
                      >
                        <span>{repo.name}</span>
                        <span className="inline-block">
                          <TfiArrowTopRight
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px pl-1"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="hidden sm:block">{repo.name}</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <div className="translate-y-px whitespace-nowrap relative group">
                    <LanguageIcon language={repo.language} />
                    <span className="pointer-events-none absolute -top-7 opacity-0 transition-opacity group-hover:opacity-100 group-hover:flex">
                      {repo.language}
                    </span>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    {repo.topics.map((topic: string) => (
                      <li key={topic} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {topic}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      {repo.homepage ? (
                        <a
                          className="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 group/link"
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${repo.homepage} (opens in a new tab)`}
                        >
                          <span>{repo.homepage}</span>
                          <TfiArrowTopRight
                            className="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px pl-1"
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        <a
                          className="flex items-center text-sm text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${repo.html_url} (opens in a new tab)`}
                        >
                          <span>GitHub</span>
                          <FaGithub
                            className="ml-1.5 h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          />
                        </a>
                      )}
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Archive
