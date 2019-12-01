import React from "react";
import Layout from "../components/layout/layout";
import StyledBackgroundSection from '../components/backgroundImage';
import SEO from "../components/seo";
import { Container } from "../components/container.css";
import Social from "../components/social/social";

const About = ({ path }) => {

  return (
  <StyledBackgroundSection>
    <Layout path={path}>
      <SEO title="Home" />
      <section style={{backgroundColor: '#b289c9cf'}}>
        <Container>
        <h1>About</h1>
        <p>An artist by training, I bring an eye for design to all my work.
          I currently have a full time gig as a front-end engineer at Moodys Analytics on the User Experience team.
          I love ES6 and flexbox, and divide my time between working on building components for our React UI library and
          helping other teams build and launch new features.
        </p>
        <Social />
        </Container>
      </section>
    </Layout>
  </StyledBackgroundSection>
  )
}

export default About;