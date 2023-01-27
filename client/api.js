import request from 'superagent'

const rootUrl = '/api/v1'

export function getMongoData() {
  return request
    .get(rootUrl + '/videos')
    .then(() => {
      console.log('api hit!')
      return null
    })
    .catch((err) => {
      console.error('GET REQUEST FAILURE: ', err.message)
    })
}