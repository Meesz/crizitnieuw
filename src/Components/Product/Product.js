import React from "react";
import styled from "styled-components";
import { ColorBar } from "../ColorBar/ColorBar";
import { StyledButton } from "../StyledButton/StyledButton";

const StyledProductContainer = styled.div`
  color: white;
  display: flex;
  padding-top: 5em;
  width: 100%;
  padding-bottom: 5rem;
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
  justify-content: space-around;
  flex-direction: ${(props) => props.order ? "row" : "row-reverse"};
  gap: 100px;
`;

const OrderDirection = {
  1: "row",
  2: "row-reverse",
}

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
