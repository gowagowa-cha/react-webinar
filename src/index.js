import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import App from './app.js';

const root = document.getElementById("app");

console.log('index.js');

// Состояние приложения
const store = new Store({
  items: [
    {id: 1, code: 1, title: 'Название товара', price: 100},
    {id: 2, code: 2, title: 'Книга по React', price: 770},
    {id: 3, code: 3, title: 'Хлеб', price: 43},
    {id: 4, code: 4, title: 'Трактор', price: 7654320},
    {id: 5, code: 5, title: 'Телефон iPhone XIXV', price: 120000},
    {id: 6, code: 6, title: 'Карандаши цветные', price: 157},
    {id: 7, code: 7, title: 'Товар сюрприз', price: 0}
  ]
});

// Сообщаем реакту что и куда рендерить.
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>, root);
});

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(<App store={store}/>, root);
