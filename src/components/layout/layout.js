import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.css"

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} path={path}/>
        <main>{children}</main>
        <footer style={{ padding: ".75rem", textAlign: "center"}}>
          <small>
            <span>Built with <a rel="noreferrer" href="https://www.gatsbyjs.org">Gatsby, </a></span>
            <span>Photograph by <a rel="noreferrer" href="http://www.vitorpt.com" target="_blank">Vitor P Teixeira, </a></span>
            <span>Icons by <a rel="noreferrer" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a></span>
          </small>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
