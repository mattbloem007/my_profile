const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteURL: config.manifestStartUrl,
    description: "Hire Matthew as a freelance web developer. Get a fast and efficient website created for your business or brand. Matthew is a quick, skilled web developer."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
      // { resolve: `gatsby-source-wordpress`, 
      //     options: {
      //         baseUrl: `localhost/wordpress/index.php`,
      //         protocol: `http`,
      //         hostingWPCOM: false,
      //     },
      //   },
       // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: `WPGraphQL`,
    //     // This is field under which it's accessible
    //     fieldName: `wpgraphql`,
    //     // Url to query from
    //     url: `localhost/wordpress/index.php/graphql`,
    //   },
    // },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
