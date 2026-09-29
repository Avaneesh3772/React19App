import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('./features/dashboard/dashboard.service', () => ({
  getUsersList: jest.fn(() => Promise.resolve([])),
}))

describe('App', () => {
  it('shows the dashboard shell', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /cqrs/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^dashboard$/i })).toBeInTheDocument()
  })
})
