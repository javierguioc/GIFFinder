import React from 'react';
import { render, waitForElement, fireEvent, screen } from '@testing-library/react';
import App from '../App';

import { ThemeProvider } from 'emotion-theming'
import { theme } from 'styles'

test('home work as expected', async () => {
  const {container} = render(  <ThemeProvider theme={theme}><App /></ThemeProvider>)
  const gifLink = await waitForElement(
    () => container.querySelector('.Gif-link')
  )
   
  expect(gifLink).toBeVisible()
})

test('search form could be used', async () => {
  render(<ThemeProvider theme={theme}><App /></ThemeProvider>)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'Matrix' }})
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible() 
})
