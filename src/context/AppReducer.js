import { initialState } from "./AppContext"

const SHOW_MODAL = "SHOW_MODAL"
const HIDE_MODAL = "HIDE_MODAL"

export let AppReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, modal: { ...action.payload, isActive: true } }
    case HIDE_MODAL:
      return { ...state, modal: { ...initialState.modal } }
    default:
      return
  }
}
