import About from './about'
import Education from './education'
import Experience from './experience'
import Projects from './projects'

const Main = () => {
  return (
    <main className="content pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Projects />
      <Education />
    </main>
  )
}

export default Main
