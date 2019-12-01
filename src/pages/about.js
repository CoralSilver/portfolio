import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout";
import Image from "../components/image";
import StyledBackgroundSection from '../components/backgroundImage';
import SEO from "../components/seo";
import heartIcon from "../icons/ic_heart.svg";
import GridImage from "../components/grid/gridImage";
import { Container } from "../components/container.css";
import Social from "../components/social/social";

const About = ({data, path}) => {

  return (
  <div>
  <Layout path={path}>
    <SEO title="Home" />
    <StyledBackgroundSection>
    <section style={{backgroundColor: '#75737b'}}>
      <Container>
      <h2>About</h2>
      <p>An artist by training, I bring an eye for design to all my work.
        I currently have a full time gig as a front-end engineer at Moodys Analytics on the User Experience team.
        I love ES6 and flexbox, and divide my time between working on building components for our React UI library and
        helping other teams build and launch new features.
      </p>
      <Social />
      </Container>
    </section>
    </StyledBackgroundSection>
    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </Layout>
  </div>
  )
}

export default About;