import React from 'react'
import "./Layout.css"
import { Link, Outlet } from 'react-router-dom'

export const LayoutView = () => (
    <div>
        <nav>
            <ul className='nav-list'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li className='li-margin'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='li-margin'>
                    <Link to='/list'>List</Link>
                </li>
            </ul>
        </nav>

        <hr />

        <Outlet />
    </div>
)