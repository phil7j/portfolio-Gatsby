import React, {useState} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MenuIcon from '@material-ui/icons/Menu';

const MobileMenu = () => {
    let [open, setOpen] = useState(false)
    return (
        <>
        <NavItem>
        <Hamburger />
        </NavItem>
        <MobileNav open={open} onClick={()=> {
            console.log("Open state is", open)
            return setOpen(true)}}>
        {/* <NavItem>
        <Link
          to="/"
        >
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/about"
        >
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/projects"
        >
          Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/contact"
        >
          Contact
        </Link>
      </NavItem> */}
        </MobileNav>
        </>
)
}

const MobileNav = styled.div.attrs(props => ({
    background: props.open ? "yellow" : "red",
  }))`
  width: 100vw;
  height: 100vh;
  /* background: orange; */
  z-index: 10;
  position: absolute;
  /* top: 0; */
`

const NavItem = styled.div`
      height: 100%;
      display: flex;
      align-items: center;
      transition: all 0.5s ease;
      a {
        font-family: "Glacial Regular", sans-serif;
        font-size: 25px;
        text-decoration: none;
        color: white;
        padding: 20px 20px;
        transition: all 0.8s ease;
        &:hover {
          color: black;
        }
        @media (max-width: 600px) {
        display: none;
  }
        }
      &:hover {
        background: white;
      }
`

const Hamburger = styled(MenuIcon)`
  display: none;
  font-size: 50px;
  margin: 10px;
  &:hover {
    color: black;
  }
  @media (max-width: 600px) {
        display: block;

  }
`

export default MobileMenu