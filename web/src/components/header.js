import { Link } from "gatsby"
import React, {useState, useEffect} from "react"
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';



const Header = () => {
  let [open, setOpen] = useState(false)
  useEffect(()=>{
    console.log("Is it open?", open)
  },[open])
  return (
  <>
  <Container>
    <Hamburger open={open} onClick={()=>setOpen(!open)} />
    <Menu open={open}>


      <NavItem>
        <Link
          onClick={()=>setOpen(false)}
          to="/"
        >
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link
          onClick={()=>setOpen(false)}
          to="/about"
        >
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/projects"
          onClick={()=>setOpen(false)}
        >
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/contact"
          onClick={()=>setOpen(false)}
        >
          Contact
        </Link>
      </NavItem>
    </Menu>
  </Container>
  </>
)}

const Hamburger = styled(MenuIcon)`
  /* align-self: flex-end; */
  display: none;
  font-size: 50px;
  padding: 0px 15px;
  color: white;
  height: 100%;
  box-sizing: content-box;
  z-index: 100;
  &:hover {
    color: black;
    background: white;
  }
  @media (max-width: 600px) {
        display: block;

  }
`

const Container = styled.div`
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1.45rem;
      height: 70px;
      z-index: 100;
`

const Menu = styled.div`
      display: flex;
      justify-content: flex-end;
      /* margin: 0 auto; */
      max-width: 960;
      height: 100%;
      opacity: 1;
      /* border: ${props => props.open ? "4px solid green" : "4px solid red"}; */
      transition: background 0.5s linear, color 0.5s linear;
      @media (max-width: 600px) {
        transition: right 0.3s linear;
        position: absolute;
        /* display: ${props => props.open ? "flex" : "none"}; */
        right: ${props => props.open ? "0" : "-900px"};
        /* opacity: ${props => props.open ? "1" : "0"}; */
        background: black;
        flex-direction: column;
        width: 100%;
        align-items: center;
        z-index: 99;
  }


`
const NavItem = styled.div`
      height: 100%;
      display: flex;
      align-items: center;
      /* transition: all 0.5s ease; */

      a {
        font-family: "Open Sans Regular", sans-serif;
        font-size: 25px;
        text-decoration: none;
        color: white;
        padding: 20px 20px;
        transition: background 0.8s ease, color 0.8s ease;
        /* &:hover {
          color: black;
        } */
        @media (max-width: 600px) {
        /* width: 100%; */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 10%;

  }
        }
      &&:hover {
        background: white;
        a {
          color: black;
        }
      }
      @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
      }
`



export default Header
