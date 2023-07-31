import React, { Dispatch, SetStateAction, useState } from 'react'
import { ToDoInterface, useStoreContext } from '../ContextProvider/ContextProvider';
import './ToDoForm.css'

type ToDoFormProps = {
    setToDo: Dispatch<SetStateAction<ToDoInterface[]>>;
}

const initialState = { title: '', description: '' }

export const ToDoForm = ({ setToDo }: ToDoFormProps) => {
    const [state, setState] = useState(initialState)
    const posts = useStoreContext();

    const handleChange = (e: any, field: string) => {
        setState({ title: state.title, description: state.description, [field]: e.target.value } as any)
    }

    const handleSubmit = () => {
        setToDo([{ title: state.title, description: state.description }, ...posts])
        setState(initialState)
    }

    return (
        <div className='ToDoForm'>
            <div className='fieldForm'>
                <label htmlFor='title'>Title</label>
                <input id="title" name='title' aria-label='title' className='size' value={state.title} onChange={(e) => handleChange(e, 'title')} />
            </div>
            <div className='fieldForm'>
                <label htmlFor='description'>Description</label>
                <input id="description" name='description' aria-label='description' className='size' value={state.description} onChange={(e) => handleChange(e, 'description')} />
            </div>
            <div className="submitButton">
                <button type='button' className='button' onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}