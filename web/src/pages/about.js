import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import {
  ReactJs,
  Sass,
  Javascript,
  NodeDotJs,
  Postgresql,
  Python,
  Git,
  Github,
  Redux
} from "@icons-pack/react-simple-icons"

const About = () => {
  const data = useStaticQuery(graphql`
    query GetPhilPhoto2 {
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
        <FirstSection>
          <Description>
            <h3>Philip Johnson</h3>
            <p>
              Software Engineer, traveler, soccer aficionado, coffee junkie,
              family man, with a love for learning new tech and skills.
            </p>
            {/* <p></p> */}

          </Description>
          <Phil>
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Me hiking through the Swiss Alps"
              // loading="eager"
              // durationFadeIn={200}
              backgroundColor="black"
            />
          </Phil>
        </FirstSection>
        <Skills>
          <Tech>
            <h3>Skills</h3>
            <div className="tech-section">
              <h4>Frontend</h4>
              <TechList>
                <div className="tech-item">
                  <ReactJs color="#61DAFB" size={28} />
                  <p>React</p>
                </div>
                <div className="tech-item">
                  <Redux color="#764ABC" size={28} />
                  <p>Redux</p>
                </div>
                <div className="tech-item">
                  <Sass color="#CC6699" size={28} />
                  <p>SASS</p>
                </div>
                <div className="tech-item">
                  <Javascript color="#F7DF1E" size={28} />
                  <p>Javascript</p>
                </div>
              </TechList>
            </div>
            <div className="tech-section">
              <h4>Backend</h4>
              <TechList>
                <div className="tech-item">
                  <NodeDotJs color="#339933" size={28} />
                  <p>Node.js</p>
                </div>
                <div className="tech-item">
                  <Postgresql color="#336791" size={28} />
                  <p>PostgreSQL</p>
                </div>
                <div className="tech-item">
                  <Python color="#3776AB" size={28} />
                  <p>Python</p>
                </div>
              </TechList>
            </div>

            <div className="tech-section">
              <h4>Collaboration</h4>
              <TechList>
                <div className="tech-item">
                  <Git color="#F05032" size={28} />
                  <p>Git</p>
                </div>
                <div className="tech-item">
                  <Github color="#a9a9a9" size={28} />
                  <p>Github</p>
                </div>
              </TechList>
            </div>
            <div className="tech-section">
              <AniLink
                cover
                duration={0.7}
                bg="#2d2d2d"
                direction="down"
                to="/projects"
              >
                <button>
                  <p>Projects</p>
                  <ArrowIcon />
                </button>
              </AniLink>
            </div>
          </Tech>
        </Skills>
      </Main>
    </>
  )
}

const Main = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  flex-direction: column;
  /* align-items: center; */
  min-height: 100%;
  margin: 2rem;
  /* border: 1px solid yellowgreen; */
  @media (max-width: 970px) {
    margin: 0;
    margin-top: 5%;
  }
`
const FirstSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background: red; */
  @media (max-width: 970px) {
    flex-direction: column;
  }
`
const Phil = styled.div`
  max-width: 600px;
  min-width: 400px;
  @media (max-width: 600px) {
    min-width: 270px;
    order: -1;
    img {
      margin-bottom: 0;
    }
  }
`
const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  /* align-items: stretch; */
  min-height: 123px;
  /* border: 1px solid blue; */
  h3 {
    /* display: block; */
    margin: 20px;
    font-size: 40px;
    font-family: "Glacial Regular", sans-serif;
  }
  div.tech-section {
    /* margin: 5px; */
    max-width: 450px;
    /* background: white; */
    padding: 10px;
    /* border-radius: 35px; */
    border: 1px solid #ffffff26;
    background: #252525;
    h4 {
      text-align: center;
      /* color: black; */
    }
  }
  .tech-section:nth-of-type(2) {
  background: #3a3939;
}
.tech-section:nth-of-type(3) {
  background: #4a4949;
}
.tech-section:nth-of-type(4) {
  background: #ffffff26;
  display: flex;
  flex: 1;
  padding: 0;
  max-width: 200px;
  align-items: stretch;
  @media (max-width: 970px) {
      max-width: 100%;
      margin-bottom: 40px;
    }
}
a {
  display: flex;
  height: 100%;

  flex: 1;
  justify-content: center;
  align-items: center;

}
button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans Bold", sans-serif;
    font-size: 14px;
    width: 100%;
    min-height: 145px;
    background: #ffffff57;
    border: 1px solid #ffffff26;
    /* margin: 5px; */
    color: white;
    transition: color 0.5s ease, background 0.5s ease;
    p {
      margin: 0;
      padding: 0;
    }
    &:hover {
      cursor: pointer;
      color: black;
      background: white;
      border: 1px solid white;
      svg {
        color: black;
      }
    }

  }
  @media (max-width: 970px) {
    flex-direction: column;
    margin-top: 1px;
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
  height: 100%;

  p {
    margin: auto;
    font-family: "Glacial Regular", sans-serif;
    max-width: 380px;
    @media (max-width: 970px) {
    margin-bottom: 20px;
    /* margin-top: 20px; */


  }
    @media (max-width: 600px) {
      width: 100%;
      padding: 25px;
      margin-bottom: 0;
    }
  }

  h3 {
    font-family: "Glacial Regular", sans-serif;
    text-align: center;
    font-size: 40px;
    color: white;
    margin-bottom: 30px;
    @media (max-width: 600px) {
      margin-top: 20px;
      font-size: 20px;
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
const ArrowIcon = styled(PlayArrowIcon)`
  color: white;
  font-size: 40px;
`

export default About
