import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 25px;
    align-items: center;
    margin: 0 auto;
    background-color: blue;
    height: 500px;
    width: 500px;
`

const StyledContent = styled.div`

`


export const Login = () => {
    return(
        <StyledWrapper>
            <StyledContent>
                <input></input>
            </StyledContent>
        </StyledWrapper>
    )
}