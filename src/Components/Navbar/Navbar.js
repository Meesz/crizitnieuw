import React from "react";
import LogoImg from "./crizit.jpg";
import styled from "styled-components";

export const NavBar = ({ state, setState }) => {
  return (
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
  );
};

const Nav = styled.div`
  background-color: rgb(19, 37, 58) transparent;
  top: 0px;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 5rem;
`;

const NavItems = styled.div`
`;

const NavContent = styled.div`
  // @media (min-width: 768px){
  //   padding: 0 40rem;
  // }
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  margin: 0 40rem;
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
      border-bottom: solid 0.2rem rgb(0, 172, 255);
      color: white;
      padding-bottom: 10px;
    }
  }
`;
