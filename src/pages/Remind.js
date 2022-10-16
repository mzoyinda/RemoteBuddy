import React from 'react'
import { Container } from './styles'
import { Layout } from 'layout/Layout'
import { Link } from "react-router-dom";

const Remind = () => {

  return (
    <Layout>
        <Container>
            <h3 className='text'>Hi Jane, i would be your buddy all through the day. Reminding you of important meetings and also make sure you don't get burnt out.</h3>
            <button type='button'>
            <Link to='/meetings'> Great, Let's Go..</Link>
            </button> 
        </Container>

    </Layout>
  )
}

export default Remind