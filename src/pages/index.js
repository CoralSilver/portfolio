import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/layout";
import StyledBackgroundSection from '../components/backgroundImage';
import SEO from "../components/seo";
import { Container } from "../components/container.css";
import Social from "../components/social/social";

const IndexPage = ({ path }) => {
  return (
  <StyledBackgroundSection>
    <Layout path={path}>
      <SEO title="Home" />
        <Container>
          <StyledTitle>Coral Silverman</StyledTitle>
          <StyledTagline>User Experience Engineer</StyledTagline>
          <Social />
        </Container>
    </Layout>
  </StyledBackgroundSection>
  )
}

const StyledTitle = styled.h1`
  font-size: 2.2rem;
  color: white;
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 5rem;
  }
`;

const StyledTagline = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: unset;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default IndexPage;
