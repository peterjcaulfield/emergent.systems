import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/layouts/page'
import PostPreview from '../components/post-preview'
import styled from 'react-emotion'
import Helmet from 'react-helmet'

const PostPreviewsContainer = styled('div')`
  display: flex;
  height: 100%;
  align-items: center;
`

const PostPreviewsContent = styled('div')`
`

class PostPreviews extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <h5>Latest Posts</h5>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <PostPreview node={node} key={node.id} /> 
        ))}
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <Page location={this.props.location}>
        <Helmet>
          <title>Emergent Systems</title>
          <link rel="canonical" href="https://emergent.systems"/>
        </Helmet>
        <PostPreviewsContainer>
          <PostPreviewsContent>
            <PostPreviews data={this.props.data} />
          </PostPreviewsContent>
        </PostPreviewsContainer>
      </Page>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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

export default Home
