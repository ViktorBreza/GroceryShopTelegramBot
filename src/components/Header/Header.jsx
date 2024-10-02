// src/components/Header/Header.js

import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css';

const Header = ({ showGreeting }) => {
    const { user, onClose } = useTelegram();

    return (
        <header className="header">
            {showGreeting && (
                <span className="welcome-text">
                    Привіт, {user?.username}! Ласкаво просимо до магазину Авокадо, приємних покупок!
                </span>
            )}
        
        </header>
    );
};

export default Header;
