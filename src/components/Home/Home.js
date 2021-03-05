/* eslint-disable */
import React, { useState, useEffect } from "react"
import Container from "../Layout/Container"
import classNames from "classnames"

import styles from "./utils/home.module.scss"

const subtitleChoices = [
  "Software Engineer",
  "Web Developer",
  "Problem Solver",
  "Systems Designer",
  "Project Manager",
]

const Home = ({ homeRef, aboutRef, skillsRef, projectsRef, scrollToRef }) => {
  const [subtitleText, setSubtitleText] = useState(subtitleChoices[0][0])
  const [subtitleIndex, setSubtitleIndex] = useState(0)

  useEffect(() => {
    let tempSubtitleText = subtitleText
    let tempSubtitleIndex = subtitleIndex
    if (tempSubtitleText.length < subtitleChoices[tempSubtitleIndex].length) {
      setTimeout(() => {
        setSubtitleText(
          `${tempSubtitleText}${
            subtitleChoices[tempSubtitleIndex][tempSubtitleText.length]
          }`
        )
      }, 100)
    } else {
      if (tempSubtitleIndex + 1 === subtitleChoices.length)
        tempSubtitleIndex = 0
      else tempSubtitleIndex += 1
      setTimeout(() => {
        setSubtitleIndex(tempSubtitleIndex)
        setSubtitleText(subtitleChoices[tempSubtitleIndex][0])
      }, 500)
    }
  }, [subtitleText])

  return (
    <div ref={homeRef}>
      <Container desktop={6} isCentered>
        <section className="hero is-fullheight">
          <div className="hero-body pt-0 has-text-centered">
            <div className="container mt-0">
              <h1 className={classNames(styles["hero__title"], "mt-0")}>
                James <span className="is-hidden-mobile">Abaja</span>
              </h1>
              <h2
                className={classNames(
                  "subtitle mt-0",
                  styles["hero__subtitle"]
                )}
              >
                {subtitleText}
                <div
                  className={classNames(styles["hero__subtitleBlinkingCursor"])}
                />
              </h2>
              <div className="buttons is-centered">
                <button
                  className={classNames(
                    "button is-medium is-outlined",
                    styles["hero__buttonColor"]
                  )}
                  onClick={() => scrollToRef(aboutRef)}
                >
                  About
                </button>
                <button
                  className={classNames(
                    "button is-medium is-outlined",
                    styles["hero__buttonColor"]
                  )}
                  onClick={() => scrollToRef(skillsRef)}
                >
                  Skills
                </button>
                <button
                  className={classNames(
                    "button is-medium is-outlined",
                    styles["hero__buttonColor"]
                  )}
                  onClick={() => scrollToRef(projectsRef)}
                >
                  Work
                </button>
                {/* <button
                className={classNames(
                  "button is-outlined",
                  styles["hero__buttonColor"]
                )}
              >
                CV
              </button>
              <button
                className={classNames(
                  "button is-outlined",
                  styles["hero__buttonColor"]
                )}
              >
                Contact
              </button> */}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Home
