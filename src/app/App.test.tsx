import { screen } from '@testing-library/react'
import App from '@/app/App'
import { renderWithProviders } from '@/shared/testing/renderWithProviders'

describe('App', () => {
  it('renders the application shell with dashboard as default route', () => {
    renderWithProviders(<App />, { withRouter: false })

    expect(screen.getByText(/CQRS/i)).toBeInTheDocument()
    expect(screen.getByText(/Global Knowledge. Local Support./i)).toBeInTheDocument()
    expect(document.querySelector('.page-title')).toHaveTextContent('Dashboard')
    expect(
      screen.getByText(/Copyright 1999-2020 by Refsnes Data. All Rights Reserved./i),
    ).toBeInTheDocument()
  })
})
