import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import Modal from './Modal'
import { AnimatePresence } from 'framer-motion'
import { useToggle } from '../context/toggleContext'
import { getMongoData } from '../api'
// import VideoPlayer from './VideoPlayer'

function GetVid () {
  const [vidId, setVidId] = useState([])
  const [toggle, setToggle] = useState(true)
  const [index, setIndex] = useState('')
  // const [minView, setMinView] = useState('')

  const [player, setPlayer] = useState(null)
  const [modalOpen, setModalOpen] = useState(true)
  const [loading, setLoading] = useState(true)

  const { playerToggle, setPlayerToggle } = useToggle()

  // useEffect(() => {
  //   search()
  // }, [toggle])

  // function search() {
  //   const vidArr = getMongoData(())
  //   // const vidArr = new Array(...queryMongo)
  //   console.log('video array: ', vidArr)
  //   //       const idArray = resultData.map(item => item.id.videoId)
  //   //       setVidId(idArray)
  //   //       return idArray
    
  //   //       return getStatistics(id)
  //   //       const viewArray = data.items.map(ele => ele.statistics.viewCount)
  //   //       const idx = viewArray.indexOf(minViews.toString())
  //   //       setIndex(idx)
  // }
  

  const stringHeight = window.innerHeight.toString()
  const stringWidth = window.innerWidth.toString()

  function close () {
    setModalOpen(false)
    setPlayerToggle(true)
    player.playVideo()
  }

  const opts = {
    height: stringHeight,
    width: stringWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
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
        <YouTube
          videoId={vidId[index]}
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