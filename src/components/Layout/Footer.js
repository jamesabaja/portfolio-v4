import React from "react"
import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons"

import styles from "./utils/layout.module.scss"

const currentDate = new Date()

const Footer = () => (
  <footer className="footer py-2">
    <div className="has-text-centered has-text-danger">
      <a
        href="https://github.com/jamesabaja"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames("mr-2", styles["footer__icon"])}
      >
        <FontAwesomeIcon icon={faGithub} width="32" />
      </a>
      <a
        href="https://dev.to/jamesabaja"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames("mr-2", styles["footer__icon"])}
      >
        <FontAwesomeIcon icon={faDev} width="32" />
      </a>
      <a
        href="https://www.linkedin.com/in/jgabaja/"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames(styles["footer__icon"])}
      >
        <FontAwesomeIcon icon={faLinkedin} width="32" />
      </a>
    </div>
    <p
      className={classNames(
        "has-text-centered is-flex",
        styles["footer__content"]
      )}
    >
      <a href="https://bulma.io">
        <img
          src="https://bulma.io/images/made-with-bulma--semiblack.png"
          alt="Made with Bulma"
          width="128"
          height="24"
        />
      </a>{" "}
      <span>&copy; {currentDate.getFullYear()} James Gabriel Abaja</span>
    </p>
    {/* <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>
        . The source code is licensed{" "}
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
        website content is licensed{" "}
        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY NC SA 4.0
        </a>
        .
      </p>
    </div> */}
  </footer>
)

export default Footer
