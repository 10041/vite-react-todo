import App from '@/App.tsx'
import { render, screen } from '@testing-library/react'
// import { describe, expect, it } from 'vitest'

describe('app', () => {
  it('renders the App component and shows page title', () => {
    const { getByText } = render(<App />)

    screen.debug()
    expect(getByText('Todo List')).toBeInTheDocument()
  })
})
