import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  text-align: center;
  border: none;
  outline: none;
  max-width: 15rem;
  border-radius: 0.8rem;
  margin-top: 1rem;
  padding: 0.5rem 0.5rem;
  font-size: 1rem;
  line-height: 2.4rem;
  letter-spacing: 1px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 172, 255);
  text-transform: uppercase;
`;

export const StyledButton = (props) => {
    return (
        <CustomButton>{props.text}</CustomButton>
    )

};
