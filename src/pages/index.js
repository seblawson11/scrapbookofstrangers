import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import HomepageIntro from "../components/homepage-intro.js"
import HomePageSection from "../components/homepage-section"
import Donate from "../components/donate"
import SEO from "../components/seo"
import Img from "gatsby-image"
import '../styles/posts.scss'
import '../styles/recent.scss'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="homepage">
      <HomepageIntro />
      <Donate />
      <HomePageSection />
      <div className='recent-header'>
        <h2>Recent</h2>
      </div>
      <div className="recent-posts">
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className='post-card'>
              <Link to={node.fields.slug}>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className='post-card-image' />
                <h3>{node.frontmatter.title} </h3>
                <span>{node.frontmatter.date}</span>
              </Link>
              <span>{node.excerpt}</span>
            </div>
          ))
        }
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
    limit: 3
  ) {
    edges {
      node {
        id
        frontmatter {
          id
          title
          author
          date(formatString: "DD MMMM, YYYY")
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
            slug
          }
        excerpt
      }
    }
  }
}
`
