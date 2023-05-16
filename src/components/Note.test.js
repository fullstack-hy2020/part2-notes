import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Note from './Note'
import userEvent from '@testing-library/user-event'

const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
}

test('renders content', () => {
    // 'render' goes with 'screen' object
    // here render does not render to the DOM, but it s suitable for the tests
    const { container } = render(<Note note={note} />)

    // method 1 : test if note component is rendered and renders the note content
    /// does not need container to be defined above
    const element = screen.getByText(note.content)
    expect(element).toBeDefined()

    // method 2 : same as method 1 with different syntax
    const div = container.querySelector('.note')
    expect(div).toHaveTextContent(note.content)

})

// test('', () => {
//     render(<Note note={note} />)
//         // screen.debug() prints the html rendered by the component
//         // screen.debug()
//         screen.debug(div)
//     }
// )

test('clicking the button calls event handler once', async () => {
    const note = {
        content: 'Component testing is done with react-testing-library',
        important: true
    }

    const mockHandler = jest.fn()

    render(
        <Note note={note} toggleImportance={mockHandler} />
    )

    const button = screen.getByText('make not important')
    await userEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
})
