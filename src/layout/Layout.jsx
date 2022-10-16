import React from 'react'
import Navbar from 'components/navbar/Navbar'
import { LayoutContain } from './styles'
import { Back } from 'components/button/Back'
import background from 'assets/background.png'

export const Layout = ({ children }) => {

  return (
    <LayoutContain background={background}>
      <Navbar/>
      <div className='wrap'>
        <Back/>
        <div className='card_contain'>
          {children}
        </div>
      </div>  
    </LayoutContain>
  )
}
