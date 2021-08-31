/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `{
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
          }
        }
      }
    }`
  )
  .then(result => {
    if (result.errors) {
      console.error(result.errors);
      throw result.errors
    }

    result.data.allMdx.edges.forEach(({ node }) => {
      const { sourceInstanceName } = node.parent
      const slug = node.fields.slug.replace(/^\/(\d*_)/, '/')

      createPage({
        path: `/${sourceInstanceName}${slug}`,
        component: path.resolve(`./src/templates/${sourceInstanceName}.js`),
        context: {
          id: node.id,
          slug
        }
      });
    });
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

  }
}
