import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../components/App'

test('renders sup', () => {
  render(<App />)
  const linkElement = screen.getByText(/sup/i)
  expect(linkElement).toBeInTheDocument()
})
