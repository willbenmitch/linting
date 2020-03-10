import React from 'react' // eslint-disable-line no-unused-vars
import { render } from '@testing-library/react'
import App from './App' // eslint-disable-line no-unused-vars

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument() // eslint-disable-line no-undef
})
