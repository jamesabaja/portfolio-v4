import React, { useContext } from "react"
import Container from "../Layout/Container"

import ProjectCard from "./ProjectCard"
import { AppContext } from "../../context/AppContext"

import projects from "./utils/projects.json"
import insideTheClub from "../../../static/images/inside-the-club.png"
import medikts from "../../../static/images/medikts.png"
import sdgInteractions from "../../../static/images/sdg-interactions.png"
import budgetarian from "../../../static/images/budgetarian.png"

const Projects = ({ projectsRef }) => {
  const { dispatch } = useContext(AppContext)

  let screenshots = {
    insideTheClub,
    medikts,
    sdgInteractions,
    budgetarian,
  }

  return (
    <div ref={projectsRef}>
      <Container desktop={10} isCentered>
        <div className="my-5">
          <h3 className="has-text-right has-text-grey mb-3 mb-1-mobile">
            Here are some of my favorite projects.
          </h3>
          <div className="columns is-multiline">
            {projects.map(project => (
              <ProjectCard
                {...project}
                dispatch={dispatch}
                title={project.title}
                description={project.description}
                date={project.date}
                screenshot={screenshots[project.screenshot]}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
