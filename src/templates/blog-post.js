import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/layouts/page' 
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { scale } from '../utils/typography'

const RecommendedReading = ({ links }) => {
  if (links) {
    return (
      <div>
        <h3>Recommended reading</h3>
        {links.map((link, i) => (
          <div key={`link-${i}`}><a style={{ fontSize: '0.85rem' }} href={link}>{link}</a></div>
        ))} 
      </div>
    )
  } else return null
}

const ArticleContainer = styled('div')`
  padding: 0px 1rem 1rem 1rem; 
`

const Title = styled('h1')`
  margin-bottom: 0;
   ${scale(2)}; 
`

const Tagline = styled('h2')`
  color: rgba(0, 0, 0, 0.54);
  margin-top: 0;
  font-family: 'Open Sans'; 
  font-weight: 300;
  ${scale(0.5)};
`

class BlogTemplate extends React.Component {
  render() {
    const { data } = this.props
    const post = data.markdownRemark
    return (
      <Page location={this.props.location}>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <meta name="og:type" content="article" />
          <meta name="article:author" content="Peter J. Caulfield" />
          <meta name="og:description" content={post.excerpt} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="og:title" content={post.frontmatter.title} />
          {post.frontmatter.canonicalLink ?
            <link rel="canonical" href={`${post.frontmatter.canonicalLink}`}/>
            : null
          }
        </Helmet>
        <ArticleContainer>
          <Title>{post.frontmatter.title}</Title> 
          <Tagline>{post.frontmatter.tagline}</Tagline>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <RecommendedReading links={post.frontmatter.reading}/>
        </ArticleContainer>
      </Page>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html 
      timeToRead
      frontmatter {
        title 
        date
        reading
        tagline
        canonicalLink
      }
    }
  }
`

export default BlogTemplate
