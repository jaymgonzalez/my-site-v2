import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'

export default function Home() {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Main />
      </div>
    </>
  )
}
