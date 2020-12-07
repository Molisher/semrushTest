import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '../components'

describe('<Input />', () => {
    it('renders Input component', () => {
        const { getByRole } = render(<Input />)
        expect(getByRole('textbox')).toBeInTheDocument()
    })
    it('onChange event', () => {
        const onChangeMock = jest.fn()
        const { getByRole } = render(<Input setter={onChangeMock}/>)
        const input = getByRole('textbox')
        expect(input).toHaveValue('')
        userEvent.type(input, 'Test')
        expect(input).toHaveValue('Test')
    })


})