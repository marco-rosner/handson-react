import React, { useState } from 'react'
import "./HomeView.css"
import { Outlet, useLocation } from 'react-router-dom'
import { ListView } from '../ListView/ListView'
import { initialValues, StoreContext } from '../../components/ContextProvider/ContextProvider'
import { FormView } from '../FormView/FormView'
import { TitleComponent } from '../../components/TitleComponent/TitleComponent'

export const HomeView = () => {
    const [todos, setToDo] = useState(initialValues)
    const location = useLocation();

    return (
        <div className='main'>
            <TitleComponent />

            <div className='content'>
                <StoreContext.Provider value={todos}>
                    {
                        location.pathname === '/' ?
                            <FormView setToDo={setToDo} /> :
                            <Outlet />
                    }
                    <ListView />
                </StoreContext.Provider>
            </div>
        </div>
    )
}