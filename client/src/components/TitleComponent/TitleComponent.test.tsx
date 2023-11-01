import React from 'react';
import { render } from '@testing-library/react';
import { TitleComponent } from './TitleComponent';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  Link: jest.fn()
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str
    }
  }
}))

describe("TitleComponent", () => {
  test('renders title component', () => {
    const { getByText } = render(<TitleComponent />);

    const titleElement = getByText("Hands on ReactJS");

    expect(titleElement).toBeInTheDocument();
  });
});
