'use client'

import { useEffect, useState } from 'react'
import Social from './socials'

const sections = ['about', 'experience', 'projects', 'education']

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = ''
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const sectionTop = element.offsetTop
          if (window.scrollY >= sectionTop - 25) {
            // Adjust the offset as needed
            currentSection = section
          }
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Jay M Gonzalez</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Senior DevOps Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            I make your systems work for your team and customers.
          </p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    className="group flex items-center py-3"
                    href={`#${section}`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                        activeSection === section
                          ? 'bg-slate-200 w-16'
                          : 'bg-slate-600 w-8'
                      }`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
                        activeSection === section
                          ? 'text-slate-200'
                          : 'text-slate-500'
                      }`}
                    >
                      {section}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Social />
      </header>
    </>
  )
}

export default Header
