import React from 'react'
import Navbar from 'components/navbar/Navbar'
import { LayoutContain } from './styles'
import { Back } from 'components/button/Back'
import background from 'assets/background.png'
import Card from 'components/card/Card'

export const Layout = ({ children, display }) => {

  return (
    <LayoutContain background={background}>
      <Navbar/>
      <div className='wrap'>
        <Back/>
        <div className='card_contain'>
          <Card display={display}>
            {children}
          </Card>
        </div>
      </div>  
    </LayoutContain>
  )
}
