require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options:{
        spreadsheetId:`1_RjGNtEwEvM3RfpssY1bpPzxxzkDIMFwufZMInODYdE`,
        credentials:{
          client_email:process.env.CLIENT_EMAIL,
          private_key:process.env.PRIVATE_KEY
        }
      }
    },
    // {
    //   resolve: 'gatsby-source-google-sheets',
    //   options: {
    //       spreadsheetId: '1ZIZOSXBu7LXf6GMQI4ndfnK5e61Qx_awEQNB2oGhgN8',
    //       worksheetTitle: 'Sheet1',
    //       credentials: require('./client_secret.json')
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
