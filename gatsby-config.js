/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `James Abaja`,
    description: `James' Portfolio Website (v4.0).`,
    author: `James Abaja <jamesabaja.dev@gmail.com>`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-sass`],
}
