import React from 'react'
import Navbar from 'components/navbar/Navbar'
import { LayoutContain } from './styles'
import { Back } from 'components/button/Back'
import background from 'assets/background.png'
import Card from 'components/card/Card'

import { motion, AnimatePresence} from "framer-motion"

export const Layout = ({ children }) => {

  return (
    <LayoutContain background={background}>
      <Navbar/>
      <div className='wrap'>
        <Back/>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='card_contain'
          >
          <Card>
            {children}
          </Card>
        </motion.div>
        </AnimatePresence>
      </div>  
    </LayoutContain>
  )
}
