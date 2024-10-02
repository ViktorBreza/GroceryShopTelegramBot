// src/components/Header/Header.js

import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css';

const Header = ({ showGreeting }) => {
    const { user, onClose } = useTelegram();

    // Function to handle exit button click
    const handleExitClick = () => {
        onClose(); // Calls the onClose method from useTelegram
    };

    return (
        <header className="header">
            {showGreeting && (
                <span className="welcome-text">
                    Привіт, {user?.username}! Ласкаво просимо до магазину Авокадо, приємних покупок!
                </span>
            )}
            <button className="logout-button" onClick={handleExitClick}>
                Вийти з магазину
            </button>
        </header>
    );
};

export default Header;
