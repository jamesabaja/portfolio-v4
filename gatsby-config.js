/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.GATSBY_AWS_S3_BUCKET_NAME,
        region: process.env.GATSBY_AWS_S3_REGION,
      },
    },
  ],
}
