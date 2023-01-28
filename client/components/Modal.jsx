
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Backdrop from './Backdrop'
import LoadAnim from './LoadAnim'
import { getMongoData } from '../api'

function Modal ({ handleClose, text, load }) {
  const [videos, setVideos] = useState([])
  const dropIn = {
    initial: {
      y: '0',
      opacity: 1
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 400,
        stiffness: 800
      }
    },
    exit: {
      y: '-100vh',
      opacity: 0
    }
  }.then

  //  this is bugged, the button needs to be clicked twice to reach the console
  function handleClick(e) {
    e.preventDefault()
    setTimeout(async() => {
      setVideos(await getMongoData())
      console.log('frontend data: ', videos)
    }, 2000)
  }


  return ( 
  <>
    <Backdrop onClick={handleClose}>
      {
        load
          ? <LoadAnim/>
          : <motion.div
            className='modal'
            variants={dropIn}
            initial='initial'
            animate='visble'
            exit='exit'
          >
            <motion.h1
              className='h1-title'
              // this is for testing purposes and should actually call handleClose
              onClick={handleClick}
            >
              {text}
            </motion.h1>
            <motion.p className='p-title'>
              William Linscott <br></br>
              Coding: Qianye Lin, Ben Zhao, Ford Jones <br></br>
              <br></br>
              N.B. After New Media 2.0 contains previously unwatched videos<br></br>
              from YouTube. Please note they are randomised and unfiltered<br></br>
              so watch at your own discretion.
            </motion.p>
          </motion.div>
      }

    </Backdrop>
  </>
  )
}

export default Modal