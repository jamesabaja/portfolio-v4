/* eslint-disable */
import React, { useContext, useEffect, useState } from "react"

import getPageImages from "./hooks/getPageImages"
import { AppContext } from "../../../context/AppContext"

const ImageContainer = ({ index, children }) => {
  const { dispatch } = useContext(AppContext)
  const [images, setImages] = useState([])

  const handleClick = () => {
    dispatch({
      type: "SHOW_MODAL",
      payload: {
        isCard: false,
        content: (
          <div>
            {!!images?.[index] ? (
              <img
                src={images?.[index]}
                alt="project_screenshot"
                className="mb-3"
              />
            ) : null}
          </div>
        ),
      },
    })
  }

  const getImages = async () => {
    let tempImages = await getPageImages()
    setImages(tempImages)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <span
      className="is-clickable has-text-gold has-text-weight-bold is-underlined"
      onClick={handleClick}
    >
      {children}
    </span>
  )
}

export default ImageContainer
