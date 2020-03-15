import React, { Fragment } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer"

import "../../styles/global.scss"

const Layout = ({ children, scrollToRef, homeRef }) => {
  return (
    <Fragment>
      <Navbar scrollToRef={scrollToRef} homeRef={homeRef} />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
