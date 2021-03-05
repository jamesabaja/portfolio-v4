import React, { useContext } from "react"
import Container from "../Layout/Container"

import ProjectCard from "./ProjectCard"
import { AppContext } from "../../context/AppContext"

import projects from "./utils/projects.json"

const Projects = ({ projectsRef }) => {
  const { dispatch } = useContext(AppContext)

  return (
    <div ref={projectsRef}>
      <Container desktop={10} isCentered>
        <div className="my-5">
          <h3 className="has-text-right has-text-grey mb-3 mb-1-mobile">
            Here are some of my favorite projects.
          </h3>
          <div className="columns is-multiline">
            {/* <div className="column mb-0-mobile is-4">
            <div className={classNames("card", styles["card"])}>
            <div className="card-content">
            <p className="has-text-centered is-size-5 has-text-weight-bold">
            Store Admin
            </p>
            </div>
            </div>
          </div> */}
            {projects.map(project => (
              <ProjectCard
                dispatch={dispatch}
                title={project.title}
                description={project.description}
                date={project.date}
              />
            ))}
          </div>
          {/* <p className="has-text-right mt-0">
          <Link>See more of my work here ></Link>
        </p> */}
        </div>
      </Container>
    </div>
  )
}

export default Projects
