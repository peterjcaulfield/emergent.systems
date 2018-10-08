import React from 'react'
import styled, { css, cx } from 'react-emotion'
import presets from '../../utils/presets.js'

const interactive = css`
  cursor: pointer;
  transition: transform ${presets.animation.speedDefault} ${
    presets.animation.curveDefault
  }, box-shadow ${presets.animation.speedDefault} ${
    presets.animation.curveDefault
  }, padding ${presets.animation.speedDefault} ${
    presets.animation.curveDefault
  };

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 42px rgba(25, 17, 34, 0.1);
  }
`

const card = css`
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 30px 20px 10px 30px;
  box-shadow: rgba(25, 17, 34, 0.05) 0px 3px 10px;
`

const Card = styled('div')`
`.withComponent(props => (
  props.interactive ? 
    <div {...props} className={cx(card, interactive)}/> : 
    <div {...props} className={card}/>    
))

export default Card
