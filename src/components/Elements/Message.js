import React from "react"
import classNames from "classnames"

const Message = ({ children, color, size, align, ...props }) => {
  return (
    <article
      className={classNames(
        `message is-${color || "warning"} has-text-${align ||
          "left"} is-size-${size || "6"}`,
        props.className
      )}
    >
      <div className="message-body content has-text-dark">{children}</div>
    </article>
  )
}

export default Message
