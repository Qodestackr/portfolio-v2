import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Main.Layout'

import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Testimonials from "./components/Testimonials";
import Contact from './components/Contact';
import Blog from './components/Blog/Blog'
import PDFViewer from './PDFViewer';


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

      <PDFViewer />
    </Layout>
  )
}

export default App