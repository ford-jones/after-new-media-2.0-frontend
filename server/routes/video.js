const express = require('express')
const router = express.Router()
const db = require('../video')

router.get('*', (req, res) => {
    const getVid = db.getVideo()
console.log('operation: ', getVid)
    
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

