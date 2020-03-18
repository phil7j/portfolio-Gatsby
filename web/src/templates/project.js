import React, {useEffect} from 'react'
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"


export const query = graphql`
query($slug: String!) {
    sanityProject(slug: {current:{eq: $slug} }){
        name
        introText
        skills
        image {
          asset {
            fixed(width:400) {
                ...GatsbySanityImageFixed
            }
            }
          }
        }
      }
`
// Todo: Pull more data from API and style it
// Learn how to render rich text

const Project = (props) => {
    useEffect(()=>{
    console.log("PROPS===>", props)
    console.log("IMAGE URL====>", props.data.sanityProject.image.asset.fixed.src)
    },[])
    return (
        <>
        <SEO title={props.data.sanityProject.name} />
        <MainInfo>
        <Section1>
        <h2>{props.data.sanityProject.name}</h2>

        <Img
        fixed={props.data.sanityProject.image.asset.fixed}
        />
        </Section1>
        <Section2>
        <p className="intro">{props.data.sanityProject.introText}</p>
        <p>Tech Used</p>
        <TechItems>
    {props.data.sanityProject.skills.map(skill => <TechItem>{skill}</TechItem>)}
        </TechItems>
        </Section2>
        </MainInfo>
        </>
    )
}

const MainInfo = styled.div`
font-family: "Glacial Regular";
display: flex;
flex-wrap: wrap;
max-width: 1200px;
justify-content: center;
margin: 3rem auto;
/* border: 1px solid red; */
padding: 20px;
`
const Section1 = styled.div`
max-width: 500px;
padding: 15px;
/* border: 1px solid blue; */
h2 {
    text-align: center;
}
`
const Section2 = styled.div`
max-width: 500px;
padding: 15px;
margin-top: 30px;
p.intro {
    background-color: #544343;
    padding: 10px;

}
/* border: 1px solid green; */
`
const TechItem = styled.div`
background-color: #544343;
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

export default Project