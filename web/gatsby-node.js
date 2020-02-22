const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const projectTemplate = path.resolve('./src/templates/project.js')
    const res = await graphql(`
    query {
        allSanityProject {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `)
    res.data.allSanityProject.edges.forEach((edge) => {
        createPage({
            component: projectTemplate,
            path: `/projects/${edge.node.slug.current}`,
            context: {
                slug: edge.node.slug.current
            }
        })
    })
}