import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe("Button", () => {
  test('renders button label', () => {
    render(<Button label="Test" />);

    const button = screen.getByText('Test')

    expect(button).toBeInTheDocument();
  });
})