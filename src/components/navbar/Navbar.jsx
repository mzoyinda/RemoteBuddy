import React from 'react'
import { Container } from './styles'
import logo from 'assets/mini-logo.png'
import record from 'assets/timer.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (

    <Container>
        <Link to="/" className='logo_container'>
            <img alt='RemoteBuddy' src={logo} />
        </Link>
        <div className='timer_container'>
          <div className='timer_btn'>
            <img alt='Record button' src={record}/>
          </div>
          <p className='timer_text'>0:00:00</p>
        </div>
    </Container>
  )
}

export default Navbar