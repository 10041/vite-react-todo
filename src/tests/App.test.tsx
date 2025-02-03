import App from '@/App.tsx'
import { store } from '@/redux/store.ts'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
// import { describe, expect, it } from 'vitest'

describe('app', () => {
  it('renders the App component and shows page title', () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>)

    screen.debug()
    expect(getByText('Todo List')).toBeInTheDocument()
  })
})
