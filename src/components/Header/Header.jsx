import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();
  
    return (
        <div className={'header'}>
            <span className={'welcome-text'}>
                Привіт, {user?.username}! Ласкаво просимо до магазину Авокадо, приємних покупок!
            </span>
            <Button className="logout-button" onClick={onClose}>Вийти з магазину</Button>
        </div>
    );
};

export default Header;
