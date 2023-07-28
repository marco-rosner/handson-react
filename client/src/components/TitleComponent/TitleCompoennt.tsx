import React from 'react'
import './TitleComponent.css'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

export const TitleComponent = () => (
    <div className='title'>
        <div className='titleLayout'>
            <h4>Hands on ReactJS</h4>
            <img src={logo} className='logo' alt="logo" />
        </div>
        <nav>
            <div className='nav-list'>
                <div>
                    <Link to='/' className='link'>Home</Link>
                </div>
                <div className='margin'>
                    <Link to='/about' className='link'>About</Link>
                </div>
            </div>
            <hr />
        </nav>
    </div>
)