// src/components/ProductItem/ProductItem.js

import React, { useState } from "react";
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({ product, className, onAdd, cartItems }) => {
    const [quantity, setQuantity] = useState(1); // Стан для кількості товару
    const [showQuantitySelector, setShowQuantitySelector] = useState(false); // Стан для відображення вибору кількості

    // Перевіряємо, чи товар вже в кошику
    const isInCart = cartItems.some(item => item.id === product.id);

    const onAddHandler = () => {
        // Додаємо товар в кошик, якщо кількість більша за 0
        if (quantity > 0) {
            onAdd({ ...product, quantity }); // Додаємо товар з кількістю
            setShowQuantitySelector(false); // Закриваємо вибір кількості
        }
    };

    const onRemoveHandler = () => {
        // Видаляємо товар з кошика
        onAdd({ ...product, quantity: 0 }); // Додаємо товар з кількістю 0 для видалення
    };

    return (
        <div className={'product ' + className}>
            <div className={'img'}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Ціна: <b>{product.price}грн</b></span>
            </div>
            {!isInCart ? (
                !showQuantitySelector ? (
                    <Button className={'add-btn'} onClick={() => setShowQuantitySelector(true)}>
                        Додати в кошик
                    </Button>
                ) : (
                    <div className={'quantity-selector'}>
                        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        <Button className={'confirm-btn'} onClick={onAddHandler}>
                            Підтвердити
                        </Button>
                    </div>
                )
            ) : (
                <Button className={'remove-btn'} onClick={onRemoveHandler}>
                    Видалити з кошика
                </Button>
            )}
        </div>
    );
};

export default ProductItem;
