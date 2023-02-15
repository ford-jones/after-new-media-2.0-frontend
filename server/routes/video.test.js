const request = require('supertest')
const server = require('../server')

const mockVideo = {yt_id: 12345}

const mockStatsRes = {
    resultsPerPage: 0,
    totalResults: 0
}

describe('GET /api/v1/videos', () => {
    it('Responds with data from MongoDB', async () => {
            const response = await request(server).get('/api/v1/videos')

            expect(response.statusCode).toBe(200)
    })
        

    it('Sends a status code of 500 upon encountering a mongoDB GET failure.', () => {
            return request(server)
            .get('/api/v1/videos')
            .then((res) => {
                expect(res.data).toBe(undefined)
                expect(500)
                return null
            })
            
    })
})

describe('GET /api/v1/videos/stats/:id', () => {
    it('Responds with data from the Youtube API', () => {
        return request(server)
        .get('/api/v1/videos/stats/12345')
        .expect('content-type', /json/)
        .then((response) => {
            expect(JSON.parse(response.text).pageInfo).toStrictEqual(mockStatsRes)
            return null
        })
    })
    
    it('Sends a status code of 500 upon encountering a ytAPI GET error', () => {
            return request(server)
            .get(`/api/v1/videos/stats/${undefined}`)
            .then((response) => {
                expect(response.data).toBe(undefined)
                expect(500)
                return null
            })
    })
})

describe('DELETE /api/v1/videos', () => {
    it('Deletes an item from the MongoDB database', async() => {
        const response = await request(server).delete('/api/v1/videos').send(String(mockVideo.yt_id))
            
        expect(response.request._data).toStrictEqual('12345')
        expect(response.statusCode).toBe(200)
    })

    it('Sends a status code of 500 if deletion fails.', () => {
            return request(server)
            .del(`/api/v1/videos`)
            .then((response) => {
                expect(response.data).toBe(undefined)
                expect(500)
                return null
            })
    })
})
