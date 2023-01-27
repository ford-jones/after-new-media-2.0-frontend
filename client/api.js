import request from 'superagent'

const rootUrl = '/api/v1'

export function getMongoData() {
  return request
    .get(rootUrl + '/videos')
    .then((response) => {
      console.log('api data: ', response.body)
      return response.body
    })
    .catch((err) => {
      console.error('GET REQUEST FAILURE: ', err.message)
    })
}