import React from 'react'
import SEO from "../components/seo"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import styled from "styled-components"

export const query = graphql`
    query($slug: String!) {
        sanityProject(slug: {current:{eq: $slug} }){
            name
            introText
          }
    }
`
// Todo: Pull more data from API and style it
// Learn how to render rich text

const Project = (props) => {
    return (
        <>
        <SEO title="Project Page" />
        <h1>{props.data.sanityProject.name}</h1>
        <p>{props.data.sanityProject.introText}</p>
        </>
    )
}

export default Project