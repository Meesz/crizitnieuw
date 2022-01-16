import React from "react";
import styled from "styled-components";

const Featureblock = styled.div`
  background-color: rgb(19, 37, 58);
  height: 10rem;
  z-index: 1;
  border-radius: 25px;
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-bottom: 1rem;
`;

const FeatureImg = styled.div`
  margin-top: -2rem;
  z-index: 1;
  img{
    width: 6rem;
    height: 6rem;
  }
  align-items: center;
  display: inline-flex;
`;

const FeatureDescription = styled.div`
    justify-content: center;
  align-items: center;
  padding-left: 3rem;
  margin-right: 3rem;
  text-align: center;
`;


export const FeatureBlock = (props) => {
  return (
    <>
      <Featureblock>
        <FeatureImg>
          <img className="" src={props.imageUrl} alt="err"></img>
        </FeatureImg>
        <div className="feature-title">
          <h4>{props.title}</h4>
        </div>
        <FeatureDescription>
          <p>{props.description}</p>
        </FeatureDescription>
      </Featureblock>
    </>
  );
};
