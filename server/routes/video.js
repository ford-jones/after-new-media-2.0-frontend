const express = require('express')
const router = express.Router()
const db = require('../video')

router.get('*', (req, res) => {
  
    const getVid = db.getVideo().then((results) => {
      console.log('route data: ', results)
      return res.json(results)
    })
    
  if (!getVid) {
    res.sendStatus(500)
  }
  else {
    return getVid
  }}
    
)

//})

// router.delete('*', (req, res) => {
//   const operation = db.deleteVideo()
// })

module.exports = router

