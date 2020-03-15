import React from "react"
import classNames from "classnames"

import styles from "./utils/projects.module.scss"

const ProjectCard = ({ dispatch, title, description }) => (
  <div className="column mb-0-mobile is-4">
    <div
      className={classNames("card", styles["card"])}
      onClick={() =>
        dispatch({
          type: "SHOW_MODAL",
          payload: {
            isCard: true,
            headerClass: styles["card__modalHeader"],
            content: (
              <div>
                <h3 className="has-text-gold mt-0 has-text-left">{title}</h3>
                {description.map(item => (
                  <p className="has-text-justified mb-1">{item}</p>
                ))}
              </div>
            ),
          },
        })
      }
    >
      <div className="card-content">
        <p className="has-text-centered is-size-5 has-text-weight-bold">
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default ProjectCard
