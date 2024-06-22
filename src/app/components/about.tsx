const About = () => (
  <section
    id="about"
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="About me"
  >
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        About
      </h2>
    </div>
    <div>
      <p className="mb-4">
        Back in 2013 I developed my fist website for a small{' '}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://agenciadowntown.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="advertising agency (opens in a new tab)"
        >
          advertising agency.{' '}
        </a>
        Since then, I’ve been helping{' '}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://bupa.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="big insurance companies (opens in a new tab)"
        >
          big insurance companies{' '}
        </a>
        implement their analytic software, work for several{' '}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.nissan.com"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="huge corporation (opens in a new tab)"
        >
          high street{' '}
        </a>
        brands on how to improve their online sales, worked for a{' '}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.decibel.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="start-up (opens in a new tab)"
        >
          start-up{' '}
        </a>
        that was aquired by a{' '}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.medallia.com/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="big corporation (opens in a new tab)"
        >
          big corporation,{' '}
        </a>
        learned how to build software, have contributed to{' '}
        <a
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://openbb.co/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="open source (opens in a new tab)"
        >
          open source,{' '}
        </a>
        and created my own company to offer my services as a freelancer.
      </p>
      <p className="mb-4">
        My main focus these days is building pipelines and automations. I work
        on infrastructure and backend systems that help deliver seamless user
        experiences. I most enjoy building software in the sweet spot where user
        experience and engineering meet — things that are useful and easy to use
        but are also built well under the hood. In my free time, I like to play
        with AI, build side projects and, dream about becoming a successfull
        SaaS founder.
      </p>
      <p>
        When I’m not at the computer, I’m working out, reading, walking in
        nature, dancing bachata or eating out with my girlfriend.
      </p>
    </div>
  </section>
)

export default About
