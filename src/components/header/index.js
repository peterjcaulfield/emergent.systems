import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

const HeaderContainer = styled('div')`
  width: 100%;
  z-index: 2;
`
const Title = styled('div')`
  text-align: center;
  overflow: auto;
  h1 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    margin: 2rem;
  }
  a,a:hover,a:visited {
    text-decoration: none; 
    font-family: Abril Fatface;
    color: #000;
  }
  background: rgb(242, 77, 50);
`
const Banner = styled('div')`
  width: 100%;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  background: rgb(242, 77, 50);
  a {
    text-decoration: none;
    color: #fff;
  }
`

const NavigationContainer = styled('div')`
  display: flex;
  flex-grow: 1;
`

const animatedUnderline = css`
   &::after {
    content: '';
    display: block;
    width: 100%;
    margin-top: 0.75rem;
    height: 5px;
    transition: transform 250ms ease;
    transform: scaleX(0);
    background-color: #fff;
  }
  &#active::after,
  &:hover::after {
    transform: scaleX(1);
  }
`

const assignActiveStyles = ({ href, location, isPartiallyCurrent }) => {
  if (href === '/' || href.indexOf('blog') !== -1) {
    if (location.pathname === '/' || location.pathname.indexOf('blog') !== -1) {
      return { id: 'active' }
    }
  } else if (isPartiallyCurrent) {
    return { id: 'active' }
  }
  return null
}

const StyledLink = styled('div')`
  font-size: 18px;
  padding: 0 1.5rem; 
  text-decoration: none;
  ${animatedUnderline};
`.withComponent(
    props => (
      <Link {...{...props, ...{getProps: assignActiveStyles}}} />
    )
  )

const Navigation = styled('div')`
  font-family: Roboto;
  font-style: normal;
  padding: 0 20px 0 20px;
  display: flex;
`

const fixed = css`
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: rgba(25, 17, 34, 0.2) 0px 0px 10px;
`

const Push = styled('div')`
  height: 65px;
`

class Header extends React.Component {

  constructor(props) {
    super(props) 
    this.handleScroll = this.handleScroll.bind(this)
  }

  titleRef = null

  state = {
    fixMenu: false 
  }

  handleScroll() {
    if (this.titleRef) {
      const { height, top } = this.titleRef.getBoundingClientRect()  
      if (top < 0 && Math.abs(top) > parseInt(height, 10)) {
        if (!this.state.fixMenu) {
          this.setState(state => (
            {...state, ...{ fixMenu: true }}
          ))
        }
      } else {
        if (this.state.fixMenu) {
          this.setState(state => (
            {...state, ...{ fixMenu: false }}
          ))
        }
      }
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { title } = this.props
    return (
      <HeaderContainer>
        <Title
          innerRef={titleBar => (this.titleRef = titleBar)} 
        >
          <h1><Link to="/">{title}</Link></h1>
        </Title>
        <Banner
          className={this.state.fixMenu ? fixed: ''}
        >
          <NavigationContainer>
            <Navigation>
              <StyledLink to="/">Blog</StyledLink>
              <StyledLink to="/about">About</StyledLink>
            </Navigation>
          </NavigationContainer>
        </Banner>
        <Push style={{ display: this.state.fixMenu ? 'block' : 'none' }}/>
      </HeaderContainer>
    )
  }
}

export default Header
