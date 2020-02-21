import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allSanityProject {
        nodes {
          name
          skills
          introText
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(data.allSanityProject.nodes)
  return (
    <>
      <SEO title="Projects" />
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Coming Soon...</h1>
      <ProjectContainer>
        {data.allSanityProject.nodes.map((node, index) => (
          <Project key={index}>
            <div>
            <h3>{node.name}</h3>
            <p>{node.introText}</p>
            </div>
            <ProjectImg

              fluid={node.image.asset.fluid}
              alt="Picture of this project"
              // loading="eager"
              // durationFadeIn={200}
              // backgroundColor="black"
            />
          </Project>
        ))}
      </ProjectContainer>

      <AniLink
        cover
        duration={0.7}
        bg="#2d2d2d"
        direction="down"
        style={{ display: "block", textAlign: "center", marginTop: "80px" }}
        to="/"
      >
        Go back to the homepage
      </AniLink>
    </>
  )
}

const ProjectContainer = styled.article`

  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-wrap: wrap; */
  margin: 2rem;
`

const Project = styled.div`

  display: flex;
  height: 200px;
  min-width: 654px;
  background: #100f0f;
  margin: 10px;
  p {
    font-size: 12px;
    max-width: 350px;
  }
`

const ProjectImg = styled(Img)`
width: 300px;
`

export default Projects
