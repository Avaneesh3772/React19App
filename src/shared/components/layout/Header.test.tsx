import { screen } from '@testing-library/react'
import { Header } from '@/shared/components/layout/Header'
import { renderWithProviders } from '@/shared/testing/renderWithProviders'

describe('Header', () => {
  it('renders CQRS branding and username from app configuration', () => {
    renderWithProviders(<Header />)

    expect(screen.getByText(/CQRS/i)).toBeInTheDocument()
    expect(screen.getByText(/Global Knowledge. Local Support./i)).toBeInTheDocument()
    expect(screen.getByText(/Username - Avaneesh Mishra/i)).toBeInTheDocument()
  })
})
