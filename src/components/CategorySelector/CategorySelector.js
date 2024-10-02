// src/components/CategorySelector/CategorySelector.js

import React from 'react';
import './CategorySelector.css'; // Імпортуємо CSS для стилізації

const CategorySelector = ({ categories, onSelectCategory }) => {
    return (
        <div className="category-selector">
            <h2>Виберіть категорію</h2> {/* Заголовок для вибору категорії */}
            <div className="categories-container">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className="category-button"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;
