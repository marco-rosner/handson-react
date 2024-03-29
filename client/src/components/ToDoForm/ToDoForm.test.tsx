import React from 'react';
import { render } from '@testing-library/react';
import { ToDoForm } from './ToDoForm';

describe("ToDoForm", () => {
    test('renders title label field', () => {
        const { getByLabelText } = render(<ToDoForm />);
    
        const titleLabelElement = getByLabelText("title");
    
        expect(titleLabelElement).toBeInTheDocument();
    });
    
    test('renders description label field', () => {
        const { getByLabelText } = render(<ToDoForm />);
    
        const descriptionLabelElement = getByLabelText("description");
    
        expect(descriptionLabelElement).toBeInTheDocument();
    });
})
