const request = require('supertest')
const server = require('../server/server')
require('./api')
require('superagent')

jest.mock('../server/video')
jest.mock('./api')

const mockVid = {yt_id: 123}
const rootUrl = '/api/v1'

describe('GET REQUEST MongoDB data', () => {
    it('Requests data from the MongoDB API route', () => {
            // return request(server)
            // .get(rootUrl + '/videos')
            // .set({'Content-type': 'json'})
            // .then((response) => {
            //         console.log(response.header)
            //         Promise.resolve(mockVid),
            //         expect(response).toBeDefined()
            //         expect(response.type).toBe('json')
            //         expect(response.status).toBe(200)
            //     })
            //     .catch((err) => {
            //         console.error(err.message)
            //     })
            fail()
    })
    it('Throws an error on request failure', () => {
        fail()
    })
})

describe('GET REQUEST Youtube data', () => {
    it('Requests stats from the Youtube API route', () => {
        fail()
    })

    it('Throws an error on request failure', () => {
        fail()
    })
})

describe('DELETE REQUEST MongoDB data', () => {
    it('Sends data to delete from MongoDB', () => {
        fail()
    })

    it('Throws an error on request failure', () => {
        fail()
    })
})