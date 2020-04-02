// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {

  siteMetadata: {
    title: `Philip Johnson's Portfolio`,
    description: `Full Stack Software Developer, learn more about me here.`,
    author: `Philip Johnson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
          layout: require.resolve(`./src/components/layout.js`),
        }
   },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'r5jsh8ql',
        dataset: 'production',
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Philips-Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profile.jpeg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
