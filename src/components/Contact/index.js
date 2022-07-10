import { Form, Formik } from "formik"
import React, { useState } from "react"
import classNames from "classnames"
import axios from "axios"

import Message from "../Elements/Message"
import Container from "../Layout/Container"
import FormInput from "../Elements/Form/FormInput"
import FormTextArea from "../Elements/Form/FormTextArea"

const Contact = ({ contactRef }) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async (values, { resetForm }) => {
    setMessage(null)
    setLoading(true)
    await axios.post(process.env.GATSBY_SEND_INQUIRY_WEBHOOK, {
      ...values,
    })
    setLoading(false)
    setMessage({
      content:
        "And off we go! Thank you for taking the time to reach out. Looking forward to working with you 🙌",
      color: "success",
    })
    resetForm()
  }

  return (
    <div ref={contactRef}>
      <Container desktop={10} isCentered>
        <div className="my-5">
          <h3 className="has-text-left has-text-grey mb-3 mb-2-mobile is-size-4-mobile">
            Thanks for taking the time to look around.{" "}
            <br className="is-hidden-mobile" />
            Don't be shy to say hello (or details of a project you'd like me to
            be part of{" "}
            <span role="img" aria-label="emoji">
              😉
            </span>
            )!
          </h3>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            }}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <FormInput
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  isRequired
                />
                <FormInput
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  isRequired
                />
                <FormInput
                  name="email"
                  label="Email"
                  placeholder="john.doe@mail.com"
                  isRequired
                />
                <FormTextArea
                  name="message"
                  label="Message"
                  placeholder="Hi, James!"
                  isRequired
                />
                {message?.content ? (
                  <Message color={message?.color}>{message?.content}</Message>
                ) : null}
                <div className="buttons is-right">
                  <button
                    className={classNames(
                      "button is-primary has-text-weight-bold",
                      {
                        "is-loading": !!loading,
                      }
                    )}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  )
}

export default Contact
