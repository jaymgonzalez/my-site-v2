import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jay M Gonzalez - Portfilio Site',
  description: 'My Portfolio Site.',
}

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
