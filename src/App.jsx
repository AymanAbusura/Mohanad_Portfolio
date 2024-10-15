import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Certification, Works, Hero, Navbar, StarsCanvas, Tech, Footer, Top } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Certification />
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        <Top />
      </div>
    </BrowserRouter>
  )
}

export default App