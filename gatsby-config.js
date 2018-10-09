module.exports = {
  siteMetadata: {
    title: `Emergent Systems`, 
    siteUrl: `https://emergent.systems`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`, 
      options: {
        trackingId: `UA-127173512-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 779, 
              backgroundColor: `rgb(252, 250, 243)`,
              wrapperStyle: {
              background: `rgb(252, 250, 243)`,
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`, 
            options: {
              inlineCodeMarker: '>', 
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
