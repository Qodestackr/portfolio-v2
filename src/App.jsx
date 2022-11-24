import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Main.Layout'

import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Testimonials from "./components/Testimonials";
import Contact from './components/Contact';
import Test from './components/Test'


function App() {
  return (
    <Layout>
      {/* <Test _as='h1' text='Testing a polymorphic component' className='text-red-500 text-2xl bg-blue-400 font-semibold' /> */}

      <Intro />
      <About />
      <Testimonials />
      <Projects />
      <Skills />
      {/* <Blog Posts={Posts} /> */}
      <Contact />
    </Layout>
  )
}

export default App

// http://demo.tendapa.co.ke/personal-profile-owner.html
// https://demo.tendapa.co.ke/open-store.html
// https://demo.tendapa.co.ke/fashion-jewelry.html