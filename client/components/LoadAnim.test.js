import React from 'react'
import LoadAnim from './LoadAnim'
import { screen, render } from '@testing-library/react'

describe('Loader', () => {
    it('Displays a loading animation', async () => {
        render(
            <LoadAnim />
        )
        const test = await screen.getByTestId('loader')
        expect(test).toBeDefined()
        expect(test).toBeInTheDocument
        expect(test.style).toHaveLength(5)
    })
})