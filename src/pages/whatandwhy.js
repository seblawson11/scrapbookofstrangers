import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/what-and-why.scss'

const SecondPage = () => (
  <Layout>
    <SEO title="scraps" />
    <div className='what-and-why-section'>
      <p><i>“The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.”</i> - Marcel Proust</p>
    </div>
  </Layout>
)

export default SecondPage
