import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import MyForm from "../components/MyForm"
import { Github, Linkedin } from "@icons-pack/react-simple-icons"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
  query {
    sanityPeople {
      linkedin
      github
    }
  }
  `)
  return (
    <>
      <SEO title="Contact" />
      <Container>
        <FindMe>
          <h4>Find me Online:</h4>
          <a href={data.sanityPeople.github}>
          <Github /*color="teal"*/ size={40} />
          </a>
          <a href={data.sanityPeople.linkedin}>

          <Linkedin /*color="#2867B2"*/ size={40} />
          </a>
        </FindMe>
        <h3>Comments or inqueries?</h3>
        <MyForm />
      </Container>
    </>
  )
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto;
    font-weight: 400;
    margin-top: 30px;
    padding: 10px;
  }
`

const FindMe = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  a, a:visited, a:active {
  color: inherit;
  transition: color .2s ease-in-out;
}
  a:nth-child(2){
    color: teal;
  }
  a:nth-child(3){
    color:#2867B2;
  }
  h4 {
    font-family: "Glacial Regular", sans-serif;
    font-weight: 500;
    margin: 10px;
    font-size: 30px;
  }
  svg {
    margin: 10px;
  }
  a:hover {
    color: #52bf9c;
}
`
export default Contact
