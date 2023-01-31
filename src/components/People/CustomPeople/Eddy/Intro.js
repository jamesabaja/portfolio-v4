import React from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import SEO from "../../../Layout/SEO"
import ImageContainer from "../ImageContainer"
import Container from "../../../Layout/Container"

const Intro = ({ pageContext, setShowQuestion }) => {
  return (
    <Container isCentered>
      <SEO title={"🔐"} />
      <div className="mt-10 mt-5-mobile">
        {/* <div className="buttons is-left">
          <button
            className="button is-primary is-outlined is-flex"
            onClick={() => setCurrentPage("cover")}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <p className="ml-1">Back</p>
          </button>
        </div> */}
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
              Side note: I’m not always good with words, so you can always{" "}
              <a
                href="https://open.spotify.com/playlist/3MhuJPsJTUODSZUzByPRga?si=7012e31743c0465d&pt=da6531768dbc2b16bc8f9423194932d2"
                target="_blank"
                rel="noreferrer noopener"
              >
                listen
              </a>{" "}
              instead of (or after) reading{" "}
              <span role="img" aria-label="emoji">
                😊
              </span>
              <p className="mt-1">
                Plus this is gonna be a long-ass cheesy message so please bear
                with me hahaha.
              </p>
            </div>
          </article>
          <p className="mb-1 has-text-justified">
            Ever since that day we first met in the app, I’ve always wanted to
            thank you for the opportunity of getting to know each other better.
            Some things are hard to say out loud (or at least, when we chat) but
            thank you for making it so much easier, and for making me a little
            bit more fearless. I really enjoy talking to you and I like what I’m
            like when I do (idk how, I just feel rlly comfortable with u).
          </p>
          <p className="mb-1 has-text-justified">
            The feeling of seeing you for the very first time is{" "}
            <ImageContainer index={11}>
              always the first thing I remember
            </ImageContainer>{" "}
            when I look back on the first time we were at Wildflour. I never
            knew that simple and first Friday together would be so special. I’ll
            never forget that moment when I walked through the doors and we saw
            each other{" "}
            <ImageContainer index={7}>for the very first time</ImageContainer>.
            Not sure if you’ve had one of those moments, but for me, a specific
            song definitely played in my head as soon as I walked in. I don’t
            know if you remember also, but I said “I suck with topics and
            convos” and I apologized soon after. But there you were to assure me
            that everything’s fine, and that we were doing okay. What I didn’t
            tell you was I was so worried about{" "}
            <ImageContainer index={9}>messing it all up</ImageContainer>, and
            that I can’t believe that we’re finally there, together. Those
            thoughts made my mind stop for some time, and lucky that you were
            always there to <span className="is-italic">“salo”</span> the convo.
            Even if I had strict parents to work our schedules around to, it
            didn’t seem to bother you. And all I could think of at that moment
            was that I wanted to{" "}
            <ImageContainer index={6}>spend more time with you</ImageContainer>.
            Nevertheless, it was{" "}
            <ImageContainer index={8}>
              a Friday I will always cherish
            </ImageContainer>
            . Thank you for taking me home that very first night.
          </p>
          <p className="mb-1 has-text-justified">
            There were times in the middle of our convos, where I’d think that
            you were{" "}
            <ImageContainer index={13}>too good to be true</ImageContainer>. And
            every time we’d talk, I would always wonder if there would be{" "}
            <ImageContainer index={2}>
              someone who’s better that will come along
            </ImageContainer>
            . Because of those thoughts, it pains me to think if things were to{" "}
            <ImageContainer index={3}>
              end, and crash, and fall, every single time
            </ImageContainer>
            .
          </p>
          <p className="mb-1 has-text-justified">
            I tried to apply the “Three Episode Rule” to our dates, but wala eh,
            first date pa lang I knew I already wanted to{" "}
            <ImageContainer index={16}>
              trust my gut when it said
            </ImageContainer>{" "}
            you'll be worth the journey. I knew on the next two dates that I
            wouldn’t be wrong. I always hoped that{" "}
            <ImageContainer index={14}>you felt the same way</ImageContainer>,
            and it started on the drive home on our first date.
          </p>
          <p className="mb-1 has-text-justified">
            <ImageContainer index={1}>
              I never saw you coming, but because of you, I’ll never be the same
            </ImageContainer>
            . While writing this letter, our moments together kept replaying in
            my head. Where we{" "}
            <ImageContainer index={4}>
              started with nothing but maybe end up with everything
            </ImageContainer>
            .
          </p>{" "}
          <p className="mb-1 has-text-justified">
            I never planned on going back to the app after being so wrecked and
            messed up by “the other app”. I never thought I’d take things
            seriously, that{" "}
            <span className="has-text-weight-bold">someone</span> would take me
            seriously, but you were there. Meeting you was a nice{" "}
            <ImageContainer index={10}>
              (and my favorite) accident
            </ImageContainer>
            .
          </p>
          <p className="mb-1 has-text-justified">
            I don’t wanna make this any longer than it should be, so I’ll go
            straight na to the point — I feel so lucky to have been caught in
            your range in the app, and I’m so grateful we both swiped right, but
            most especially, I'm so grateful for{" "}
            <ImageContainer index={12}>you</ImageContainer>{" "}
            <span role="img" aria-label="emoji">
              😊
            </span>
            .
          </p>
          <hr className="mb-1 has-text-justified" />
          <p className="mb-1 has-text-justified">
            I want to drive the city at night with you. I wanna experience more
            firsts with you. I wanna watch more scary movies with you so I can
            be there and hold your hand again. I wanna be comfortable sharing
            memes and random funny things to you so I can make you smile even
            just for a bit (especially if you're having a very tough day). I
            want someone I can work and grow with, and I'm really glad you're
            there.
          </p>
          <p className="mb-1 has-text-justified">
            I love how we're twin air signs. I love the way I am when I talk to
            you, especially when we're together. I love how you offered your
            hugs when you knew I needed them the most. I love how your dimples
            fall perfectly in your face. I love how small the world is, where
            we'd actually be in the same place at the same time without us
            knowing. It seems cheesy to think about, but for me, I understand it
            better now when people think about how relationships are actually
            years in the making without people even realizing it.
          </p>
          <p className="mb-1 has-text-justified">
            Thank you for all the hugs. Thank you for taking me home that very
            first night. Thank you for always making time. Thank you for always
            knowing the right things to say. Thank you for your presence, for
            simply being there. Thank you for making me realize that home is
            just two arms wrapped around you when you're at your worst.
          </p>
          <hr className="mb-1 has-text-justified" />
          <p className="mb-1 has-text-justified">
            You were always there at the right time. Thank you for never making
            me wait.{" "}
            <ImageContainer index={15}>
              Now I'd like to do the same
            </ImageContainer>
            , if you'd let me. These past few weeks, (if you've noticed) I've
            kinda held back on some of the things I wanted to do or say. Think
            of this as me not holding back anymore, and showing you what I truly
            feel. (I hope I was able to convey what I really feel about you,
            since I mentioned na I really do suck with words...) I've read
            somewhere that{" "}
            <i>"love starts as a feeling but continues as a decision"</i>, so
            I'd like to ask you one thing:
          </p>
          <div className="buttons is-right mb-10">
            <button
              className="button is-primary is-outlined is-flex"
              onClick={() => {
                if (typeof window !== "undefined") window.scrollTo(0, 0)
                setShowQuestion(true)
              }}
            >
              <p className="mr-1">Next</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Intro
