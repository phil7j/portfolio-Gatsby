import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ProjectItem from "../components/ProjectItem"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allSanityProject {
        nodes {
          name
          introText
          slug {
            current
          }
          image {
            asset {
              fixed(width: 300) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Projects" />
      <h2 style={{ textAlign: "center", marginTop: "0", marginBottom: 15 }}>Projects</h2>
      <p style={{textAlign: "center", fontFamily: "Glacial Regular", marginBottom: 0}}>What I've been working on lately:</p>
      <div style={{display: "flex", justifyContent: "center"}}>
      <ProjectContainer>
        {data.allSanityProject.nodes.map((node, index) => (
          <ProjectItem slug={node.slug.current} image={node.image.asset.fixed} name={node.name} key={node.slug.current}/>
          ))}
      </ProjectContainer>
      </div>

    </>
  )
}

const ProjectContainer = styled.article`
  display: flex;
  max-width: 1255px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem;
`


export default Projects
