// src/components/ProductItem/ProductItem.js

import React, { useState } from "react";
import Button from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({ product, className, onAdd }) => {
    const [quantity, setQuantity] = useState(1); // Стан для кількості товару
    const [showQuantitySelector, setShowQuantitySelector] = useState(false); // Стан для відображення вибору кількості

    const onAddHandler = () => {
        // Якщо кількість обрана, додаємо в кошик
        if (quantity > 0) {
            onAdd({ ...product, quantity }); // Додаємо товар з кількістю
            setQuantity(1); // Скидаємо кількість до 1
            setShowQuantitySelector(false); // Сховуємо вибір кількості
        }
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
            {!showQuantitySelector ? (
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
            )}
        </div>
    );
};

export default ProductItem;
