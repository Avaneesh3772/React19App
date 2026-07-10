import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppRouter } from '@/app/router/AppRouter'
import { renderWithProviders } from '@/shared/testing/renderWithProviders'

describe('App routing', () => {
  it('redirects root to dashboard and navigates between business routes', async () => {
    const user = userEvent.setup()

    renderWithProviders(<AppRouter />)

    expect(document.querySelector('.page-title')).toHaveTextContent('Dashboard')
    expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveClass('active')

    await user.click(screen.getByRole('link', { name: 'Templates' }))
    expect(document.querySelector('.page-title')).toHaveTextContent('Template')
    expect(screen.getByText('GET, POST, PUT, DELETE DEMO')).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Close Quarter' }))
    expect(document.querySelector('.page-title')).toHaveTextContent('Close Quarter')
  })

  it('renders track detail route with id param', () => {
    renderWithProviders(<AppRouter />, { route: '/restatement/track/42' })

    expect(screen.getByText('Track')).toBeInTheDocument()
    expect(screen.getByText(/Track ID: 42/i)).toBeInTheDocument()
  })

  it('renders page not found for unknown routes', () => {
    renderWithProviders(<AppRouter />, { route: '/unknown-page' })

    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })
})
