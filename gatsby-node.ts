const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "projects"}}}}}) {
        nodes {
          content
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          title
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `)
  const templatePath = path.resolve(`src/pages/post.tsx`)
  
  result.data.allWpPost.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: templatePath,
      context: {
        content: node.content,
        title: node.title,
        tags: node.tags.nodes
      },
    })
  })
}