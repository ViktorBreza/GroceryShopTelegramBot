import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Header.css';

const Header = ({ showGreeting }) => {  // Додаємо новий пропс showGreeting
    const { user, onClose } = useTelegram();
  
    return (
        <header className="header">
            {showGreeting && (  // Привітання показується лише на сторінці вибору категорії
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
