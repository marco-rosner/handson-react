import { StoreContext, initialValues } from "./StoreContext"
import { StoreProvider } from "./StoreProvider"
import { useStoreContext } from "./useStoreContext"

export interface ToDoInterface {
    title: string,
    description: string
}

export { StoreContext, initialValues, useStoreContext, StoreProvider }