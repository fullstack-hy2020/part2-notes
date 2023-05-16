import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Togglable from './Togglable'

describe('<Togglable />', () => {
    let container

    beforeEach(() => {
        container = render(
            <Togglable buttonLabel="show...">
                <div className="testDiv" >
                    togglable content
                </div>
            </Togglable>
        ).container
    })

    test('Togglable RENDERS its children', async () => {
        await screen.findAllByText('togglable content')
    })

    test('at start the children are NOT DISPLAYED', () => {
        const div = container.querySelector('.togglableContent')
        expect(div).toHaveStyle('display: none')
    })

    test('after clicking the button, children are DISPLAYED', async () => {
        // const button = screen.getByText('show...')
        const btn = container.querySelector('.btn-show-kids')
        await userEvent.click(btn)

        const div = container.querySelector('.togglableContent')
        expect(div).not.toHaveStyle('display: none')
    })
})
