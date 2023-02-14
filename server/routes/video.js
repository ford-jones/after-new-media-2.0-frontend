const express = require('express')
const router = express.Router()
const { google } = require('googleapis')
const db = require('../video')
require('dotenv').config()

const apiKey = process.env.API_KEY

router.get('/', (req, res) => {
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

router.get('/stats/:id', (req, res) => {
  const paramsId = req.params.id
  google.youtube('v3').videos.list({
    key: apiKey,
    id: paramsId,
    part: 'statistics'
  }).then(response => {
    res.json(response.data)
    return null
  }).catch((err) => {
    res.status(500).json({ error: err.message })
  })
})

router.delete('*', (req, res) => {
  const deleteVid = db.deleteVideo(req.body)
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => {
    res.status(500).json({ error: err.message })
  })
  return deleteVid
})

module.exports = router

