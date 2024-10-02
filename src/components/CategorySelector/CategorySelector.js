import React from 'react';

const CategorySelector = ({ categories, onSelectCategory }) => {
    return (
        <div className="category-selector">
            <h2>Виберіть категорію</h2> {/* Додано заголовок */}
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
