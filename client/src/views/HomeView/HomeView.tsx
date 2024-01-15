import React, { useState } from 'react'
import "./HomeView.css"
import { Outlet, useLocation } from 'react-router-dom'
import { ListView } from '../ListView/ListView'
import { initialValues, StoreContext, TitleComponent } from '../../components'
import { FormView } from '../FormView/FormView'
import { useOnlineStatus } from '../../hooks'
import { ToDoInterface } from '../../components/ContextProvider/ContextProvider'

export const HomeView = () => {
    const [todos, setToDo] = useState<ToDoInterface[]>(initialValues)
    const location = useLocation();
    const isOnline = useOnlineStatus();

    return (
        <div className='main'>
            <TitleComponent />

            <div className='content'>
                <StoreContext.Provider value={{todos, setToDo}}>
                    {
                        location.pathname === '/' ?
                            <FormView /> :
                            <Outlet />
                    }
                    <ListView />
                </StoreContext.Provider>
            </div>
            <div className='bottom'>
                <span>{isOnline ? '✅ Online' : '❌ Disconnected'}</span>
            </div>
        </div>
    )
}