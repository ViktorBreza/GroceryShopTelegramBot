// src/data/products.js

const products = {
   'Товари з Європи': [
        { id: '1', title: 'Джинси', price: 5000, description: 'Синього кольору, прямі' },
        { id: '2', title: 'Куртка', price: 12000, description: 'Зеленого кольору, тепла' },
    ],
    'Свіжі овочі': [
        { id: '3', title: 'Картопля', price: 6000, description: 'Молода, виробник Узбекистан', image: '/src/data/images/potato.jpg' },
        { id: '4', title: 'Морква', price: 19, description: 'виробник Єгипет', image: '/src/data/images/carrot.jpg' },
        { id: '8', title: 'Помідор', price: 7000, description: 'Свіжі, вирощені в Україні', image: '/src/data/images/tomato.jpg' },
    ],
    'Свіжі фрукти': [
        { id: '5', title: 'Яблуко', price: 76, description: 'солодке, виробник Україна', image: '/src/data/images/apple.jpg' },
        { id: '6', title: 'Авокадо', price: 5000, description: 'Стиглі, з Мексики', image: '/src/data/images/avocado.jpg' },
        { id: '7', title: 'Банан', price: 128, description: 'великий, виробник Японія', image: '/src/data/images/banana.jpg' },
    ],
};

export default products;
