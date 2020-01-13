import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/image"
import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Projects" />
    <h1 style={{textAlign: "center", marginTop: "80px"}}>Coming Soon...</h1>
    <AniLink cover duration={0.7} bg="#2d2d2d" direction="down" style={{display: "block", textAlign: "center", marginTop: "80px"}} to="/">Go back to the homepage</AniLink>
  </>
//  <>
//     <SEO title="About" />
//     <Main>
//       <Phil>
//         <Image />
//       </Phil>
//       <Headline>
//         <h1>Philip Johnson</h1>
//         <h3>Software Engineer</h3>
//         <AniLink cover duration={0.7} bg="#2d2d2d" direction="down" to="/about">
//           <button>
//             <p>Learn More</p>

//           </button>
//         </AniLink>
//       </Headline>
//     </Main>
//   </>
)


const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100%;
  margin: 10rem;
  @media (max-width: 970px) {
    flex-direction: column;
    margin: 0;
    margin-top: 15%;
  }
`

const Phil = styled.div`
  max-width: 500px;
  min-width: 300px;
  @media (max-width: 600px) {
    min-width: 270px;
  }
`

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
