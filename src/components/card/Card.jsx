import React from 'react'
import { CardContainer } from './styles'
import buddy from 'assets/buddy.png'

const Card = ({ children, display, height }) => {

  return (
    <CardContainer display={display} height={height}>
        <div className='buddy'>
          <img alt='RemoteBuddy' src={buddy}/>
        </div>
        <div className='rest'>
          {children}
        </div>
    </CardContainer>
  )
}

export default Card