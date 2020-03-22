import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"

const ProjectItem = props => {
  return (
    <>
        <LinkWrapper
          cover
          duration={0.7}
          bg="#2d2d2d"
          direction="down"

          to={"/projects/" + `${props.slug}`}
        >
          <Project>
            <ProjectImg
              fixed={props.image}
              alt="Picture of this project"
              objectPosition="0"
              // loading="eager"
              // durationFadeIn={200}
              // backgroundColor="black"
            />
            <h3>{props.name}</h3>
          </Project>
        </LinkWrapper>
    </>
  )
}

const LinkWrapper = styled(AniLink)`
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    background: black;
    transition: background .3s ease-in-out;
    &:hover {
        background: #3f3a3a;

    }
/* @media (max-width: 970px) {
    width: 100%;
  } */
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 240px;
  /* width: 100%; */
  /* background: #333333; */
  margin: 10px;
  color: white;
    h3 {
          font-size: 25px;
          font-family: "Glacial Regular";
          margin-bottom: 10px;

  }
`

const ProjectImg = styled(Img)`
  /* display: block!important; */
  min-height: 205px;

`

export default ProjectItem
