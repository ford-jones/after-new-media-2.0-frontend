const express = require('express')
const router = express.router()
const db = require('../video')

router.get('/', (req, res) => {
    db.getVideo()
    .then((results) => {
        console.log('route data: ', results)
      res.json({ videos: results.map((vid) => vid) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })

})