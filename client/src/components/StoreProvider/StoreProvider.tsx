import { ReactNode, useState } from "react"
import { initialValues, StoreContext, ToDoInterface } from "."

interface StoreProviderInterface {
    children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderInterface) => {
    const [todos, setToDo] = useState<ToDoInterface[]>(initialValues)

    return (
        <StoreContext.Provider value={{ todos, setToDo }}>
            {children}
        </StoreContext.Provider>
    )
}







