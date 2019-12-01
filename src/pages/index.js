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

const IndexPage = ({data, path}) => {
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

// export const data = graphql`
//   query HomepageQuery {
//     allContentJson {
//       nodes {
//         title,
//         gallery {
//           title
//           copy
//           linkTo
//           image {
//             childImageSharp {
//               fluid(maxHeight: 500, quality: 90) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }          
//         }
//       }
//     }
//   }
// `;
