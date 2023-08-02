import React, { useState } from 'react'
import "./HomeView.css"
import { Outlet, useLocation } from 'react-router-dom'
import { ListView } from '../ListView/ListView'
import { initialValues, StoreContext, TitleComponent } from '../../components'
import { FormView } from '../FormView/FormView'
import { useOnlineStatus } from '../../hooks'

export const HomeView = () => {
    const [todos, setToDo] = useState(initialValues)
    const location = useLocation();
    const isOnline = useOnlineStatus();

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
            <div className='bottom'>
                <span>{isOnline ? '✅ Online' : '❌ Disconnected'}</span>
            </div>
        </div>
    )
}