/* ------------------------------------------------------------------*/

//  This prompts the server to hit a route that returns data and handles the response
//  This (as well as superagent) shouldn't be needed if fetching from mongo cloud db

import request from 'superagent'

export function getYoutubeResult (tag) {
  return request
    .get(`/api/v1/search/test/${tag}`)
    .then(response => {
      return response.body.items
    })
    .catch((err) => {
      console.error('GET REQUEST yt Results: ', err.mesage, 'AT tag: ', tag)
    })
}
export function getStatistics (id) {
  return request
    .get(`/api/v1/search/test/statistics/${id}`)
    .then(response => {
      return response.body
    })
}
/* ------------------------------------------------------------------*/