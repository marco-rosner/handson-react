import React, { Dispatch, SetStateAction, useContext } from 'react'

export interface ToDoInterface {
    title: string,
    description: string
}

const initialValues: ToDoInterface[] = [{
    title: 'Activity Title',
    description: 'Activity description'
}]

interface StoreInterface {
    todos: ToDoInterface[],
    setToDo: Dispatch<SetStateAction<ToDoInterface[]>>
}

const StoreContext = React.createContext<StoreInterface>({ todos: initialValues, setToDo: () => {}})

export const useStoreContext = () => useContext(StoreContext);

export { StoreContext, initialValues }