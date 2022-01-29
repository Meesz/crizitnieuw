import React from "react";
import styled from "styled-components";
import Logo from "../Navbar/crizit.jpg"

const StyledFooterContainer = styled.div`
  padding: 2em;
  max-width: 70em;
  margin: 0 auto;
  bottom: 0;
`;

const FooterBackGround = styled.div`
  padding-top: 5rem;
  background: rgb(4, 15, 27) none repeat scroll 0% 0%;
`;

const FooterContent = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FooterInformation = styled.div`
  display: flex;
  flex-direction: row;
  color: rgb(181, 183, 202);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  color: rgb(181, 183, 202);
`;

const FooterCopyright = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  color: white;
`;



export const Footer = () => {
  return (
    <FooterBackGround>
      <StyledFooterContainer>
        <FooterContent>
          <FooterInformation>
            Crizit LLC
            <br />
            147 W. 35th St. Suite 1402
            <br />
            New York, NY 10001 USA
            <br />
            
            Phone: (646) 736-4066
            <br />
            Email: contact@crizit.com
          </FooterInformation>
          <FooterLinks>
            <div>
              <b>Company</b>
              <p>Contact</p>
            </div>
            <div>
              <b>Focus</b>
              <p>Periscope</p>
              <p>Analysis</p>
              <p>Development</p>
            </div>
          </FooterLinks>
        </FooterContent>
        <hr />

        <FooterCopyright>
          <div>
            <img src={Logo} alt="err"></img>
          </div>
          <div>© 2022 Crizit</div>
        </FooterCopyright>
      </StyledFooterContainer>
    </FooterBackGround>
  );
};
