## MATERIALS USED:

- Gatsby's #100DaysOfCode YouTube videos
- Gatsby Docs
-

## Commands

- npm init gatsby (This is an alternative to [gatsby new AppName], it generates a new Gatsby site for us, it asks a couple of questions required to set up our site)

## Errors

- Using Git bash(external) to run [npm init gatsby] gave some issues.
  - SOLUTION: Use git bash within the integrated terminal (Just click on the dropdown and `Select Default Shell`)
- "npm ERR! Unexpected end of JSON input while parsing near '...int-scope":"^5.0.0"," ...... while gatsby's trying to install
  - SOLUTION: run [npm cache clean --force]
- [Can't resolve 'fs' in 'C:\Users\oluwafemi\Desktop\WEB\WEB D\zCrashCourses\Gatsby100DaysOfCode\GatsbyPOC\node_modules\dotenv\lib']
  [If you're trying to use a package make sure that 'fs' is installed. If you're trying to use a local file make sure that the path is correct.]
  (I encountered this issue while using Formium)

  - SOLUTION: Add the following to gatsby-node.js file.

    ```js
    exports.onCreateWebpackConfig = ({ actions }) => {
      actions.setWebpackConfig({
        node: {
          fs: "empty",
        },
      });
    };
    ```

- Had issues with Webpack on switching from Gatsby v2 to v3 [BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default. This is no longer the case. Verify if you need this module and configure a polyfill for it.]

  - SOLUTION(check Gatsby docs for migrating from v2 to v1): We have to add some configs to 'gatsby-node.js' file

- ******** Challenge 3: WordPress Blog (#100DaysOfGatsby) ********
  - In order to set up/configure Gatsby cloud for my wordpress site, I had to make it publicly hosted( as LocalWp's implementation wasn't working....throwing an error 'GraphQL request to http://luwafemi.local/graphql failed.)
   - SOLUTION:
    - I searched for free Wordpress hosting sites(https://smartblogger.com/free-wordpress-hosting/). Worked with two (000webhost,Byet.host and awardspace). 000webhost had outdated php, so WPGatsby couldn't be installed, next, I tried out Byet.host, didn't work as well, tried awardspace and voila! problem solved.

## USING FORMIUM

- Formium is a Form library/plugin. It allows us integrate drag and drop forms into our web apps. It also provides a CMS(backend) for form submissions.
- Quite frankly, I believe Formium dey ment. It contains a number of bugs.
- I couldn't get Radio input to function properly ( a fault of theirs). So I'd prolly make use of other options next time (e.g. Formik)

### How does Formium work?

- Using Formium with Gatsby, we basically need three packages/plugins : @formium/client, @formium/react and gatsby-source-formium
- We then add 'gatsby-source-formium' to gatsby-config.js like so:
  ```js
       {
     resolve: "gatsby-source-formium",
     options: {
       projectId: process.env.GATSBY_FORMIUM_PROJECTID,
       accessToken: process.env.FORMIUM_ACCESS_TOKEN,
     },
   },
  ```
- We get Project Id and Access token from Formium dashboard

- We create our form on Formium Dashboard, and bring it in/render it in our website using the installed plugins.
- On rendering, Formium has its default layout. To make use of custom components (e.g. Chakra Ui, Bootstrap), we make use of 'props' provided by Formium API (Check codebase for more clarity/details)

### Lighthouse

- Lighthouse for measuring the performance of our site (SEO,Accessibility, performance, PWA, best practices e.t.c) We make use of the Lighthouse feature available through google chrome developer tools.
- To use Lighthouse with Gatsby, we first have to create a build/production version of our site by running [Gatsby build] and then serving it [Gatsby serve]. The development version isn't as optimized.

### Gatsby-plugin image

- Gatsby-plugin image for handling optimization of our images (image sizes across different screen sizes, dimensions etc )
- Had issues initially, configuring it for dynamic images coming from contentful. The **solution** was to update "gatsby-source-contentful" to the latest version.

### gatsby-plugin-manifest and gatsby-plugin-offline

- After configuration, we can check the status of out app's PWA capabilities using 'Application' tab of Chrome dev tools
- These plugins are used for PWA capabilities
  - plugin-manifest: to construct and inject 'manifest.json' file (a standard file that gives the browser info about our webapp e.g. home screen icons, name, etc ) to the output HTML file
  - plugin-offline: to make our app work offline

### gatsby-plugin-react-helmet and react-helmet

- react-helmet: This reusable React component will manage all of your changes to the document head. Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly (From the docs)
  - Basically, what this React plugin does is to take meta-tags that we specify, and add it to the \<head> segment of the output HTML (Keep in mind that, React/Gatsby inserts the transpiled React/Gatsby code into a \<div> in the \<body> segment, so 'react-helmet' is a way to access the \<head> segment)
- gatsby-plugin-react-helmet: Gatsby’s react helmet plugin provides drop-in support for server rendering data added with React Helmet. Using the plugin, attributes you add to React Helmet will be added to the static HTML pages that Gatsby builds (From the docs)

## Challenge 3: WordPress Blog (#100DaysOfGatsby)

- To integrate Wordpress into our Gatsby site, we do the following;
  - Install [WP GraphQL] and [ WPGatsby ] plugins on our Wordpress site(through wordpress dashboard/admin site)
  - Install [ gatsby-source-wordpress ] in our Gatsby site and configure it in gatsby-config.js
  - "WPGatsby and gatsby-source-wordpress must be used together"
- Add your "Gatsby Builds Webhook URL"(gotten from Gatsby cloud or otherwise) to GatsbyJS settings in your Wordpress site (I think this is needed for previews .... so, any changes in your Wordpress site is forwarded to the attached Webhook
