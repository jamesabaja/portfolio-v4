import React, { useRef } from "react"
import Layout from "../components/Layout/Layout"
import Home from "../components/Home/Home"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact"
import ComingSoon from "../components/ComingSoon"
import Experience from "../components/Experience/Experience"

export default () => {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const homeRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToRef = ref => {
    window.scrollTo(0, ref.current.offsetTop)
  }

  return (
    <Layout scrollToRef={scrollToRef} homeRef={homeRef}>
      <Home
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        scrollToRef={scrollToRef}
      />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Experience />
      <Contact contactRef={contactRef} />
      <ComingSoon scrollToRef={scrollToRef} homeRef={homeRef} />
    </Layout>
  )
}
