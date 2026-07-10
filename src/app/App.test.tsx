import { screen } from '@testing-library/react'
import App from '@/app/App'
import { renderWithProviders } from '@/shared/testing/renderWithProviders'

describe('App', () => {
  it('renders the React19App shell', () => {
    renderWithProviders(<App />, { withRouter: false })

    expect(screen.getByText(/React19App/i)).toBeInTheDocument()
    expect(screen.getByText(/Global Knowledge. Local Support./i)).toBeInTheDocument()
    expect(screen.getByText(/Phase 1 complete/i)).toBeInTheDocument()
  })
})
