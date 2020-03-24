import React from "react"
import styled from 'styled-components'
import SEO from "../components/seo"
import MyForm from "../components/MyForm"


const Contact = () => (
  <>
    <SEO title="Contact" />
    <Container>
      <h3>Comments or inqueries?</h3>
      <MyForm />
    </Container>
  </>
)

const Container = styled.article`
display: flex;
flex-direction: column;
align-items: center;
h3 {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto;
  font-weight: 100;
  margin-top: 50px;
  padding: 10px;
}
`

export default Contact
