import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'
import Card from '../card'

const PostMeta = styled('div')`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.85em;
`

const PostExcerpt = styled('div')`
  p {
    font-size: ${(16 / 18) * 100}%;
  }
`

const link = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  text-indent: -100%;
  white-space: nowrap;
  z-index: 0;
  "&&": {
    border: 0;
    box-shadow: none;
    "&:hover": {
      background: none;
    }
  } 
`

export default ({ node }) => (
  <Card
    interactive
    style={{ position: 'relative' }}
  >
    <PostMeta>
      <span>{node.frontmatter.date}</span> - <span>{node.timeToRead} min read</span>
    </PostMeta>
    <PostExcerpt>
        <h4>
          {node.frontmatter.title}{" "}
        </h4>
        <p>{node.excerpt}</p>
    </PostExcerpt>
    <Link 
      className={link}
      to={node.fields.slug}
    >Read more</Link>
  </Card>
)
