import React, { Fragment } from "react"
import Container from "../Layout/Container"

import upd from "../../../static/images/upd.png"
import medgrocer from "../../../static/images/medgrocer.png"
import experiences from "./utils/experience.json"
import ExperienceCard from "./components/ExperienceCard"

const Experience = () => {
  const logos = {
    upd,
    medgrocer,
  }

  return (
    <div>
      <Container desktop={10} isCentered>
        <div className="my-5">
          <h3 className="has-text-left has-text-grey mb-3">
            Here's an overview of my academic and professional journey.
          </h3>
          <div className="columns is-centered">
            <div className="column is-6-desktop">
              {experiences?.map((experience, index) => {
                return (
                  <Fragment>
                    {index === 0 ||
                    experiences?.[index - 1]?.type !== experience?.type ? (
                      <p className="is-size-6 is-uppercase has-text-weight-bold">
                        {experience?.type}
                      </p>
                    ) : null}
                    <ExperienceCard experience={experience} logos={logos} />
                    {index < experiences.length - 1 ? (
                      <div className="is-flex is-justify-content-center mb-1">
                        <div
                          style={{
                            borderLeft: "0.25rem solid #E5E4E2",
                            height: "2rem",
                          }}
                        ></div>
                      </div>
                    ) : null}
                  </Fragment>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Experience
