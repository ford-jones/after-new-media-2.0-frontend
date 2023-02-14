const {getVideo, deleteVideo} = require('./video')

jest.mock('./video')

const mockVideos = [{yt_id: 123}, {yt_id: 456}]

describe('Fetch', () => {
    it('Recieves data from MongoDB', async() => {
        const mockFetch = jest.fn(getVideo).mockImplementation(() => {
            return mockVideos
        })
        const foundVideos = await mockFetch()

        expect(foundVideos).toEqual(mockVideos)
    })
})

describe('Delete', () => {
    it('Deletes data from MongoDB', async() => {
        const mockDel = jest.fn(deleteVideo).mockImplementation(() => {
            return mockVideos.slice(1)
        })
        const newArr = await mockDel()

        expect(newArr).toStrictEqual([{yt_id: 456}])
        
    })
})