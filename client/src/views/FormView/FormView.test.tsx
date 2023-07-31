import React from 'react';
import { render } from '@testing-library/react';
import { FormView } from './FormView';


describe("FormView", () => {
    test('renders title component', () => {
        const { getByText } = render(<FormView setToDo={() => { }} />);

        const titleElement = getByText("To Do Application");

        expect(titleElement).toBeInTheDocument();
    });
})
