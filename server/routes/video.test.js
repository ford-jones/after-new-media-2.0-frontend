const request = require('supertest')
const server = require('../server')
const db = require('../video')
// const route = require('./video')

// jest.mock('./video')
jest.mock('../video')

const mockVideo = {yt_id: 12345}

describe('GET /api/v1/videos/stats/:id', () => {
    it('responds with data from the youtube api', () => {
        setTimeout(async () => {
            try {
                await db.getVideo().mockImplementation((yt_id) => {
                    expect(yt_id).toBe(12345)
                    return Promise.resolve(mockVideo)
                })                
            } catch (err) {
                return err.message
            }
            return request(server)
            .get('/api/v1/videos/stats/12345')
            .expect('Content-Type', /json/)
            .expect(200)
        })
        }, 3000)
    
    it('responds with a status code of 500 upon encountering an error', () => {
        setTimeout(() => {
                db.getVideo().mockImplementation(() => {
                    Promise.reject(new Error('mock getVideo error'))
                })

            return request(server)
            .get(`/api/v1/videos/stats/${undefined}`)
            .expect('Content-Type', /json/)
            .expect(500)
            .then((res) => {
                expect(jest.fn(console.log)).toHaveBeenCalledWith('mock getVideo error')
                expect(res.data).toBe(undefined)
                return null
            })
        }, 3000)
    })
})