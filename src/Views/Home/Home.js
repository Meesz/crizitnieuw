import React, { useState } from "react";
import styled from "styled-components";
import { ColorBar } from "../../Components/ColorBar/ColorBar";
import { Modal } from "../../Components/Modal/Modal";
import { FeatureBlock } from "../../Components/FeatureBlock/FeatureBlock";
import { StyledButton } from "../../Components/StyledButton/StyledButton";
import { Product } from "../../Components/Product/Product";
import { MarketFeatureBlock } from "../../Components/FeatureBlock/MarketFeatureBlock";
import { CustomerBlock } from "../../Components/FeatureBlock/CustomerBlock";

const CheckSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-family: Poppins, sans-serif;
  .checkmark {
    color: green;
    padding-right: 0.5rem;
  }

  .checktext {
    padding-right: 0.5rem;
    color: white;
    font-size: 0.7rem;
    font-family: sans-serif;
    font-weight: bold;
  }
`;

const Header = styled.section`
  padding-top: 15rem;
  margin-bottom: 5rem;
  background-image: url("https://crizit.com/assets/images/home-hero-bg-desktop.svg");
  background-position: right bottom;
  background-repeat: no-repeat;
  height: 23rem;
`;

const StyledInformation = styled.section`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto;
  h2 {
    font-size: 3rem;
    max-width: 25rem;
    color: white;
    text-align: center;
  }

  .content {
    margin-top: -10rem;
  }

  .checktext {
    font-family: "Nunito", sans-serif;
    max-width: 25rem;
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  margin-top: -10rem;
  margin-bottom: 10rem;
  color: white;
  letter-spacing: 1px;
  h1 {
    font-size: 4.4rem;
    line-height: 0.1rem;
    font-weight: bold;
  }
  p {
    font-family: "Nunito", sans-serif;
    font-size: 2rem;
    max-width: 50rem;
    line-height: 3rem;
  }
`;

const Featured = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
`;

const StyledProductSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
  P {
    font-size: 1.3rem;
    line-height: 1.5rem;
  }

  h3 {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
`;

const StyledMarketSection = styled.section`
  display: flex;
  background-color: rgb(32, 74, 140);
  padding-left: 25%;
  padding-right: 25%;
  justify-content: space-between;
  align-items: center;
  height: 15rem;
  color: white;
  h2 {
    font-size: 3rem;
  }
`;

const AuditSection = styled.section`
  padding: 10rem 0px;
  text-align: center;
  background-repeat: no-repeat;
  background-image: url("https://crizit.com/assets/images/cta-bg.svg");
  background-color: rgb(6, 18, 30);
`;

const AuditContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.3rem;
  }

  h1 {
    font-size: 4rem;
  }
`;

const CustomerSection = styled.section`
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  color: white;
  height: 10rem;
  background: rgb(22, 45, 72) none repeat scroll 0% 0%;

  .title {
    color: rgb(180, 183, 204);
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const CustomerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState("");
  const handleModal = () => {
    setOpenModal((prev) => !prev);
    console.log(openModal);
  };

  return (
    <>
      <Modal showModal={openModal} setShowModal={setOpenModal}></Modal>
      <StyledHomeContainer>
        <Header>
          <HeaderContent>
            <CheckSection>
              <span className="checkmark">&#10003;</span>
              <p className="checktext">SEE CLEARLY</p>
              <span className="checkmark">&#10003;</span>
              <p className="checktext">TAKE ACTION</p>
              <span className="checkmark">&#10003;</span>
              <p className="checktext">OPTIMIZE COST</p>
            </CheckSection>
            <ColorBar />
            <h1>Control Your Data Costs</h1>
            <p>
              Monitor use in real-time, identify inefficient sourcing and reduce
              reference data spends
            </p>
            <StyledButton
              text="Request whitepaper"
              onClick={handleModal}
            ></StyledButton>
          </HeaderContent>
        </Header>
        <StyledInformation>
          <h2>
            All your data
            <br /> in one platform
          </h2>
          <ColorBar />
          <p>
            We are a one stop shop that provides market data <br /> analysis
            tools and services for all your data needs.
          </p>
        </StyledInformation>
        <Featured>
          <FeatureBlock
            title="Cost Reduction Tools"
            description="Use Crizit's Periscope tool to monitor and optimize your data usage"
            imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"
          ></FeatureBlock>
          <FeatureBlock
            title="Cost Analysis Services"
            description="We provide vendor data integration and usage optimization assessments"
            imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"
          ></FeatureBlock>
          <FeatureBlock
            title="Software Engineering Services"
            description="We are developers focused on building custom fintech software "
            imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"
          ></FeatureBlock>
        </Featured>
      </StyledHomeContainer>
      <StyledProductSection>
        <Product
          order={false}
          imageUrl="https://crizit.com/assets/images/product-1-mobile.svg"
          title="Crizit Periscope"
          description="Our cloud-based optimization tool lets you measure vendor data
          usage in real-time, get instant alerts for irregular use
          patterns and receive cost reduction recommendations."
        ></Product>
        <Product
          imageUrl="https://crizit.com/assets/images/product-2-mobile.svg"
          title="Cost Optimization Assessment"
          description="We provide project based in-depth vendor data integration,
                  custom reporting and cost analysis assessment services, so you
                  can optimize data use savings across your entire organization."
          order={true}
        ></Product>
        <Product
          imageUrl="https://crizit.com/assets/images/product-3-mobile.svg"
          title="Custom Software Development"
          description="We build custom fintech focused software we for enterprise
          clients that prioritizes penetration-tested security, UX
          functionality and metrics driven design."
          order={true}
        ></Product>
      </StyledProductSection>
      <StyledMarketSection>
        <div>
          <h2>
            Market Data <br /> Costs Optimized
            <ColorBar />
          </h2>
        </div>
        <MarketFeatureBlock
          imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"
          title="$6 000 000"
          description="Saved in data costs"
        ></MarketFeatureBlock>
        <MarketFeatureBlock
          imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"
          title="30+"
          description="Assessments Conducted"
        ></MarketFeatureBlock>
      </StyledMarketSection>
      <CustomerSection>
        <div className="title">
          <p>Our happy customers</p>
        </div>
        <CustomerContent>
          <CustomerBlock imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"></CustomerBlock>
          <CustomerBlock imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"></CustomerBlock>
          <CustomerBlock imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"></CustomerBlock>
          <CustomerBlock imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"></CustomerBlock>
          <CustomerBlock imageUrl="https://s3-eu-west-1.amazonaws.com/media.belsimpel.nl/Nieuws/Google-app-logo.png"></CustomerBlock>
        </CustomerContent>
      </CustomerSection>
      <AuditSection>
        <AuditContent>
          <h1>Lets get started</h1>
          <p>
            Our market data cost reduction tool is easy to use and <br /> your
            first audit is free.
          </p>
          <StyledButton text="Request Audit"></StyledButton>
        </AuditContent>
      </AuditSection>
    </>
  );
};
