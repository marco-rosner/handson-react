import React from 'react'
import { Outlet } from 'react-router-dom'

import { ListView } from '../ListView/ListView'
import { TitleComponent } from '../../components'
import { useOnlineStatus } from '../../hooks'
import { StoreProvider } from '../../components/StoreProvider/StoreProvider'

import "./HomeView.css"

export const HomeView = () => {
    const isOnline = useOnlineStatus();

    return (
        <div className='main'>
            <TitleComponent />

            <div className='content'>
                <StoreProvider>
                    <Outlet />
                    <ListView />
                </StoreProvider>
            </div>
            <div className='bottom'>
                <span>{isOnline ? '✅ Online' : '❌ Disconnected'}</span>
            </div>
        </div>
    )
}