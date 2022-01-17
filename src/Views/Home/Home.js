import React, { useState } from "react";
import styled from "styled-components";
import { ColorBar } from "../../Components/ColorBar/ColorBar";
import { Modal } from "../../Components/Modal/Modal";
import { FeatureBlock } from "../../Components/FeatureBlock/FeatureBlock";
import { StyledButton } from "../../Components/StyledButton/StyledButton";
import "./Home.css";
import { Product } from "../../Components/Product/Product";

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
    font-size: 0.8rem;
    font-family: sans-serif !important;
  }
`;

const Header = styled.section`
  position: relative;
  padding-top: 25rem;
  margin-bottom: 10rem;
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
  z-index: 100;
`;

const Featured = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
`;

const StyledProductSection = styled.section`
  margin-bottom: 10rem;
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40rem;
`;

const StyledMarketSection = styled.section`
display: flex;
  background-color: rgb(32, 74, 140);
  height: 10rem;
  width: 100%;
  color: white;
`;

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);

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
          <h2>All your data in one platform</h2>
          <ColorBar />
          <p>
            We are a one stop shop that provides market data analysis tools and
            services for all your data needs.
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
          imageUrl="https://crizit.com/assets/images/product-1-mobile.svg"
          title="Crizit Periscope"
          description="Our cloud-based optimization tool lets you measure vendor data
          usage in real-time, get instant alerts for irregular use
          patterns and receive cost reduction recommendations."
          order={false}
        ></Product>
        <Product
          imageUrl="https://crizit.com/assets/images/product-2-mobile.svg"
          title="Cost Optimization Assessment"
          description="We provide project based in-depth vendor data integration,
                  custom reporting and cost analysis assessment services, so you
                  can optimize data use savings across your entire organization."
        ></Product>
        <Product
          imageUrl="https://crizit.com/assets/images/product-3-mobile.svg"
          title="Custom Software Development"
          description="We build custom fintech focused software we for enterprise
          clients that prioritizes penetration-tested security, UX
          functionality and metrics driven design."
        ></Product>
      </StyledProductSection>
      <StyledMarketSection>
        <div>
        <h2>Market Data costs optimized</h2>
        <ColorBar />
        </div>
      </StyledMarketSection>
    </>
  );
};
