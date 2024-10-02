// src/components/Header/Header.js

import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
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
            <Button className="logout-button" onClick={onClose}>
                Вийти з магазину
            </Button>
        </header>
    );
};

export default Header;
