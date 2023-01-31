import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { Form, Formik } from "formik"
import classNames from "classnames"
import axios from "axios"

import SEO from "../../../Layout/SEO"
import ImageContainer from "../ImageContainer"
import Container from "../../../Layout/Container"
import FormInput from "../../../Elements/Form/FormInput"

const Question = ({ setShowQuestion }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true)
    await axios.post(process.env.GATSBY_SEND_INQUIRY_WEBHOOK, {
      ...values,
      type: "letter",
    })
    resetForm()
    setLoading(false)
  }

  return (
    <Container isCentered>
      <SEO title={"🔐"} />
      <div className="mt-5">
        <div className="buttons is-left">
          <button
            className="button is-primary is-outlined is-flex"
            onClick={() => setShowQuestion(false)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <p className="ml-1">Back</p>
          </button>
        </div>
        <p className="mb-1">
          Happy endings don't come so easily, and I’d be willing to work and
          fight for it. Would you be willing to do it with me as well?
        </p>
        <article className="message is-warning mt-1 mb-2">
          <div className="message-body is-size-7">
            <p className="is-size-7 mb-1">
              Please don't feel pressured to answer now, and know that it would
              be okay (and I'd totally understand) if you say no!! I just really
              wanted to let you know that you're kewl and awesome and I really
              admire and appreciate you, and that I'm doing this because I
              believe that when someone makes me happy, I'll do my best to make
              them happier.
            </p>
            <p className="is-size-7 mb-1">
              If you're taking your time pa (either not to go into a
              relationship yet or to decide about this), it's also okay. People
              say that something worth having is something worth waiting for, so
              I'd be willing to wait for you, if you'd let me. I'm willing to
              wait because even though sunsets happen, I know I can keep my eyes
              open until it's dawn again, if it's you who I'll be seeing at the
              end of it.
            </p>
            <p className="is-size-7 mb-1">
              If you'll be g to take a chance on me, make things official, and
              try to see if things will work out (if we'll work out), that would
              be really cool but if not, like I said, that's oks lang din! Tho
              thank u for giving me the opportunity to be extra like this{" "}
              <span role="img" aria-label="emoji">
                😄
              </span>{" "}
              and of course, I’m just grateful I got a glimpse of what could’ve
              been.
            </p>
            <p className="is-size-7">
              P.S. If ever you do say yes, I'd be really looking forward to that
              Kare-kare we’ll cook together.{" "}
              <span role="img" aria-label="emoji">
                😄
              </span>
            </p>
          </div>
        </article>
        <hr className="mb-1" />
        <Formik onSubmit={handleSubmit} initialValues={{ message: "" }}>
          {() => (
            <Form>
              <FormInput
                className={{ container: "mb-0" }}
                name="message"
                isRequired
                label={
                  <p>
                    Eddy,{" "}
                    <ImageContainer index={0}>
                      will you be my boyfriend?
                    </ImageContainer>{" "}
                    <span role="img" aria-label="emoji">
                      🙂
                    </span>
                  </p>
                }
                helper={
                  <p>
                    If you aren't convinced yet or are currently thinking about
                    it, I hope{" "}
                    <ImageContainer index={17}>
                      this helps my case
                    </ImageContainer>{" "}
                    <span role="img" aria-label="emoji">
                      😅
                    </span>
                  </p>
                }
              />
              {/* <div className="mb-2 is-flex is-align-items-center">
                <p>Try: </p>
                <button
                  className="button is-text has-text-primary"
                  type="button"
                  onClick={() => setFieldValue("message", "Yes")}
                >
                  Yes
                </button>
                <button
                  className="button is-text has-text-primary"
                  type="button"
                  onClick={() => setFieldValue("message", "No")}
                >
                  No
                </button>
                <button
                  className="button is-text has-text-primary"
                  type="button"
                  onClick={() =>
                    setFieldValue("message", "I'll think about it")
                  }
                >
                  I'll think about it
                </button>
              </div> */}
              <div className="buttons is-right mt-1">
                <button
                  className={classNames("button is-primary is-outline", {
                    "is-loading": !!loading,
                  })}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default Question
