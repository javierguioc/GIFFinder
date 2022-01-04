import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { ThemeProvider } from 'emotion-theming'
import { theme } from 'styles'

test('renders without crashing', async () => {
  const { findByText } = render(  <ThemeProvider theme={theme}><App /></ThemeProvider>)
  const title = await findByText(/Última búsqueda/i)
  expect(title).toBeInTheDocument()
});
