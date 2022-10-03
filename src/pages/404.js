import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist yet... the sadness.</p>
    <p><a href="https://in-the-galaxy.netlify.app/">Wanna go to Space with us!</a></p>
  </Layout>
)

export default NotFoundPage
