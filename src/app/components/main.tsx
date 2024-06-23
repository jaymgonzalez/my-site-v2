import About from './about'
import Education from './education'
import Experience from './experience'
import Footer from './footer'
import Projects from './projects'

const Main = () => {
  return (
    <main className="content pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </main>
  )
}

export default Main
