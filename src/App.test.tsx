import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import 'jest-canvas-mock';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/number/i);
  expect(linkElement).toBeInTheDocument();
});
