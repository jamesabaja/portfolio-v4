import React from "react"
import Container from "../Layout/Container"
import classNames from "classnames"

import styles from "./utils/skills.module.scss"

const Skills = ({ skillsRef }) => (
  <div ref={skillsRef}>
    <Container desktop={10} isCentered>
      <div className="mt-5 mb-4 mb-0-mobile">
        <h1 className="has-text-centered">Skills</h1>
        <p className="subtitle has-text-centered mb-2 has-text-black px-7 px-1-mobile">
          Here are some of the things I love to use.
        </p>
        <div className="columns">
          <div className="column is-4 has-text-black">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p
                  className={classNames(
                    "has-text-centered mb-1 subtitle has-text-weight-bold is-size-5",
                    styles["card__header"]
                  )}
                >
                  Languages
                </p>
                <ul className="px-1 has-text-centered">
                  <li>
                    <span>HTML</span>
                  </li>
                  <li>
                    <span>CSS3</span> + <span>SCSS</span>
                  </li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column is-4 has-text-black">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p
                  className={classNames(
                    "has-text-centered mb-1 subtitle has-text-weight-bold is-size-5",
                    styles["card__header"]
                  )}
                >
                  Frameworks and Libraries
                </p>
                <ul className="px-1 has-text-centered">
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>Bulma</li>
                  <li>Semantic UI</li>
                  <li>Django + Django Rest Framework</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column is-4 has-text-black">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p
                  className={classNames(
                    "has-text-centered mb-1 subtitle has-text-weight-bold is-size-5",
                    styles["card__header"]
                  )}
                >
                  Methods and Tools
                </p>
                <ul className="px-1 has-text-centered">
                  <li>Figma</li>
                  <li>NPM + Yarn</li>
                  <li>Git + Github</li>
                  <li>Agile + Scrum</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export default Skills
