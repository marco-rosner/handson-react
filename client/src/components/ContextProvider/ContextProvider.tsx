import React, { useContext } from 'react'

export interface ToDoInterface {
    title: string,
    description: string
}

const initialValues: ToDoInterface[] = [{
    title: 'Activity Title',
    description: 'Activity description'
}]

const StoreContext = React.createContext(initialValues)
StoreContext.displayName = 'StoreContext'



export const useStoreContext = () => useContext(StoreContext);

export { StoreContext, initialValues }