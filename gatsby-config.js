require("dotenv").config();
module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: "Luwafemi's Gatsby#100daysofCode",
    siteUrl: "https://abc.com",
    titleTemplate: "%s · The Real Hero",
    description: "Luwafemi's entry for Gatsby#100daysofCode",
    image: "/images/logoFemi.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@pie_Rsquare",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESSTOKEN,
        spaceId: process.env.SPACEID,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://luwafemi.atwebpages.com/graphql",
        
      },
    },
    // "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-source-formium",
      options: {
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        accessToken: process.env.FORMIUM_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/",
      },
      __key: "images",
    },

    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luwafemi's first PWA`,
        short_name: `Luwafemi`,
        lang: `en`,
        start_url: `/`,
        scope: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logoFemi.png`,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
        },
      },
    },
  ],
};

// NOTE that if you do not include 'siteUrl', Gatsby Cloud build/Gatsby build would throw an error.
