import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Users from "../components/users"
const IndexPage = () => (
  <Layout>
  <Users></Users>
  <div>
 <img className="rocket launch" src={"https://cdn4.iconfinder.com/data/icons/whsr-january-flaticon-set/512/rocket.png"} />
 </div>
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
