import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
    const { user, onClose } = useTelegram();
  
    return (
        <header className="header">
            <div className="header-content">
                <span className="welcome-text">
                    Привіт, {user?.username}! Ласкаво просимо до магазину Авокадо, приємних покупок!
                </span>
                <Button className="logout-button" onClick={onClose}>
                    Вийти з магазину
                </Button>
            </div>
        </header>
    );
};

export default Header;
