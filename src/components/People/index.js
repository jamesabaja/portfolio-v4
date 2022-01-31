import React, { useState } from "react"

import SEO from "../Layout/SEO"
import Container from "../Layout/Container"
import { Form, Formik } from "formik"

import FormInput from "../Elements/Form/FormInput"
import { validationSchema } from "./utils/validationSchema"

const People = ({ pageContext }) => {
  const [password, setPassword] = useState("")

  if (password === pageContext?.password)
    return (
      <Container isCentered>
        <SEO title={pageContext?.seoTitle} />
        <div className="mt-10 mt-5-mobile">
          <h3 className="title is-size-3">
            Hi <span className="has-text-gold">{pageContext?.name}</span>!
          </h3>
          <div
            className="mt-3 mt-2-mobile"
            dangerouslySetInnerHTML={{ __html: pageContext?.content }}
          />
          <p className="has-text-right mt-2 is-size-5">- James</p>
        </div>
      </Container>
    )

  return (
    <Container isCentered desktop={6}>
      <SEO title={"🔐"} />
      <div className="mt-15">
        <Formik
          initialValues={{ password, confirmPassword: pageContext?.password }}
          validationSchema={validationSchema}
          onSubmit={values => setPassword(values?.password)}
        >
          {() => (
            <Form>
              <FormInput
                name="password"
                label="🔐 Password"
                isRequired
                type="password"
              />
              <div className="buttons is-right">
                <button className="button is-warning" type="submit">
                  Confirm
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  )
}

export default People
