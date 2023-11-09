import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Main.Layout'

import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Testimonials from "./components/Testimonials";
import Contact from './components/Contact';
import Blog from './components/Blog/Blog'

import resumeURL from './resume.pdf'

function App() {
  return (
    <Layout>
      <Intro />
      <About />
      <Testimonials />
      <Projects />
      <Skills />
      {/* <Blog /> */}
      <Contact />

      <object data={resumeURL} type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href="https://drive.google.com/file/d/188mesbieUkxT4rvn-g7dwz3jLQvY_TBT/view">to the PDF!</a></p>
        Hello, 
      </object>

    </Layout>
  )
}

export default App