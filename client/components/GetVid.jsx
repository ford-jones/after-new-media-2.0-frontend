import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import Modal from './Modal'
import { AnimatePresence } from 'framer-motion'
import { useToggle } from '../context/toggleContext'
import { getMongoData, getVidStats, deleteMongoData } from '../api'

function GetVid () {
  const [vidId, setVidId] = useState([])
  const [toggle, setToggle] = useState(true)
  const [videos, setVideos] = useState([]) 
  const [player, setPlayer] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)
  const [loading, setLoading] = useState(true)

  const { playerToggle, setPlayerToggle } = useToggle()

  useEffect(() => {
    search(0)
  }, [toggle])

  function search(index) {
    setTimeout(async() => {
      setVideos(await getMongoData())
    }, 2000)

    if (videos.length != undefined && videos.length > 0) {
      const video = videos[index].yt_id

      // Development
      getVidStats(video)
      .then((data) => {
        data.items.map((x) => {
          console.log('viewCount: ', x.statistics.viewCount)
          const vc = x.statistics.viewCount
          vc < 100 
          ? console.log('this video has less than 100 views!') 
          : console.log('this video has more than 100 views')
        })
      })
      setVidId(video)
      deleteMongoData(video)
      checkState()
      
      
      // Production
      // getVidStats(video)
      // .then((data) => {
      //   data.items.map((x) => {
        //     console.log('viewCount: ', x.statistics.viewCount)
        //     const vc = x.statistics.viewCount
        //     vc === 0 
        //     ? setVidId(video) && deleteMongoData(video)
        //     : deleteMongoData(video) && search(0)
        //   })
        // })
        
      }
      else {
        console.log('waiting for data...')
      }
    }

    function checkState() {
      const playerState = player.getPlayerState()
      console.log('player state: ', playerState)
      playerState === -1 
      ? search(1) && console.log('video skipped!')
      : console.log('video is playable!')
    }
    //  check that the video still has 0 views before passing it to the player
    //  if it fails the check, delete the video and run the same check on the next video in the array
    //  repeat until one passes and then hand it to the player
    
    //  check that a video is region locked
  //  if it is, remove it from the database

  //  Check the .env mode (production || development) and then pass the appropriate table data 

  const stringHeight = window.innerHeight.toString()
  const stringWidth = window.innerWidth.toString()
  
  function close () {
    search(0)
    setModalOpen(false)
    setPlayerToggle(true)
    player.playVideo()
  }

  const opts = {
    height: stringHeight,
    width: stringWidth,
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      enablejspai: 1
    }
  }
  function onReady (event) {
    setPlayer(event.target)
    event.target.stopVideo()
    setTimeout(() => { setLoading(false) }, 3000)
  }


  function onPlay () { 
    player.unMute()
  }

  return (
    <>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
      >
        {
          modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text={'After New Media 2.0'} load={loading}/>
        }
      </AnimatePresence>

      <div className='yt-player'>
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