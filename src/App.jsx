import { BrowserRouter } from 'react-router-dom';

import { About, Experience, Hero, Navbar, Skills, Works, Extracurriculars, Footer } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Extracurriculars />
        <Works />
        <Footer />
      </div>

    </BrowserRouter>

  )
}

export default App
