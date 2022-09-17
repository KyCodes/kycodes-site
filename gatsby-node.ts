const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "projects"}}}}}) {
        nodes {
          content
          modified(formatString: "MMM Do YYYY")
          date(formatString: "MMM Do YYYY")
          slug
          featuredImage {
            node {
              altText
              gatsbyImage(placeholder: BLURRED, aspectRatio: 16.10, width: 800, height: 500, formats: WEBP)
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
        tags: node.tags.nodes,
        imgAlt: node.featuredImage.node.altText,
        imgSrc: node.featuredImage.node.gatsbyImage,
        modified: node.modified,
        date: node.date
      },
    })
  })
}