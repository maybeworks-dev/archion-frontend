module.exports = {
  siteMetadata: {
    title: 'Simple Healthy News!',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      `gatsby-plugin-typography`,
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: `${__dirname}/src/pages`,
              name: 'src',
          }
      },
      'gatsby-transformer-remark',
  ],
}
