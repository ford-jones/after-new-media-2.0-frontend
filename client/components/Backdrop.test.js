import React, { Children } from "react"
import Backdrop from './Backdrop'
import { render } from "@testing-library/react"

describe('Background container', () => {
    it('Renders a component which acts as a container for HTML elements', () => {
        render(<Backdrop />)

        const getBackground = document.getElementsByClassName('backdrop')
        const background = [...getBackground]
        
        expect(background).toBeDefined()
    })
    it('Contains child elements', () => {
        render(<Backdrop />)
        
        const getBackground = document.getElementsByClassName('backdrop')
        const background = [...getBackground]
        
        expect(background[0].children).not.toBe(null || undefined)

    })
})