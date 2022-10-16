import React from 'react'
import { BackFilled } from './styles'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const Back = () => {
  const navigate = useNavigate()

  return (
    <BackFilled onClick={()=> navigate(-1)}>
      <BsArrowLeft/> Back
    </BackFilled>
  )
}