const { getCreatePages } = require("./src/services/nodes/getCreatePages")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`

    createPage(page)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  return Promise.all(getCreatePages(createPage, graphql))
}
