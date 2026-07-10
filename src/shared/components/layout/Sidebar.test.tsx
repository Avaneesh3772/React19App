import { screen } from '@testing-library/react'
import { Sidebar } from '@/shared/components/layout/Sidebar'
import { renderWithProviders } from '@/shared/testing/renderWithProviders'

describe('Sidebar', () => {
  it('renders business navigation links without RxJS or Signals sections', () => {
    renderWithProviders(<Sidebar />)

    expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute('href', '/dashboard')
    expect(screen.getByRole('link', { name: 'Templates' })).toHaveAttribute('href', '/templates')
    expect(screen.getByRole('link', { name: 'Close Quarter' })).toHaveAttribute(
      'href',
      '/admin/close-quarter',
    )
    expect(screen.getByRole('link', { name: 'Role Definition' })).toHaveAttribute(
      'href',
      '/role/role-definition',
    )
    expect(screen.getByRole('link', { name: 'Initiate and Define' })).toHaveAttribute(
      'href',
      '/restatement/initiate-and-define',
    )

    expect(screen.queryByText(/RxJS/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Signals/i)).not.toBeInTheDocument()
  })
})
