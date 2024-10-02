import React, { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import ProductItem from "../ProductItem/ProductItem";
import './ProductList.css';

const products = [
    {id: '1', title: 'Яблука', price: 76, description: 'Солодкі, виробник Україна'},

]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams( {
                text: `Загальна вартість товарів в кошику: ${getTotalPrice(newItems)}`
            })
        }
    }


    return (
        <div className={'list'}>
            {ProductList.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
