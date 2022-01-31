const createPageKeys = require("./utils/createPageKeys")

const getCreatePages = (createPage, graphql) => {
  let basePath = "./"
  return createPageKeys.map(createPageKey => {
    const pageExports = require(`${basePath}${createPageKey}.js`)

    return pageExports[createPageKey](createPage, graphql)
  })
}

module.exports = { getCreatePages }
