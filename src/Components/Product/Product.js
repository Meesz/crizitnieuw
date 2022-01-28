import React from "react";
import styled from "styled-components";
import { ColorBar } from "../ColorBar/ColorBar";
import { StyledButton } from "../StyledButton/StyledButton";

const StyledProductContainer = styled.div`
  color: white;
  display: flex;
  padding-top: 5rem;
  padding-bottom: 5rem;
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
  flex-direction: ${(props) => props.order ? "row" : "row-reversed"};
  gap: 100px;
`;

const StyledProductImg = styled.div`
  width: 50rem;
  height: 10rem;
`;

const StyledProductText = styled.div`
  text-align: left;
  margin: 0 auto;
`;

export const Product = (props) => {
  return (
    <>
      <StyledProductContainer order={props.order}>
        <StyledProductImg>
          <img src={props.imageUrl} alt="err"></img>
        </StyledProductImg>
        <StyledProductText>
          <h3>{props.title}</h3>
          <ColorBar />
          <p>{props.description}</p>
          <StyledButton {...props}
            text="Learn more"
            onClick={() => alert("Het werkt!")}
          ></StyledButton>
        </StyledProductText>
      </StyledProductContainer>
    </>
  );
};
