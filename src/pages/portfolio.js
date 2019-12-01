import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import GridImage from "../components/grid/gridImage";

const PortfolioPage = ({data, path}) => {
  const parsedData = data.allContentJson.nodes[0];

  return (
  <div>
    <Layout path={path}>
      <SEO title="Portfolio" />
      <section>
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

