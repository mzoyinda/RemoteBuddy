import React from 'react'
import Navbar from 'components/navbar/Navbar'
import { LayoutContain } from './styles'

export const Layout = ({ children }) => {

  return (
    <LayoutContain>
      <Navbar/>
      <div className='wrap'>
        {children}
      </div>  
    </LayoutContain>
  )
}
