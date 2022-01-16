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
  padding-top: 10rem;
  padding-bottom: 15rem;
  margin-bottom: 10rem;
  color: white;
  h4 {
    font-size: 4rem;
    line-height: 1rem;
  }
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

  .checktext {
    font-family: "Nunito", sans-serif;
    max-width: 25rem;
  }
`;

const Featured = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledProductSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
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
          <CheckSection>
            <span className="checkmark">&#10003;</span>
            <p className="checktext">SEE CLEARLY</p>
            <span className="checkmark">&#10003;</span>
            <p className="checktext">TAKE ACTION</p>
            <span className="checkmark">&#10003;</span>
            <p className="checktext">OPTIMIZE COST</p>
          </CheckSection>
          <ColorBar />
          <h4>Control Your Data Costs</h4>
          <p>
            Monitor use in real-time, identify inefficient sourcing and reduce
            reference data spends
          </p>
          <StyledButton
            text="Request whitepaper"
            onClick={handleModal}
          ></StyledButton>
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
          order={true}
        ></Product>
        <Product
          imageUrl="https://crizit.com/assets/images/product-2-mobile.svg"
          title="Cost Optimization Assessment"
          description="We provide project based in-depth vendor data integration,
                  custom reporting and cost analysis assessment services, so you
                  can optimize data use savings across your entire organization."
          order={false}
        ></Product>
        <Product
          imageUrl="https://crizit.com/assets/images/product-3-mobile.svg"
          title="Custom Software Development"
          description="We build custom fintech focused software we for enterprise
          clients that prioritizes penetration-tested security, UX
          functionality and metrics driven design."
          order="1"
        ></Product>
      </StyledProductSection>
    </>
  );
};
