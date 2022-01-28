import React from "react";
import styled from "styled-components";

const BlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(32,74,140);
  height: 5rem;
  width: 25rem;
  padding: 10px;
  border-radius: 25px;
  img{
    max-width: 70px;
    maxheight: 70px;
  }
`;

export const CustomerBlock = (props) => {
  return (
    <BlockWrapper>
        <img src={props.imageUrl} alt="err"></img>
    </BlockWrapper>
  );
};