import React from "react"
import Container from "../Layout/Container"
import classNames from "classnames"

import styles from "./utils/projects.module.scss"

const Projects = ({ projectsRef }) => (
  <div ref={projectsRef}>
    <Container desktop={10} isCentered>
      <div className="my-5">
        <h3 className="has-text-right has-text-grey mb-3 mb-1-mobile">
          Here's some of my favorite projects.
        </h3>
        <div className="columns is-multiline">
          {/* <div className="column mb-3 mb-0-mobile is-4">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p className="has-text-centered">🚧 Projects Section 🚧</p>
              </div>
            </div>
          </div>
          <div className="column mb-3 mb-0-mobile is-4">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p className="has-text-centered">🚧 Projects Section 🚧</p>
              </div>
            </div>
          </div>
          <div className="column mb-3 mb-0-mobile is-4">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p className="has-text-centered">🚧 Projects Section 🚧</p>
              </div>
            </div>
          </div> */}
          <div className="column mb-0-mobile is-4">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p className="has-text-centered is-size-5 has-text-weight-bold">
                  UPCC
                </p>
              </div>
            </div>
          </div>
          <div className="column mb-0-mobile is-4">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p className="has-text-centered is-size-5 has-text-weight-bold">
                  SDG Interactions Survey
                </p>
              </div>
            </div>
          </div>
          <div className="column mb-0-mobile is-4">
            <div className={classNames("card", styles["card"])}>
              <div className="card-content">
                <p className="has-text-centered is-size-5 has-text-weight-bold">
                  SOCKnet
                </p>
              </div>
            </div>
          </div>
          {/* <div className="column mb-0-mobile is-4">
            <div className={classNames("card", styles["card"])}>
            <div className="card-content">
            <p className="has-text-centered is-size-5 has-text-weight-bold">
            Store Admin
            </p>
            </div>
            </div>
          </div> */}
        </div>
        {/* <p className="has-text-right mt-0">
          <Link>See more of my work here ></Link>
        </p> */}
      </div>
    </Container>
  </div>
)

export default Projects
