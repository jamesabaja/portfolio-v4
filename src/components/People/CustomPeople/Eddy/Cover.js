import React from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "../../../Layout/Container"
import SEO from "../../../Layout/SEO"

import coverImage from "../../../../../static/images/people/eddy/Intro.png"

const Cover = ({ pageContext, setCurrentPage }) => {
  return (
    <Container isCentered>
      <SEO title={"🔐"} />
      <div className="mt-10">
        <h3 className="title is-size-3">
          <span role="img" aria-label="emoji">
            👋
          </span>{" "}
          Hi <span className="has-text-gold">{pageContext?.name}</span>!
        </h3>
        <div className="columns is-centered my-1">
          <div className="column is-6 is-12-mobile">
            <hr className="mb-1" />
            <img src={coverImage} alt="cover" />
            <hr className="my-1" />
          </div>
        </div>
        <div className="buttons is-right mb-10">
          <button
            className="button is-primary is-outlined is-flex"
            onClick={() => {
              if (typeof window !== "undefined") window.scrollTo(0, 0)
              setCurrentPage("intro")
            }}
          >
            <p className="mr-1">Next</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Cover
