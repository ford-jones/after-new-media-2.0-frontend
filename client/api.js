import request from 'superagent'

const rootUrl = '/api/v1'

export function getMongoData() {
  return request
    .get(rootUrl + '/videos')
    .then((res) => {
      console.log('api data: ', res)
      return res
    })
    .catch((err) => {
      console.error('GET REQUEST FAILURE: ', err.mesage)
    })
}