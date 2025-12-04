import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Zenless Zone Zero Quick Guide/i);
  expect(headerElement).toBeInTheDocument();
  const characterElement = screen.getByRole('heading', { name: /Anby Demara/i });
  expect(characterElement).toBeInTheDocument();
});
