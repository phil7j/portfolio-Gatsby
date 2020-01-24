import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import {
  ReactJs,
  Sass,
  Javascript,
  NodeDotJs,
  Postgresql,
  Python,
  Git,
  Github,
  Redux,
} from "@icons-pack/react-simple-icons"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "hiking.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="About" />
      <Main>
        <Skills>
          <Description>
            <p>
              Software Engineer, traveler, soccer aficionado, coffee junkie,
              family man, with a love for learning new tech and skills.
            </p>
            {/* <p></p> */}
          </Description>
          <Tech>
            <div className="tech-section">
              <h4>Frontend</h4>
              <TechList>
              <div class="tech-item">
                <ReactJs color="#61DAFB" size={28} />
                <p>React</p>
              </div>
              <div class="tech-item">
                <Redux color="#764ABC" size={28} />
                <p>Redux</p>
              </div>
              <div class="tech-item">
                <Sass color="#CC6699" size={28} />
                <p>SASS</p>
              </div>
              <div class="tech-item">
                <Javascript color="#F7DF1E" size={28} />
                <p>Javascript</p>
              </div>

              </TechList>
            </div>
            <div className="tech-section">
              <h4>Backend</h4>
              <TechList>
              <div class="tech-item">
                <NodeDotJs color="#339933" size={28} />
                <p>Node.js</p>
              </div>
              <div class="tech-item">
                <Postgresql color="#336791" size={28} />
                <p>PostgreSQL</p>
              </div>
              <div class="tech-item">
                <Python color="#3776AB" size={28} />
                <p>Python</p>
              </div>
              </TechList>
            </div>

            <div className="tech-section">
              <h4>Collaboration</h4>
              <TechList>
              <div class="tech-item">
                <Git color="#F05032" size={28} />
                <p>Git</p>
              </div>
              <div class="tech-item">
                <Github color="#181717" size={28} />
                <p>Github</p>
              </div>
              </TechList>
            </div>
          </Tech>
        </Skills>
        <Phil>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Me hiking through the Swiss Alps"
            // loading="eager"
            // durationFadeIn={200}
            backgroundColor="black"
          />
        </Phil>
      </Main>
    </>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100%;
  margin: 7rem;
  /* border: 1px solid yellowgreen; */
  @media (max-width: 970px) {
    flex-direction: column;
    margin: 0;
    margin-top: 15%;
  }
`

const Phil = styled.div`
  max-width: 600px;
  min-width: 400px;
  @media (max-width: 600px) {
    min-width: 270px;
    order: -1;
  }
`
const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  /* border: 1px solid blue; */
  div.tech-section {
    margin: 5px;
    width: 45%;
    /* background: white; */
    padding: 10px;
    /* border-radius: 35px; */
    border: 1px solid white;
    h4 {
      text-align: center;
      /* color: black; */
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    div.tech-section {
      width: 100%;

    }
  }
`
const TechList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

 div.tech-item {

   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px;
   p {
    font-family: "Open Sans Regular", sans-serif;
    margin-bottom: 0;
    /* color: black; */
   }
 }
 svg {
   margin: 2px;
 }
`


const Description = styled.div`
  /* border: 1px solid green; */
  p {
    margin: auto;
    font-family: "Glacial Regular", sans-serif;
    max-width: 380px;
    @media (max-width: 600px) {
      width: 100%;
      margin: 5px;
    }
  }
  h1 {
    font-family: "Glacial Regular", sans-serif;
    font-size: 51px;
    text-align: center;
    @media (max-width: 600px) {
      margin-top: 20px;
      font-size: 35px;
    }
  }
  h3 {
    font-family: "Open Sans Regular", sans-serif;
    text-align: center;
    font-size: 26.5px;
    @media (max-width: 600px) {
      /* margin-top: 20px; */
      font-size: 15px;
    }
  }
`
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */

  a {
    text-decoration: none;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Open Sans Bold", sans-serif;
    font-size: 14px;
    width: 140px;
    height: 50px;
    background: white;
    border: none;
    margin-top: 20px;
    transition: color 0.5s ease, background 0.5s ease;
    p {
      margin: 0;
      padding: 0;
    }
    &:hover {
      cursor: pointer;
      color: white;
      background: black;
      border: 1px solid white;
      svg {
        color: white;
      }
    }
  }
  @media (max-width: 970px) {
    margin-top: 35px;
  }
  @media (max-width: 600px) {
    /* margin-top: 20px; */
    width: 100%;
  }
  @media (max-width: 400px) {
    margin-top: 15px;
  }
`
// const ArrowIcon = styled(PlayArrowIcon)`
//   color: black;
//   font-size: 40px;
// `

export default SecondPage
