import React from "react"
import classNames from "classnames"

import styles from "./utils/projects.module.scss"

const ProjectCard = ({ dispatch, title, description, date }) => {
  const handleClick = event => {
    dispatch({
      type: "SHOW_MODAL",
      payload: {
        isCard: true,
        headerClass: styles["card__modalHeader"],
        content: (
          <div>
            <h3 className="has-text-gold mt-0 has-text-left mb-0">{title}</h3>
            <p className="is-size-6 has-text-left mt-0 mb-2">{date}</p>
            {description.map(item => (
              <p className="has-text-justified mb-1">{item}</p>
            ))}
          </div>
        ),
      },
    })
  }

  return (
    <div className="column mb-0-mobile is-4">
      <div
        className={classNames("card", styles["card"])}
        onClick={handleClick}
        onKeyDown={event => {
          if (handleClick && event.key === "Enter") handleClick(event)
        }}
        role="button"
        tabIndex={0}
      >
        <div className="card-content">
          <p className="has-text-centered is-size-5 has-text-weight-bold">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
