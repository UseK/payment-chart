import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { cagegorySumsInYearMonth } from './App';
import 'jest-canvas-mock';
import { PAYMENTS, } from './Payment';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/number/i);
  expect(linkElement).toBeInTheDocument();
});

test('categorize', () => {
  cagegorySumsInYearMonth(PAYMENTS, 202111, ["その他"]);
});