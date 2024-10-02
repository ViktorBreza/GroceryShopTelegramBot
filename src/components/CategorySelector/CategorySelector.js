// src/components/CategorySelector/CategorySelector.js

import React from 'react';

const CategorySelector = ({ categories, onSelectCategory }) => {
    return (
        <div className="category-selector">
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
    );
};

export default CategorySelector;
