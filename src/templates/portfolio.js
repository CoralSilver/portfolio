import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import { ContainerLarge } from "../components/container.css";
import SEO from "../components/seo"

class PortfolioPageTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} path={this.props.path}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <ContainerLarge>
          <article>
            <header>
              <h1>{post.frontmatter.title}</h1>
            </header>
            {post.frontmatter.description && (
              <p>{post.frontmatter.description}</p>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.html }}/>
            <ul>
            {post.frontmatter.date && (
              <li>Date: {post.frontmatter.date}</li>
            )}
            {post.frontmatter.category && (
              <li>Category: {post.frontmatter.category }</li>
            )}  
            </ul>
            <Link to="/portfolio">Close Project</Link>
          </article>
        </ContainerLarge>
      </Layout>
    )
  }
}

export default PortfolioPageTemplate

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