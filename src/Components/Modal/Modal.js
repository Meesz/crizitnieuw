import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ModalContainer = styled.div`
  border-radius: 10px;
  background: rgb(22, 45, 72);
  width: 250px;
  height: 250px;
  color: white;
  padding: 6rem 11rem;
  
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  text-align: center;
  
`;

const SubmitButton = styled.button`
  text-align: center;
  border: none;
  outline: none;
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

export const Modal = ({ showModal, setShowModal }) => {
  const handleClick = () => {
    setShowModal((prev) => !prev);
  };


  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper>
            <ModalContainer>
              <ModalContent>
                <h3>Download our Market Data Optimization Whitepaper</h3>
                <p>enter your email</p>
                <form>
                  <input />
                </form>
                <SubmitButton>Submit</SubmitButton>
                <SubmitButton onClick={handleClick}>click me</SubmitButton>
              </ModalContent>
            </ModalContainer>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
