import React from "react";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <HeroContainer>
      <MainTitle>Fitness? Anytime? Anywhere? You're kidding...</MainTitle>
      <SubTitle>No, we're not. That's Anywhere Fitness.</SubTitle>
      <Gif src="https://giphy.com/embed/rDIbIO2O7UStO" width="650px" frameBorder="0" className="giphy-embed" allowFullScreen></Gif>
      </HeroContainer>
  )
}

export default LandingPage;

const HeroContainer = styled.div`
  width: 100%;
  padding: 7% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

const Gif = styled.iframe`
  margin-top: 4%;
`;