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
          slug {
            current
          }
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
  // TODO: Style Projects Page. Make design look cleaner and more interesting.
  return (
    <>
      <SEO title="Projects" />
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Projects</h1>
      <ProjectContainer>
        {data.allSanityProject.nodes.map((node, index) => (
          <AniLink
          cover
          duration={0.7}
          bg="#2d2d2d"
          direction="down"
          style={{ display: "block", textAlign: "center", marginTop: "80px" }}
          to={"/projects/"+`${node.slug.current}`}
        >
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
          </AniLink>
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

  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem;
`

const Project = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 550px;
  background: #333333;
  margin: 10px;
  transition: all .3s ease;
  border: 2px solid #333333;
  color: white;
  text-decoration: none;
  div {
    padding: 15px;
  p {
    font-size: 12px;
    max-width: 350px;
  }
  }
  &:hover {
    box-shadow: 0px 0px 90px 55px rgba(77,77,77,1);
  }
`

const ProjectImg = styled(Img)`
width: 300px;
`

export default Projects
