import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import { Github } from "@icons-pack/react-simple-icons"
import LinkIcon from "@material-ui/icons/Link"

export const query = graphql`
  query($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      name
      introText
      skills
      _rawDescription
      github
      livelink
      image {
        asset {
          fixed(width: 350) {
            ...GatsbySanityImageFixed
          }
        }
      }
    }
  }
`

const Project = props => {
  return (
    <>
      <SEO title={props.data.sanityProject.name} />
      <MainInfo>
        <Section1>
          {props.data.sanityProject.image.asset ? (
            <Img fixed={props.data.sanityProject.image.asset.fixed} />
          ) : (
            <DefaultImg>Add Screenshot In Sanity</DefaultImg>
          )}
          <Links>
            <a href={props.data.sanityProject.github}>
            <Github size={38} />
            </a>
            <a href={props.data.sanityProject.livelink}>
            <LinkIcon fontSize="large" />
            </a>
          </Links>
        </Section1>
        <Section2>
          <h2>{props.data.sanityProject.name}</h2>
          <p className="intro">{props.data.sanityProject.introText}</p>
          {/* <p>Tech Used</p> */}
          <TechItems>
            {props.data.sanityProject.skills.map((skill, index) => (
              <TechItem key={index}>{skill}</TechItem>
            ))}
          </TechItems>
        </Section2>
      </MainInfo>
      {props.data.sanityProject._rawDescription ?
      <Description>
        <BlockContent blocks={props.data.sanityProject._rawDescription} />
      </Description>
    :
    <></>
    }
    </>
  )
}
const Description = styled.article`
  /* width: 100%; */
  background: #252525;
  padding: 30px;
  max-width: 800px;
  margin: 0 auto 40px auto;
  font-family: "Glacial Regular";
  ul {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  p {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  @media (max-width: 768px) {
    margin: 20px;
  }
  @media (max-width: 375px) {
    padding: 15px;
    margin: 5px 10px;
  }
`

const MainInfo = styled.div`
  font-family: "Glacial Regular";
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
  margin: 3rem auto 0 auto;
  /* border: 1px solid red; */
  padding: 20px;
  @media (max-width: 768px) {
    padding-bottom: 0;
  }
`
const Section1 = styled.div`
  max-width: 500px;
  padding: 25px;

  @media (max-width: 375px) {
    padding-bottom: 0;
    img {
      margin-bottom: 0;
    }
  }
  /* border: 1px solid blue; */
`
const Links = styled.div`
  display: flex;
  justify-content: center;
  a, a:visited, a:active {
  color: inherit;
  transition: color .2s ease-in-out;
}
a:hover {
    color: #52bf9c;
}
  svg {
    margin: 10px;
  }
`

const Section2 = styled.div`
  max-width: 500px;
  padding: 15px;
  /* margin-top: 50px; */
  h2 {
    /* text-align: center; */
  }
  p.intro {
    /* margin-top: 25px; */
    /* background-color: #252525; */
    /* padding: 10px; */
  }
  /* border: 1px solid green; */
`
const TechItem = styled.div`
  background-color: #252525;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TechItems = styled.div`
  /* border: 1px solid yellow; */
  /* padding: 10px; */
  display: flex;
  flex-wrap: wrap;
`
const DefaultImg = styled.div`
  width: 300px;
  height: 200px;
  background-color: lightgrey;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`

export default Project
