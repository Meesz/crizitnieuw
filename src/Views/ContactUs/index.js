import React from "react";
import { StyledContactSection } from "./styles";
export const ContactUs = (props) => {
  return (
    <StyledContactSection>
      <Content>
        <h2>Contact us</h2>
        <p className="description">
          147 W. 35th street. Suite 1402, New York, NY 10001 (646) 736-4066
        </p>
      </Content>
    </StyledContactSection>
  );
};
