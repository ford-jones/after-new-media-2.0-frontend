import request from 'supertest'
import server from '../server/server'
// const request = require('supertest')
// const server = require('../server/server')

jest.mock('../server/routes/video.js')
jest.mock('../server/video')

describe('GET REQUEST MongoDB data', () => {
    it('Requests data from the MongoDB API route', () => {
        return request(server)
        .get('/api/v1/videos')
        .then((res) => {
            console.log(res)
            
        })
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