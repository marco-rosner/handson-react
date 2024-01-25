import React, { Dispatch, SetStateAction } from 'react'
import { ToDoInterface } from '.'

export const initialValues: ToDoInterface[] = [{
    title: 'Activity Title',
    description: 'Activity description'
}]

interface StoreInterface {
    todos: ToDoInterface[],
    setToDo: Dispatch<SetStateAction<ToDoInterface[]>>
}

export const StoreContext = React.createContext<StoreInterface>({
     todos: initialValues, setToDo: () => {}
})