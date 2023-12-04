import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from '../App'

// Test renders App components
test('Renders the main page', () => {
    render(<App />)
    expect(true).toBeTruthy()
})
