import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'



describe('<App />', () => {
    it('renders App component', () => {
        const { getByText } = render(<App />)
        expect(getByText(/Калькулятор/i)).toBeInTheDocument( )
    })

    it('localStorage getItem', () => {
        
        expect( localStorage.getItem.call.length).toBe(1)
    })

    it('localeStorage clear', () => {
        const { getByText } = render(<App />)
        const clearButton = getByText(/Clear/i)
        userEvent.click(clearButton)
        expect(localStorage.clear.call.length).toBe(1)
    })

    it('localeStorage setItem', () => {
        const { getByText } = render(<App />)
        const saveButton = getByText(/Save/i)
        userEvent.click(saveButton)
        expect(localStorage.setItem.call.length).toBe(1)
    })
})