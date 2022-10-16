import React from 'react'
import { CardContainer } from './styles'
import buddy from 'assets/buddy.svg'

const Card = () => {

  return (
    <CardContainer>
        <div className='buddy'>
            <img alt='RemoteBuddy' src={buddy}/>
        </div>
    </CardContainer>
  )
}

export default Card