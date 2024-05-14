import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import GraphicDesign from './components/GraphicDesign/GraphicDesign'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Projects /> 
      <GraphicDesign />
      <Contact /> 
      <Footer />
    </>
  )
}

export default App