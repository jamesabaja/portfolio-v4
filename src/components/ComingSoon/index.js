import classNames from "classnames"
import React from "react"

import Message from "../Elements/Message"
import Container from "../Layout/Container"

import comingSoon from "./utils/comingSoon.json"

const ComingSoon = ({ scrollToRef, homeRef }) => {
  return (
    <div>
      <Container desktop={10} isCentered>
        <div className="mt-5 mb-3">
          <h3 className="has-text-right has-text-grey mb-3 mb-2-mobile is-size-4-mobile">
            Unfortunately, all good things must come to an end.{" "}
            <br className="is-hidden-mobile" />
            But that doesn't mean we can't keep adding more!
          </h3>
          <p className="has-text-right is-italic mb-1">
            But if the story’s over, why am I still writing pages?
          </p>
          <p className="has-text-right">
            - Swift, Taylor. "Death By A Thousand Cuts." 2019.
          </p>
          <Message color="warning" className="mt-3">
            Here are some updates you can expect to see in this website in the
            coming months. Are you ready for it?
          </Message>
          <div className="notification is-info is-light">
            <ul className="has-text-black">
              {comingSoon?.map((feature, index) => (
                <li
                  className={classNames({
                    "mb-1": index < comingSoon?.length - 1,
                  })}
                >
                  <span role="img" aria-label="emoji">
                    {feature?.emojiLabel}
                  </span>{" "}
                  <span className="has-text-weight-bold">{feature?.title}</span>
                  . {feature?.content}
                </li>
              ))}
            </ul>
          </div>
          <div className="buttons is-centered">
            <button
              className="button is-primary is-medium is-outlined"
              onClick={() => scrollToRef(homeRef)}
            >
              <span role="img" aria-label="emoji">
                ☝🏻
              </span>{" "}
              Go back up
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ComingSoon
