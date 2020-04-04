import React from "react"
import Container from "../Layout/Container"
import classNames from "classnames"

import styles from "./utils/skills.module.scss"

const LANGUAGES = ["HTML", "CSS", "JavaScript", "Python", "Java", "C", "SQL"]
const FRAMEWORKS = [
  "React",
  "Gatsby",
  "Bulma",
  "Semantic UI",
  "Django",
  "Django Rest Framework",
]
const TOOLS = [
  "PostgreSQL",
  "Figma",
  "npm",
  "yarn",
  "git",
  "GitHub",
  "Heroku",
  "AWS",
]

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
                {/* <ul className="px-1 has-text-centered">
                  <li>
                    <span>HTML</span>
                  </li>
                  <li>
                    <span>CSS3</span> + <span>SCSS</span>
                  </li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                </ul> */}
                <span className="tags is-centered">
                  {LANGUAGES.map(language => (
                    <span className="tag">{language}</span>
                  ))}
                </span>
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
                  Frameworks
                </p>
                {/* <ul className="px-1 has-text-centered">
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>Bulma</li>
                  <li>Semantic UI</li>
                  <li>Django + Django Rest Framework</li>
                </ul> */}
                <span className="tags is-centered">
                  {FRAMEWORKS.map(framework => (
                    <span className="tag">{framework}</span>
                  ))}
                </span>
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
                  Tools
                </p>
                {/* <ul className="px-1 has-text-centered">
                  <li>Figma</li>
                  <li>NPM + Yarn</li>
                  <li>Git + Github</li>
                  <li>Agile + Scrum</li>
                  <li>Performance Optimization</li>
                </ul> */}
                <span className="tags is-centered">
                  {TOOLS.map(tool => (
                    <span className="tag">{tool}</span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export default Skills
