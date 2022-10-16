import React from 'react'
import { Container } from './styles'
import { Layout } from 'layout/Layout'
import { Link } from "react-router-dom";
import styled from "styled-components";

const Welcome = () => {

  return (
    <Layout display={false}>
      <Container>
        <h3 className='text'>Hi, i'm Buddy, What should i call you?</h3>
        <Input type="text" /> 
        <button type='button'>
          <Link to='/remind'> Got it!</Link>
        </button> 
        </Container>
    </Layout>
  )
}

const Input = styled.input`
border:none;
width:70%;
padding:1rem;
border-bottom: 1px solid #828282;
:active{
  border: 2px solid var(--mainGreen);
}
`

export default Welcome