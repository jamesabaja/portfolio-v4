import React, { Fragment } from "react"

const ExperienceCard = ({ experience, logos }) => {
  return (
    <Fragment>
      <div className="box mb-1 mt-0">
        <div className="is-flex">
          <img
            src={logos[experience?.logo]}
            className="is-hidden-mobile"
            style={{ width: "4rem", height: "4rem" }}
          />
          <div className="ml-1 ml-0-mobile">
            <p className="is-flex is-justify-content-space-between has-text-weight-bold is-size-5">
              {/* <span
              className={classNames(
                `tag mr-1 is-${
                  experience?.type === "Education" ? "link" : "primary"
                }`
              )}
            >
              {experience?.type}
            </span> */}
              <span>{experience?.label}</span>
            </p>
            <p className="has-text-grey is-uppercase is-size-7">
              {experience?.location} ({experience?.duration})
            </p>
            <p className="mt-1">
              {experience?.degreeProgram || experience?.title}
            </p>
            <p>{experience?.laboratory}</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ExperienceCard
