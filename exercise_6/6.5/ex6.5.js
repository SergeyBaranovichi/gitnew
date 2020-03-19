const names = ["Маша", "Антон", "Андрей", "Иван", "Катя", "Коля", "Даша"];
const products = ["iPhone", "iPod", "ноутбук HP", "монитор DELL", "телевизор Samsung"];
const towers = ["Минск", "Москва", "Лондон", "Берлин", "Париж"];
setInterval(() => {
    const div = document.getElementById('div');
    const name = Math.round(Math.random() * 6);
    const product = Math.round(Math.random() * 4);
    const tower = Math.round(Math.random() * 4);
    const num = Math.round(Math.random() * 4 + 1);
    div.innerHTML = `<div class="b-popup-content">${names[name]} из г. ${towers[tower]} купил ${num} шт. товара ${products[product]}</div>`;
    setTimeout(() => {
        div.innerHTML = "";
    }, 4000);
}, 5000);