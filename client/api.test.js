import request from 'superagent'


jest.mock('../server/server')
jest.mock('../server/video')
jest.mock('../server/routes/video')
jest.mock('./api')


const mockVid = [{yt_id: 123}, {yt_id: 345}]
const mockErrorMsg = 'Request denied.'

describe('GET REQUEST MongoDB data', () => {
    it('Requests data from the MongoDB API route', async() => {
        const mockGet = jest.fn(request.get).mockResolvedValue(mockVid)
        const res = await mockGet('http://localhost:8080/api/v1/videos', () => Promise.resolve())

        expect(res).toEqual(mockVid)
            
    })
    it('Throws an error on request failure', async() => {
        const mockError = jest.fn(console.log)
        const mockGet = jest.fn(request.get).mockImplementation(() => mockError(mockErrorMsg))
        await mockGet('http://localhost:8080/api/v1/videos', () => Promise.reject())
        
        expect(mockError).toHaveBeenCalledWith(mockErrorMsg)

    })
})

describe('GET REQUEST Youtube data', () => {
    it('Requests stats from the Youtube API route', async() => {
        const mockGet = jest.fn(request.get).mockResolvedValue(mockVid[0].yt_id)
        const res = await mockGet(`http://localhost:8080/api/v1/videos/stats/${mockVid[0].yt_id}`, () => Promise.resolve())

        expect(res).toEqual(mockVid[0].yt_id)
    })

    it('Throws an error on request failure', async() => {
        const mockError = jest.fn(console.log)
        const mockGet = jest.fn(request.get).mockImplementation(() => mockError(mockErrorMsg))
        await mockGet(`http://localhost:8080/api/v1/videos/stats/${mockVid[0].yt_id}`, () => Promise.reject())
        
        expect(mockError).toHaveBeenCalledWith(mockErrorMsg)
    })
})

describe('DELETE REQUEST MongoDB data', () => {
    it('Sends data to delete from MongoDB', async() => {
        const mockDel = jest.fn(request.del).mockImplementation(() => mockVid.slice(1))
        const res = await mockDel('http://localhost:8080/api/v1/videos', () => Promise.resolve())

        expect(res).toEqual([{yt_id: 345}])
    })

    it('Throws an error on request failure', async () => {
        const mockError = jest.fn(console.log)
        const mockDel = jest.fn(request.del).mockImplementation(() => mockError(mockErrorMsg))
        await mockDel('http://localhost:8080/api/v1/videos', () => Promise.reject())
        
        expect(mockError).toHaveBeenCalledWith(mockErrorMsg)
    })
})