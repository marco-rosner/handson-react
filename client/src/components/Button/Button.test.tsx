import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button label', () => {
  render(<Button label="Test"/>);
  const button = screen.getByText('Test')
  expect(button).toBeInTheDocument();
});
