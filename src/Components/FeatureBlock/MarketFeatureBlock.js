import React from "react";
import styled from "styled-components";

const MarketWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 45, 72);
  border-radius: 25px;
  width: 25rem;
  height: 7rem;
  gap: 20px;
`;

const MarketImage = styled.div`
img{
    width: 50px;
    height: 50px;
}
`;

const MarketContent = styled.div`
    
`

export const MarketFeatureBlock = (props) => {
  return (
    <>
      <MarketWrapper>
        <MarketImage>
          <img alt="err" src={props.imageUrl}></img>
        </MarketImage>
        <MarketContent>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </MarketContent>
      </MarketWrapper>
    </>
  );
};
