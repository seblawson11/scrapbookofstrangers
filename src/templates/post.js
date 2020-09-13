import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import '../styles/single-post.scss'
import { ChevronLeft } from 'react-feather'

export default function Post ({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Link className="singlepost-backbutton" to="/posts/">
        <ChevronLeft /> VIEW ALL
      </Link>
      <div className='single-post'>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug : String!) {
    markdownRemark( fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
