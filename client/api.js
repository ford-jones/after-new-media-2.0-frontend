/* ------------------------------------------------------------------*/

import request from 'superagent'

export function getMongoData() {
  return request
    .get(`/api/v1/videos`)
    .then((res) => {
      console.log('api data: ', res.body)
      return res.body.videos
    })
    .catch((err) => {
      console.error('GET REQUEST FAILURE: ', err.mesage)
    })
}
/* ------------------------------------------------------------------*/