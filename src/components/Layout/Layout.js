import React, { Fragment } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"
import SEO from "./SEO"

import "../../styles/global.scss"

const Layout = ({ children, scrollToRef, homeRef }) => {
  return (
    <Fragment>
      <SEO title="James Abaja" />
      <Navbar scrollToRef={scrollToRef} homeRef={homeRef} />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
