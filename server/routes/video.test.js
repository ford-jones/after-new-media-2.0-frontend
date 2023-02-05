const request = require('supertest')
const server = require('../server')
const db = require('../video')

jest.mock('../video')

const mockVideo = {yt_id: 12345}

describe('GET /api/v1/videos', () => {
    it('Responds with data from MongoDB', () => {
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
            .get('/api/v1/videos')
            .expect('Content-Type', /json/)
            .expect(200)
        })
        }, 3000)

        it('Sends a status code of 500 upon encountering an error', () => {
            setTimeout(() => {
                    db.getVideo().mockImplementation(() => {
                        Promise.reject(new Error('mock getVideo error'))
                    })
    
                return request(server)
                .get('/api/v1/videos')
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

describe('GET /api/v1/videos/stats/:id', () => {
    it('Responds with data from the Youtube API', () => {
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
    
    it('Sends a status code of 500 upon encountering an error', () => {
        setTimeout(() => {
                db.getVideo().mockImplementation(() => {
                    Promise.reject(new Error('mock getVideo error'))
                })

            return request(server)
            .get('/api/v1/videos/stats/11111')
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
