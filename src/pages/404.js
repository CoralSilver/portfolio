import React from "react"
import Layout from "../components/layout/layout"
import { Container } from "../components/container.css";
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title="404: Not found" />
      <h2>NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
