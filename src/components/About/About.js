import React from "react"
import Container from "../Layout/Container"
import classNames from "classnames"

import styles from "./utils/about.module.scss"

const About = ({ aboutRef }) => (
  <div ref={aboutRef}>
    <Container desktop={10} isCentered>
      <h1 className="is-hidden-mobile mb-3">I build stuff on the internet.</h1>
      <h3 className="is-hidden-desktop is-hidden-tablet">
        I build stuff on the internet.
      </h3>
      <div className="columns is-vcentered my-1 mx-10 m-0-mobile">
        <div
          className={classNames(
            "column is-flex has-text-centered mr-3 mr-0-mobile",
            styles["emoji"]
          )}
        >
          <span role="img" aria-label="emoji">
            👨‍💻
          </span>
          <span
            className="is-hidden-tablet is-hidden-desktop ml-3"
            role="img"
            aria-label="emoji"
          >
            👨‍💻
          </span>
          <span
            className="is-hidden-tablet is-hidden-desktop ml-3"
            role="img"
            aria-label="emoji"
          >
            👨‍💻
          </span>
        </div>
        <div className="column pt-0-mobile has-text-justified">
          I'm a software engineer and full stack web developer based in Manila,
          Philippines. I have a passion for{" "}
          <span>creating websites and applications</span> that make an impact
          through each line of code I write.
        </div>
      </div>
      <div className="columns is-vcentered my-1 mx-10 m-0-mobile">
        <div
          className={classNames(
            "column is-flex has-text-centered mr-3 mr-0-mobile",
            styles["emoji"]
          )}
        >
          <span role="img" aria-label="emoji">
            💊
          </span>
          <span
            className="is-hidden-tablet is-hidden-desktop ml-3"
            role="img"
            aria-label="emoji"
          >
            💊
          </span>
          <span
            className="is-hidden-tablet is-hidden-desktop ml-3"
            role="img"
            aria-label="emoji"
          >
            💊
          </span>
        </div>
        <div className="column pt-0-mobile has-text-justified">
          Currently, I am an{" "}
          <span className="has-text-weight-bold">Associate IT Manager</span> and{" "}
          <span className="has-text-weight-bold">Developer</span> for{" "}
          <a
            href="https://medgrocer.com"
            className={classNames(
              "has-text-weight-bold",
              styles["link__medgrocer"]
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            MedGrocer
          </a>
          , a startup healthcare solutions company. I write code in line with
          the team's mission of making medicines (and healthcare in general)
          more accessible and cost-effective.
        </div>
      </div>
      <div className="columns is-vcentered my-1 mx-10 m-0-mobile">
        <div
          className={classNames(
            "column is-flex has-text-centered mr-3 mr-0-mobile",
            styles["emoji"]
          )}
        >
          <span role="img" aria-label="emoji">
            📊
          </span>
          <span
            className="is-hidden-tablet is-hidden-desktop ml-3"
            role="img"
            aria-label="emoji"
          >
            📊
          </span>
          <span
            className="is-hidden-tablet is-hidden-desktop ml-3"
            role="img"
            aria-label="emoji"
          >
            📊
          </span>
        </div>
        <div className="column pt-0-mobile has-text-justified">
          I am also currently focusing on machine learning, data analytics and
          visualization, and the ability to craft new solutions and improve
          existing ones through a deeper understanding of data.
        </div>
      </div>
    </Container>
  </div>
)

export default About
