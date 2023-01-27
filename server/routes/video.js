const express = require('express')
const router = express.Router()
const db = require('../video')

router.get('*', (req, res) => {
  const operation = db.getVideo()
  console.log('route data: ', operation)
    
      if (!operation) {
        res.sendStatus(500)
      }
    })

//})

// router.delete('*', (req, res) => {
//   const operation = db.deleteVideo()
// })

module.exports = router

