import React from 'react'
import Modal from './Modal'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { isVisible } from '@testing-library/user-event/dist/utils'


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
        fail()
    }) 

    it('Plays a video', () => {
        fail()
    })

    it('Checks the video metadata', () => {
        fail()
    })

    it('Checks the status of the player window', () => {
        fail()
    })

    it('Deletes a video from the database', () => {
        fail()
    })
})