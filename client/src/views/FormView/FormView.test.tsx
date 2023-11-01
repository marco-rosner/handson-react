import React from 'react';
import { render } from '@testing-library/react';
import { FormView } from './FormView';

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str
        }
    }
}))

describe("FormView", () => {
    test('renders title component', () => {
        const { getByText } = render(<FormView setToDo={() => { }} />);

        const titleElement = getByText("form.todoApp");

        expect(titleElement).toBeInTheDocument();
    });
})
