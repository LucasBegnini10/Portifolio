import React from "react"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Banner from "./components/Banner/Banner"
import Section from "./components/Section/Section"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"


function App(){
  return(
    <div className="app">
      <Header />  
      <Nav />
      <Banner />
      <Section />
      <Skills />
      <Projects />
    </div>
  )
}

export default App