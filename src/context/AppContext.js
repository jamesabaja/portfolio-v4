import React, { useReducer } from "react"
import { AppReducer } from "./AppReducer"
// import Modal from "../components/Elements/Modal"

export const initialState = {
  modal: {
    isCard: false,
    isActive: false,
    content: null,
    heading: "",
    headerClass: null,
    hideCloseButton: false,
  },
}

const AppContext = React.createContext(initialState)

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, { ...initialState })

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {/* <Modal
        isModalActive={state.modal.isActive}
        closeModal={() => dispatch({ type: "HIDE_MODAL" })}
        heading={state.modal.heading}
        modalHeaderClass={state.modal.headerClass}
        hideCloseButton={state.modal.hideCloseButton}
        isCard={state.modal.isCard}
      >
        {state.modal.content}
      </Modal> */}
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
