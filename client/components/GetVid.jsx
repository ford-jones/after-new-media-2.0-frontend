//  ford

/* ben */

import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import Modal from './Modal'
import { AnimatePresence } from 'framer-motion'
import { useToggle } from '../context/toggleContext'
import { getMongoData } from '../api'

  /* import VideoPlayer from './VideoPlayer' */ 

function GetVid () {
  const [vidId, setVidId] = useState([])
  const [toggle, setToggle] = useState(true)
  const [videos, setVideos] = useState([]) 
  
  /* const [index, setIndex] = useState('') */
  /* const [minView, setMinView] = useState('') */

  const [player, setPlayer] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)
  const [loading, setLoading] = useState(true)

  const { playerToggle, setPlayerToggle } = useToggle()

  useEffect(() => {
    search()
  }, [toggle])

  function search() {
    setTimeout(async() => {
      setVideos(await getMongoData())
      console.log('frontend data: ', videos)
    }, 2000)

    if (videos.length != undefined && videos.length > 0) {
      const video = videos[0].yt_id
      console.log('video: ', video)  
      setVidId(video)
    }
    else {
      console.log('waiting for data...')
    }
    // query the api the "oldschool" (1.0) way with the video var as the search
    // if it does, pass it to the player with setVidId()
    // check if it still has 0 views
        // otherwise delete it and repeat prev steps with videos[1].yt_id
        // once thats done, find where vidId == oldschoolWay.id and send the result to db.delete
        // this should all be able to run in the background as a video is playing
    }
  
  

  const stringHeight = window.innerHeight.toString()
  const stringWidth = window.innerWidth.toString()
  
  function close () {
    //new
    search()
    setModalOpen(false)
    setPlayerToggle(true)
    player.playVideo()
  }

  const opts = {
    height: stringHeight,
    width: stringWidth,
    playerVars: {
      /* https://developers.google.com/youtube/player_parameters */
      autoplay: 1,
      controls: 0,
      mute: 1,
      enablejspai: 1
    }
  }
  function onReady (event) {
    //new
    setPlayer(event.target)
    event.target.stopVideo()
    setTimeout(() => { setLoading(false) }, 3000)
  }

  function onPlay () {
    player.unMute()
  }

  return (
    <>
      {/* <VideoPlayer id={vidId[index]} setToggle={setToggle} toggle={toggle} minView={minView}/> */}
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
      >
        {
          modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text={'After New Media 2.0'} load={loading}/>
        }
      </AnimatePresence>

      <div className='yt-player'>
      {/* videoId={vidId[index]} */}
        <YouTube
          videoId={vidId}
          opts={opts}
          onEnd={() => { setToggle(() => !toggle) }}
          onPlay={onPlay}
          onReady={playerToggle ? (event) => { setPlayer(() => event.target) } : onReady}
          onError={() => { setToggle(() => !toggle) }}
        />
      </div>
    </>
  )
}

export default GetVid