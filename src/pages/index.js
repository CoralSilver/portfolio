import React from "react";
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
          <h1 className="hero-title">Coral Silverman</h1>
          <h2 className="hero-description">Front End & UI-UX Engineer</h2>
          <Social />
        </Container>
    </Layout>
  </StyledBackgroundSection>
  )
}

export default IndexPage;
