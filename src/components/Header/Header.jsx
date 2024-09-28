import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from './useTelegram';


const Header = () => {
    const {user, onClose} = useTelegram();
  
    return (
        <div classnName={'header'}>
            <Button onClick={onClose}>Закрити</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
           
    );
};

export default Header;
 