import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { ListView } from '../ListView/ListView'
import { initialValues, StoreContext, TitleComponent } from '../../components'
import { useOnlineStatus } from '../../hooks'
import { ToDoInterface } from '../../components/ContextProvider/ContextProvider'

import "./HomeView.css"

export const HomeView = () => {
    const [todos, setToDo] = useState<ToDoInterface[]>(initialValues)
    const isOnline = useOnlineStatus();

    return (
        <div className='main'>
            <TitleComponent />

            <div className='content'>
                <StoreContext.Provider value={{ todos, setToDo }}>
                    <Outlet />
                    <ListView />
                </StoreContext.Provider>
            </div>
            <div className='bottom'>
                <span>{isOnline ? '✅ Online' : '❌ Disconnected'}</span>
            </div>
        </div>
    )
}