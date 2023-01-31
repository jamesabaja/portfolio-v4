import React, { useState } from "react"
import { Form, Formik } from "formik"

import Intro from "./Eddy/Intro"
import SEO from "../../Layout/SEO"
import Question from "./Eddy/Question"
import Container from "../../Layout/Container"
import FormInput from "../../Elements/Form/FormInput"

import { validationSchema } from "../utils/validationSchema"
import Cover from "./Eddy/Cover"

const Eddy = ({ pageContext }) => {
  const [password, setPassword] = useState("")
  const [showQuestion, setShowQuestion] = useState(false)
  const [currentPage, setCurrentPage] = useState("intro")

  switch (true) {
    case password === pageContext?.password && !!showQuestion:
      return <Question setShowQuestion={setShowQuestion} />
    case password === pageContext?.password &&
      !showQuestion &&
      currentPage === "cover":
      return <Cover pageContext={pageContext} setCurrentPage={setCurrentPage} />
    case password === pageContext?.password &&
      !showQuestion &&
      currentPage === "intro":
      return (
        <Intro
          pageContext={pageContext}
          setShowQuestion={setShowQuestion}
          setCurrentPage={setCurrentPage}
        />
      )
    default:
      return (
        <Container isCentered desktop={6}>
          <SEO title={"🔐"} />
          <div className="mt-15">
            <Formik
              initialValues={{
                password,
                confirmPassword: pageContext?.password,
              }}
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
}

export default Eddy
