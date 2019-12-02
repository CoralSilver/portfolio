import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import { ContainerLarge } from "../components/container.css"
import SEO from "../components/seo"

class PortfolioPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const path = post.frontmatter.path.split("/")[0]
    const formattedPath = `/${path}`

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        path={this.props.path}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <ContainerLarge>
          <StyledArticle>
            <header>
              <h1>{post.frontmatter.title}</h1>
            </header>
            {post.frontmatter.description && (
              <p>{post.frontmatter.description}</p>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <ul>
              {post.frontmatter.date && <li>Date: {post.frontmatter.date}</li>}
              {post.frontmatter.category && (
                <li>Category: {post.frontmatter.category}</li>
              )}
            </ul>
            <StyledLink to={formattedPath}>Close Project</StyledLink>
          </StyledArticle>
        </ContainerLarge>
      </Layout>
    )
  }
}

export default PortfolioPageTemplate

const StyledArticle = styled.article`
  width: 100%;
  a {
    font-weight: 700;
  }
`

const StyledLink = styled(Link)`
  background-color: #555;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  padding: 0.5em 0.75em;
  transition: backgroud-color 0.3s ease-in-out;
  user-select: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: #afaeaf;
  }
`

export const pageQuery = graphql`
  query PortfolioBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        path
        title
        date(formatString: "YYYY")
        description
        category
      }
    }
  }
`
