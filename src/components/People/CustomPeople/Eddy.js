import React, { useState } from "react"

import SEO from "../../Layout/SEO"
import Container from "../../Layout/Container"
import { Form, Formik } from "formik"

import FormInput from "../../Elements/Form/FormInput"
import { validationSchema } from "../utils/validationSchema"

const Eddy = ({ pageContext }) => {
  const [password, setPassword] = useState("")

  if (password === pageContext?.password)
    return (
      <Container isCentered>
        <SEO title={pageContext?.seoTitle} />
        <div className="mt-10 mt-5-mobile">
          <h3 className="title is-size-3">
            <span role="img" aria-label="emoji">
              👋
            </span>{" "}
            Hi <span className="has-text-gold">{pageContext?.name}</span>!
          </h3>
          <div
            className="mt-3 mt-2-mobile"
            dangerouslySetInnerHTML={{ __html: pageContext?.content }}
          />
          <div>
            <article className="message is-warning mt-2">
              <div className="message-body is-size-6">
                Side note: I’m not always good with words, so you can always
                [listen](link to playlist) instead of (or after) reading{" "}
                <span role="img" aria-label="emoji">
                  😊
                </span>
              </div>
            </article>
            <p className="mb-1">
              This is gonna be a long-ass cheesy message so please bear with me
              hahaha.
            </p>
            <p className="mb-1">
              I never planned on going back to the app after being so wrecked
              and messed up by “the other app”. I never thought I’d take things
              seriously, that{" "}
              <span className="has-text-weight-bold">someone</span> would take
              me seriously, but you were there. Meeting you was a nice [(and my
              favorite) accident](11).
            </p>
            <p className="mb-1">
              You’re [always the first thing I remember](12) when I look back on
              the first time we were at Wildflour. I never knew that simple and
              first Friday together would be so special. I’ll never forget that
              moment when I walked through the doors and we saw each other [for
              the very first time](8). Not sure if you’ve had one of those
              moments, but for me, a specific song definitely played in my head
              as soon as I walked in. I don’t know if you remember also, but I
              said “I suck with topics and convos” and I apologized soon after.
              But there you were to assure me that everything’s fine, and that
              we were doing okay. What I didn’t tell you was I was so worried
              about [messing it all up](10), and that I can’t believe that we’re
              finally there, together. Those thoughts made my mind stop for some
              time, and lucky that you were always there to{" "}
              <span className="is-italic">“salo”</span>. Even if I had strict
              parents to work our schedules around to, it didn’t seem to bother
              you. But all I could think of at that moment was I wanted to
              [spend more time with you](7). But nevertheless, it was [a Friday
              I will always cherish](9).
            </p>
            <p className="mb-1">
              There were times in the middle of our convos, where I’d think that
              you were [too good to be true](14). And every time we’d talk, I
              would always wonder if there would be [someone who’s better that
              will come along](3). Because of those, it pains me to think if
              things were to [end, and crash, and fall, every single time](4).
            </p>
            <p className="mb-1">
              I tried to apply the “Three Episode Rule” to our dates, but wala
              eh, first date pa lang [I was already sure with you](6). I knew on
              the next two dates that I wouldn’t be wrong. I always hoped that
              [you felt the same way](15), and it started on the drive home on
              our first date.
            </p>
            <p className="mb-1">
              [I never saw you coming, but because of you, I’ll never be the
              same](2). While writing this letter, our moments together kept
              replaying in my head. Where we [started with nothing but maybe end
              up with everything](5).
            </p>
            <p className="mb-1">
              I feel so lucky to have been caught in your range in the app, and
              I’m so grateful we both swiped right, especially [you](13){" "}
              <span role="img" aria-label="emoji">
                😊
              </span>
            </p>
            <p>
              Eddy, [will you be my boyfriend?](1){" "}
              <span role="img" aria-label="emoji">
                🙂
              </span>
            </p>
          </div>
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

export default Eddy
