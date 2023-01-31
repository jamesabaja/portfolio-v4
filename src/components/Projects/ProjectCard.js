import React from "react"
import classNames from "classnames"

import styles from "./utils/projects.module.scss"

const ProjectCard = ({
  dispatch,
  title,
  description,
  date,
  screenshot,
  ...rest
}) => {
  const handleClick = () => {
    dispatch({
      type: "SHOW_MODAL",
      payload: {
        isCard: true,
        headerClass: styles["card__modalHeader"],
        content: (
          <div className="is-flex">
            {!!screenshot ? (
              <div className="mr-1 is-hidden-mobile">
                <img src={screenshot} alt="project_screenshot" />
              </div>
            ) : null}
            <div className="is-flex is-flex-direction-column is-justify-content-space-between">
              <div>
                <h3 className="has-text-gold mt-0 has-text-left mb-0">
                  {title}{" "}
                  {rest?.isNew ? (
                    <span className="tag">
                      New{" "}
                      <span
                        className={classNames(styles["card__tagEmoji"])}
                        role="img"
                        aria-label="emoji"
                      >
                        ✨
                      </span>
                    </span>
                  ) : null}{" "}
                  {rest?.isFeatured ? (
                    <span className="tag">
                      Featured{" "}
                      <span
                        className={classNames(styles["card__tagEmoji"])}
                        role="img"
                        aria-label="emoji"
                      >
                        💯
                      </span>
                    </span>
                  ) : null}
                </h3>
                <p className="is-size-6 has-text-left mt-0 mb-2">{date}</p>
                {description.map(item => (
                  <p className="has-text-justified mb-1">{item}</p>
                ))}
              </div>
              <div>
                {rest?.cta ? (
                  <div className="buttons is-right mt-2">
                    <a
                      href={rest?.cta?.link}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="button is-primary has-text-weight-bold"
                    >
                      <p className="is-size-6">{rest?.cta?.content}</p>{" "}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
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
            <span>{title}</span>{" "}
            <div>
              {rest?.isNew ? (
                <span className="tag">
                  New{" "}
                  <span
                    className={classNames(styles["card__tagEmoji"])}
                    role="img"
                    aria-label="emoji"
                  >
                    ✨
                  </span>
                </span>
              ) : null}{" "}
              {rest?.isFeatured ? (
                <span className="tag">
                  Featured{" "}
                  <span
                    className={classNames(styles["card__tagEmoji"])}
                    role="img"
                    aria-label="emoji"
                  >
                    💯
                  </span>
                </span>
              ) : null}
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
