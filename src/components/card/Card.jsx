import React from 'react'
import { CardContainer } from './styles'
import buddy from 'assets/buddy.svg'

const Card = ({ children }) => {

  return (
    <CardContainer>
        <div className='buddy'>
            <img alt='RemoteBuddy' src={buddy}/>
        </div>
        <div className=''>
            {children}
        </div>
    </CardContainer>
  )
}

export default Card