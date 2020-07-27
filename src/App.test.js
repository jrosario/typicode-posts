import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Title, Body, Action', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Title/i);
  expect(textElement).toBeInTheDocument();
});
