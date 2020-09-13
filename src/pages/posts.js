import React from "react"
import { graphql, Link } from "gatsby"
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import '../styles/recent.scss'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="posts" />
      <div className='post-page-header'>
        <h1>The Scrapbook</h1>
        <h4>Number of pages: {data.allMarkdownRemark.totalCount}</h4>
      <div className='post-filter'>
        <Link to="/chapters/">
            <h3>Chapters</h3>
          </Link>
      </div>
      </div>
      <div className='post-section'>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className='post-card'>
              <Link to={node.fields.slug}>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} className='post-card-image' />
                <h3>{node.frontmatter.title} </h3>
                <span>{node.frontmatter.date}</span>
                <Button className="post-category-button">{node.frontmatter.categories}</Button>
              </Link>
              <span>{node.excerpt}</span>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          id
          title
          author
          categories
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
