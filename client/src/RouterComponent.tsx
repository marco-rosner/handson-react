import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutView } from './views/About'
import { Home } from './views/Home'
import { LayoutView } from './views/Layout'
import { ListView } from './views/List'

export const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutView />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/list" element={<ListView />} />
            </Route>
        </Routes>
    )
}