### TOOLS USED

- Contentful
- Gatsby Cloud
- Gatsby's file system route API
- Chakra Ui
- Formium
- Lighthouse
- Gatsby-plugin image
- gatsby-plugin-manifest and gatsby-plugin-offline

### OVERVIEW

- CHECK [https://gatsbyjs.com/blog/100days-challenge-1/] for details

- We start by bootstrapping a gatsby site using 'npm init gatsby'
  - we get asked a couple of questions to help in setting up our site (just like 'npm init')
- Once our site gets bootstrapped (pulls a Github repo), we can start up a local server to view our site using 'gatsby develop' or 'npm run develop/start'
  - our site should be active on port 8000
- Now we can start making edits to the site
- We make use of Contentful as our headless CMS (headless meaning; no frontend to the CMS, just backend(APIs and all)). We create a space, obtain access-token and spaceID which goes in 'gatsby-config.js'.(when we run [npm init gatsby],this gets handled for us, so we don't have to add it manually)
- We query our Contentful space using GraphQL queries. We install a plugin ["gatsby-source-contentful"]. This takes care of connecting our app to our Contentful profile/space. It also takes care of adding our content from Contentful into Gatsby's GraphQL query-ables, I believe.
- We also make use of Gatsby's built-in 'File System Route API' to create dynamically generated pages ({contentfulCities.name}.js)
- We make use of Formium for creating a form (backend is handled for us)
- Lighthouse for measuring the performance of our site (SEO,Accessibility, performance, PWA, best practices e.t.c) We make use of the Lighthouse feature available through google chrome developer tools.
- 'Gatsby-plugin image' for handling optimization of our images (sizes across different screen sizes, dimensions etc )
- 'gatsby-plugin-manifest' and 'gatsby-plugin-offline' for PWA capabilities
