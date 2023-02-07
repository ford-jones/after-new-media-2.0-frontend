import React from "react";
import {render} from '@testing-library/react'
import Modal from "./Modal";

describe('Landing page text', () => {
    it('Shows a blurb about the artwork', async () => {
        const {container} = render(<Modal />)
        const text = container.querySelector('.p-title').hasChildNodes()
        expect(text).not.toBeFalsy()
    })
})