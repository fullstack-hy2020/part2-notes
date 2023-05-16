import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NoteForm from './NoteForm'
import userEvent from '@testing-library/user-event'

test('<NoteForm /> updates parent state and calls onSubmit', async () => {

    // mock the addNote function
    const addNoteMock = jest.fn()

    // render the NoteForm component and pass the mock function as a prop
    const { container } = render(<NoteForm createNote={addNoteMock} />)

    // get the input element
    const input = container.querySelector('#input-note')

    // get the save button element
    const sendButton = screen.getByText('save')

    ///// ************
    // NOTES:    getByText()    vs    queryByText()

    // getByText() will find the element ONLY if MATCHES the text exactly
    //// or we need to pass it { exact: false } as a second argument

    // findByText() will find the element if it MATCHES the text exactly || also contains some extra text
    //// but findByText() is async and returns a promise

    // expect(element).toBeNull() => element is not in the DOM
    ///// ************

    // fill the input with a text
    await userEvent.type(input, 'testing a form...')
    // click the save button
    await userEvent.click(sendButton)

    // check that the addNoteMock function is called once
    /// => the createNote prop is called once
    expect(addNoteMock.mock.calls).toHaveLength(1)

    // check that the addNoteMock function is called with the correct argument
    /// => the content of the note is the one we typed
    expect(addNoteMock.mock.calls[0][0].content).toBe('testing a form...')
})
