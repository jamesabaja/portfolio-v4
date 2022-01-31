const path = require("path")
const { getPeoplePages } = require("./utils/getPeoplePages")

const createPeoplePages = createPage => {
  return new Promise((resolve, reject) => {
    try {
      let peoplePages = getPeoplePages()
      peoplePages.map(peoplePage => {
        createPage({
          path: peoplePage.path,
          component: path.resolve(peoplePage.componentPath),
          context: {
            ...peoplePage.context,
          },
        })
      })

      resolve()
    } catch (error) {
      reject(error)
      console.log(
        `%cError (createPeoplePages): ${error}`,
        "background-color:#d84544; font-color:white;"
      )
    }
  })
}

module.exports = { createPeoplePages }
