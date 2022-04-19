import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-drupal-test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        // baseUrl: `http://localhost:54348/web/`,
        baseUrl: `https://dev-ds-drupal-test.pantheonsite.io/`,
        apiBase: `jsonapi`,
      },
    },
  ],
}

export default config
