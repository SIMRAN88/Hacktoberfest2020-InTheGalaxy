import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p><a href="https://in-the-galaxy.netlify.app/">Wanna go to Space with us!</a></p>
  </Layout>
)

export default SecondPage
