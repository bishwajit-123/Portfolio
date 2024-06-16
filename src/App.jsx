import { useState } from 'react'
import './App.css'
import "../src/app.scss";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/Parallax/Parallax';
import Tabs from "./components/Tabs/Tabs"
import Skills from './components/Skills/Skills';
import Skillsmain from './components/Skills/Skillsmain';
import Portfolio from './components/portfolio/Portfolio';
import Contact from "./components/contact/Contact"
import Cursor from './components/cursor/Cursor';
import Projects from './components/projects/Projects';




function App() {


  return (
    <>
    <Cursor/>
    <section id = "Homepage">
     <Navbar/>
      <Hero></Hero>
      </section>
      <section id = "About"><Parallax/></section>
      <section id = "Tabs"><Tabs/></section>
      <section id = "Skills">
        <Skills/>
    
      </section>
      <section><Skillsmain/></section>
      
      <section id = "Project">
      <Projects type = "Project"/>
      </section>
      <Portfolio/>
      <section id = "Contact"><Contact/></section> 
      

    </>
  )
}

export default App
