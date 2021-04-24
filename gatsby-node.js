const path = require("path")
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  });
};
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blog.js")

  return graphql(`
  query  {
    allWpPost {
      nodes {
        uri
        id
      }
    }
  }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allWpPost.nodes.forEach(({ uri }) => {
      createPage({
        path: '/blog'+ uri,
        component: postTemplate,
        context:{pathh:uri}
      })
    })
  })
}




// Note that 'path' would be passed down to the template as variable '$path'. To create other variable names, we would have to make use of 'context' parameter(check the docs 
// for more info[https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/])