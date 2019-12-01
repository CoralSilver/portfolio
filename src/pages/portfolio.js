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

const PortfolioPage = ({data, path}) => {
  const parsedData = data.allContentJson.nodes[0];

  return (
  <div>
    <Layout path={path}>
      <SEO title="Portfolio" />
      <section style={{ backgroundColor: '#d8d3d3'}}>
        <GridImage items={parsedData.gallery} />
      </section>
    </Layout>
  </div>
  )
}

export default PortfolioPage;

export const data = graphql`
  query portfolioQuery {
    allContentJson {
      nodes {
        title,
        gallery {
          title
          copy
          linkTo
          image {
            childImageSharp {
              fluid(maxHeight: 500, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }          
        }
      }
    }
  }
`;

