module.exports = {
  siteMetadata: {
    title: "Gatsby-Proof-of-Concept",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "giWFzo4HHrqGoKMEfqWorDhfgEa6UVUcMsA_w9S-7V4",
        spaceId: "bqt3us3ibarj",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
