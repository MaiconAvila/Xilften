import React from 'react';
import styled from "styled-components/macro";

const ScreenMobileContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(2,0,36,1) 20%, rgba(0,123,148,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5%;
`;

const Paragraph = styled.p`
  color: #fff;
  font-size: 1.3rem;
  font-weight: medium;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`;

const TitleSearch = styled.h1`
  margin: .5rem 0;
  font-size: 4rem;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 10px;
  display: flex;
  align-items: center;

  span {
    font-size: 5.5rem;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 10px;
  }
`;

const ScreenMobile = () => {
  const widthVideo = `${window.innerWidth - 50}`;

  return (
    <ScreenMobileContainer>
      <TitleSearch>
        <span>x</span>ilfte<span>n</span>
      </TitleSearch>
      <Paragraph>
        Ainda não temos o mobile dessa plataforma, mas estamos trabalhando nisso!
      </Paragraph><br/><br/>
      <Paragraph>
        Enquanto isso veja como está a nossa plataforma desktop.
      </Paragraph><br/><br/>
      <iframe width={widthVideo} height="auto" src="https://www.youtube.com/embed/DQjGfcZZWsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </ScreenMobileContainer>
  )
}

export default ScreenMobile;