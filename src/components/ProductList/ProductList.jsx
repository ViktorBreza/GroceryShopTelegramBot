import React, { useCallback, useEffect, useState } from 'react';
import productsData from '../../data/products';
import { useTelegram } from "../../hooks/useTelegram";
import CategorySelector from "../CategorySelector/CategorySelector";
import Header from '../Header/Header'; // Import the Header
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css';

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0);
};

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const { tg, queryId } = useTelegram();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = Object.keys(productsData); // Get categories

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        };
        fetch('http://85.119.146.179:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    }, [addedItems]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData);
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        };
    }, [onSendData]);

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купити ${getTotalPrice(newItems)}`,
            });
        }
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    // Function to handle exit button click
    const handleExitClick = () => {
        tg.onClose(); // Calls the onClose method from useTelegram
    };

    return (
        <div className={'product-list'}>
            {/* Header should always be rendered */}
            <Header showGreeting={selectedCategory === null} /> {/* Show greeting only on category selection */}

            {selectedCategory === null ? (
                <>
                    <h2>Виберіть категорію</h2>
                    <CategorySelector
                        categories={categories}
                        onSelectCategory={handleCategorySelect}
                    />
                </>
            ) : (
                <div>
                    <h2>{selectedCategory}</h2>
                    <div className={'list'}>
                        {productsData[selectedCategory].map(item => (
                            <ProductItem
                                key={item.id}
                                product={item}
                                onAdd={onAdd}
                                className={'item'}
                            />
                        ))}
                    </div>
                    <button onClick={() => setSelectedCategory(null)}>Назад до категорій</button>
                </div>
            )}
            <button className="logout-button" onClick={handleExitClick}>
                Вийти з магазину
            </button>
        </div>
    );
};

export default ProductList;
