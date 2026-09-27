import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRouter />
    </MemoryRouter>,
  )
}

describe('AppRouter', () => {
  it('shows Page Not Found inside the shell for an unknown path', () => {
    renderAt('/foo')

    expect(screen.getByRole('heading', { name: /cqrs/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
  })

  it('shows the track id from the URL', () => {
    renderAt('/restatement/track/42')

    expect(screen.getByRole('heading', { name: /track 42/i })).toBeInTheDocument()
  })
})
