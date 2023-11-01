import React, { useState } from 'react'
import './TitleComponent.css'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { useTranslation } from 'react-i18next'

export const TitleComponent = () => {
    const [state, setState] = useState('en-US');
    const { i18n } = useTranslation()
    const { t } = useTranslation()

    const handleTranslation = () => {
        const language = state === 'en-US' ? 'pt-BR' : 'en-US';
        
        i18n.changeLanguage(language)
        setState(language)
    }

    return (
        <div className='title'>
            <label htmlFor='translation'>Turn the translation on:</label>
                <input id='translation' type='checkbox' onClick={handleTranslation} />
                <h3>{t('title.welcome')}</h3>
            <div className='titleLayout'>
                <h4>Hands on ReactJS</h4>
                
                <img src={logo} className='logo' alt="logo" />
                
            </div>
            <nav>
                <div className='nav-list'>
                    <div>
                        <Link to='/' className='link'>{t('title.home')}</Link>
                    </div>
                    <div className='margin'>
                        <Link to='/about' className='link'>{t('title.about')}</Link>
                    </div>
                </div>
                <hr />
            </nav>
        </div>
    )
}