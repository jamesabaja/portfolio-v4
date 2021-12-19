/* eslint-disable */
import React from "react"
import classNames from "classnames"

import styles from "./utils/layout.module.scss"

const Navbar = ({ scrollToRef, homeRef }) => {
  return (
    <nav className="navbar is-fixed-top is-flex">
      <div className={classNames("ml-1", styles["navbar__brand"])}>
        <span
          className={classNames(styles["navbar__link"])}
          onClick={() => scrollToRef(homeRef)}
        >
          James Abaja
        </span>
      </div>
    </nav>
  )
}

export default Navbar
