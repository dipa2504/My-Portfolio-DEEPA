import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Skill from '../Skill/Skill'

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <Skill />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
