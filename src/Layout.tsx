import { App } from '@/components/app'
import { About } from '@/components/About'
import { Donate } from '@/components/Donate'
import { Hero } from '@/components/Hero'
import { Source } from '@/components/Source'
import { Footer } from '@/components/Footer'

function Layout() {
  return (
    <>
      <Donate />
      <Hero />
      <App />
      <About />
      <Source />
      <Footer />
    </>
  )
}

export default Layout
