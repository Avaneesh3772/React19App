import { screen } from '@testing-library/react'
import { Footer } from '@/shared/components/layout/Footer'
import { renderWithProviders } from '@/shared/testing/renderWithProviders'

describe('Footer', () => {
  it('renders copyright text', () => {
    renderWithProviders(<Footer />)

    expect(
      screen.getByText(/Copyright 1999-2020 by Refsnes Data. All Rights Reserved./i),
    ).toBeInTheDocument()
  })
})
