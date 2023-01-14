import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../components/pages/App'

test('renders text', () => {
  render(<App />)
  const linkElement = screen.getByText(/sup/i)
  expect(linkElement).toBeInTheDocument()
})
