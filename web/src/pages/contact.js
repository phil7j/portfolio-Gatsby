import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"

const Contact = () => (
  <>
    <SEO title="Contact" />
    <h1 style={{textAlign: "center", marginTop: "80px"}}>Coming Soon...</h1>
    <AniLink cover duration={0.7} bg="#2d2d2d" direction="down" style={{display: "block", textAlign: "center", marginTop: "80px"}} to="/">Go back to the homepage</AniLink>
  </>
)

export default Contact
