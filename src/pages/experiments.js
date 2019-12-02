import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import GridImage from "../components/grid/gridImage"

const ExperimentsPage = ({ data, path }) => {
  const parsedData = data.allContentJson.nodes[0]

  return (
    <div>
      <Layout path={path}>
        <SEO title="Experiments" />
        <section>
          <GridImage title="Experiments" items={parsedData.experiments} />
        </section>
      </Layout>
    </div>
  )
}

export default ExperimentsPage

export const data = graphql`
  query experiementsQuery {
    allContentJson {
      nodes {
        experiments {
          title
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
`
