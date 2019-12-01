import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

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
          <article
            className={`post-content no-image`}
          >
            <header className="post-content-header">
              <h2 className="post-content-title">{post.frontmatter.title}</h2>
            </header>

            {post.frontmatter.description && (
              <p class="post-content-excerpt">{post.frontmatter.description}</p>
            )}

            <div
              className="post-content-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {post.frontmatter.date && (
              <p class="post-content-excerpt">Date: {post.frontmatter.date}</p>
            )}  

            {post.frontmatter.category && (
              <p class="post-content-excerpt">Category: {post.frontmatter.category }</p>
            )}  

            <footer className="post-content-footer">
              {/* There are two options for how we display the byline/author-info.
          If the post has more than one author, we load a specific template
          from includes/byline-multiple.hbs, otherwise, we just use the
          default byline. */}
            </footer>
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