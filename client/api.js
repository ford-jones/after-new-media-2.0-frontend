import request from 'superagent'

const rootUrl = '/api/v1'

export function getMongoData() {
  return request
    .get(rootUrl + '/videos')
    .then((response) => {
      return response.body
    })
    .catch((err) => {
      console.error('GET REQUEST FAILURE: ', err.message)
    })
}

export function deleteMongoData(data) {
  return request
  .del(rootUrl + '/videos')
  .send(data)
  .then((response) => {
    return response
  })
  .catch((err) => {
    console.error('DELETE REQUEST FAILURE: ', err.message)
  })
}