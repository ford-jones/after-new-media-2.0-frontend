import React from 'react'
import Modal from './Modal'
import GetVid from './GetVid'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import { isVisible } from '@testing-library/user-event/dist/utils'
import { ToggleProvider } from '../context/toggleContext'
import { deleteMongoData, getVidStats } from '../api'
import YouTube from 'react-youtube'

const mockData = {yt_id: 123}
const mockPlayerToggle = {playerToggle: true}
const mockArr = [{yt_id: 123}, {yt_id: 456}]

jest.mock('../api')

describe('Home page', () => {
    it('Hides the landing page on click', async () => {
        
        render(<Modal text={'After New Media 2.0'}/>)
    
            const text = await screen.findByText('After New Media 2.0')
            userEvent.click(text)
    
            expect(text).not.toBe(isVisible)
    })

})

describe('Video player', () => {
    it('Loads the player', () => {
        render(
            <ToggleProvider value={mockPlayerToggle}>
                <GetVid />
            </ToggleProvider>
        )
        const getContainer = document.getElementsByClassName('yt-player')
        const container = [...getContainer]
        const playerExists = container[0].hasChildNodes()
        
        expect(playerExists).toBe(true)
    }) 

    it('Checks the video metadata', async () => {
        await getVidStats.mockImplementation((yt_id) => {
            Promise.resolve(mockData)
            expect(yt_id).toBe(123)
            expect(yt_id.statistics.viewCount).not.toBe(NaN)
        })
    })

    it('Skips a video if the player stops', () => {
        render(
        <ToggleProvider value={mockPlayerToggle}>
            <GetVid />
        </ToggleProvider>
        )
        let vidId = mockArr[0]

        YouTube.PlayerState.UNSTARTED ? vidId = mockArr[1]: null

        expect(vidId.yt_id).toBe(456)
    })

    it('Removes items from the database', async () => {
        await deleteMongoData.mockImplementation((yt_id) => {
            expect(yt_id).toBe(123)
            Promise.resolve(mockData)
            expect(mockData).toBeUndefined()
        })
    })
})