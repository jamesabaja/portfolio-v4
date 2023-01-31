const getPageImages = async () => {
  const MAX_IMAGES = 18
  let allImages = []

  for (let i = 0; i < MAX_IMAGES; i++) {
    const response = await import(
      `../../../../../static/images/people/eddy/IMAGE${i + 1}.png`
    )
    allImages = [...allImages, response.default]
  }
  return allImages
}

export default getPageImages
