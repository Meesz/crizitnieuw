import React from "react";
import styled from "styled-components";
import { ColorBar } from "../ColorBar/ColorBar";
import { StyledButton } from "../StyledButton/StyledButton";

const StyledProductContainer = styled.div`
  color: white;
  display: flex;
  padding-top: 5rem;
  max-width: 70rem;
  margin: 0 auto;
  flex-direction: ${props => props.order ? "row" : "row-reverse"};
`;



const StyledProductImg = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledProductText = styled.div`
  text-align: left;
  margin: 0 auto;
  padding-top: 100px;
`;

export const Product = (props) => {
  return (
    <>
      <StyledProductContainer>
        <StyledProductImg>
          <img src={props.imageUrl} alt="err"></img>
        </StyledProductImg>
        <StyledProductText>
          <h3>{props.title}</h3>
          <ColorBar />
          <p>{props.description}</p>
          <StyledButton text="Learn more"></StyledButton>
        </StyledProductText>
      </StyledProductContainer>

    </>
  );
};
