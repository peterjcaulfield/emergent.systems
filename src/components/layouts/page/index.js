import React from 'react'
import Header from '../../header'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

const ContentContainer = styled('div')`
  min-height: 100%;
  overflow: auto;
  margin: 0 auto;
`

const Content = styled('div')`
  min-height: 100%;
  max-width: 780px;
  margin: 0 auto 1rem auto;
  padding: 0 0.5rem;
`

const PageContainer = styled('div')`
  height: 100%;
  overflow: auto;
  position: relative;
`

const UnderConstruction = styled('div')`
  text-align: center;
  padding: 2rem;   
`

const _ = key => {
  if (!key) return false

  const [_, previewKey] = key.split('=')
  const keyValue = previewKey
    .split('')
    .reduce((sum, char) => (sum += char.charCodeAt(0)), 0)

  if (keyValue === 951) return true

  return false
} 

class Page extends React.Component {

  render() {
    const { children, location } = this.props 
    const isHomepage = location.pathname === `/`
    const isBlogPage = location.pathname.indexOf('blog') !== -1;
    if(!_(location.search)) return (
      <UnderConstruction>
        <h1>Under Construction</h1>
      </UnderConstruction>
    )

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              } 
            }
          }
        `}
        render={data => (
            <PageContainer> 
              <Header 
                title={data.site.siteMetadata.title} 
                isBlogPage={isBlogPage}
                isHomepage={isHomepage}
              /> 
              <ContentContainer>
                <Content>
                    {children}
                </Content>
            </ContentContainer>
          </PageContainer>
        )}
      />
    )
  }
}

export default Page
