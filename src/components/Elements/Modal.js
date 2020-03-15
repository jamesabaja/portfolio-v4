import React, { Fragment } from "react"
import classNames from "classnames"

const Modal = props => {
  const modalBody = props.isCard ? (
    <ModalCardBody {...props} />
  ) : (
    <ModalBody {...props} />
  )

  return (
    <div
      className={classNames("modal m-0", {
        "is-active": props.isModalActive,
      })}
    >
      <div className="modal-background"></div>
      {modalBody}
    </div>
  )
}

const ModalCardBody = props => (
  <div className="modal-card p-0">
    <div
      className={classNames("modal-card-head pb-0", props.modalHeaderClass, {
        "has-background-white": !props.modalHeaderClass,
      })}
    >
      <p className={classNames("modal-card-title", props.modalHeaderClass)}>
        {props.heading}
      </p>
      {!props.hideCloseButton && (
        <button className="delete is-medium" onClick={props.closeModal}>
          Close
        </button>
      )}
    </div>
    <div className="modal-card-body has-text-centered pt-0">
      {props.children}
    </div>
  </div>
)

const ModalBody = props => (
  <Fragment>
    <div className={classNames("modal-content has-text-centered")}>
      {props.children}
    </div>
    {!props.hideCloseButton && (
      <button className="modal-close is-large" onClick={props.closeModal}>
        Close
      </button>
    )}
  </Fragment>
)

export default Modal
