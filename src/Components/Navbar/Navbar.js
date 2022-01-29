import React, {useState} from "react";
import LogoImg from "./crizit.jpg";
import styled from "styled-components";
import "./styles.css"

export const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 40){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={colorChange ? 'navbar transparent' : 'navbar'}>
      <Nav>
      <NavContent>
          <img src={LogoImg} alt="err"></img>
        <NavItems>
          <a href="/">
            Periscope
          </a>
          <a href="/">
            Analysis
          </a>
          <a href="/">
            Development
          </a>
          <a href="/">
           Contact us
          </a>
        </NavItems>
      </NavContent>
      </Nav>
      </div>
  );
};

const Nav = styled.div`

`;


const NavItems = styled.div`
`;

const NavContent = styled.div`
  // @media (min-width: 768px){
  //   padding: 0 40rem;
  // }
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 125em;
  a {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 2.6rem;
    text-decoration: none;
    margin: 1rem;
    &:hover{
      user-select: none;
      text-decoration: none;
      border-bottom: solid 0.4rem rgb(0, 172, 255);
      color: white;
      padding-bottom: 10px;
    }
  }
`;
