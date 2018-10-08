import React from "react"
import Page from '../components/layouts/page'
import profile from '../img/profile.jpg'
import styled from 'react-emotion'
import Card from '../components/card'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const AboutContainer = styled('div')`
  padding: 2rem 1rem 1rem 1rem;
`

const Profile = styled('div')`
  display: flex;
  img {
    margin: 0 auto;
    height: auto;
    width: auto;
  }
  div {
    flex-grow: 1; 
  }
`
const ProfileText = styled('div')`
  display: flex;
  align-items: center;
`

class About extends React.Component {
  render() {
    return (
      <Page location={this.props.location}>
        <Helmet>
          <title>About</title>
          <link rel="canonical" href="https://emergent.systems/about"/>
        </Helmet>
        <AboutContainer>
            <Profile>
              <ProfileText>
                  <div>
                    <p>I'm a fullstack javascript developer based in Dublin.</p>
                    <p>
                      You can find me on <Link to="">LinkedIn</Link> and <Link to="">Github</Link>.
                    </p>
                  </div>
              </ProfileText>
            <Card 
              style={{ maxWidth: '340px', margin: '0 auto', border: 'none' }}
            >
              <img alt="Peter Caulfield" src={profile} />
            </Card>
          </Profile>
        </AboutContainer>
      </Page>
    )
  }
}

export default About
