const express = require('express')
const router = express.Router()
const db = require('../video')

router.get('*', (req, res) => {
  const getVid = db.getVideo()
  .then((results) => {
    return res.json(results)
  })
  if (!getVid) {
    res.sendStatus(500)
  }
  else {
    return getVid
  }}
    
)

router.delete('*', (req, res) => {
  const deleteVid = db.deleteVideo(req.body)
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => {
    console.error(err.message)
  })
  return deleteVid
})

module.exports = router

