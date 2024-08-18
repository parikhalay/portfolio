import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
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

  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])

  return (
    <>
    {loading ? 
    <div className='loader'>
      
      <ClimbingBoxLoader
        color={"#4db5ff"}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
      <h2 className='loader-name'>Loading..!</h2>
    </div>
    :
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
    }
      
    </>
  )
}

export default App