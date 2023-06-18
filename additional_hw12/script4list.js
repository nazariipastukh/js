// На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

const page = document.createElement('div');
const content = document.createElement('div');
const title = document.createElement('div');
const titleText = document.createElement('h1');
const bin = document.createElement('div');
const buttonBlock = document.createElement('div')
const deleteButton = document.createElement('button');

buttonBlock.classList.add('buttonBlock');
deleteButton.innerText = 'Clear Cart';
page.classList.add('page');
title.classList.add('title');
titleText.innerText = 'Your Products Information';
content.classList.add('content');
bin.classList.add('bin');
deleteButton.classList.add('deleteButton');

try {
    const products = JSON.parse(localStorage.getItem('products'));
    products.forEach(product => {
        const name = product.name;
        const number = product.number;
        const price = product.price;
        const image = product.image;

        const productBlock = document.createElement('div');
        const productImage = document.createElement('img');
        const productName = document.createElement('h3');
        const productPriceNum = document.createElement('h4');
        const productButton = document.createElement('button');

        productButton.innerText = 'Delete';
        productBlock.classList.add('productBlock');
        productImage.classList.add('productImage');
        productButton.classList.add('productButton');
        productImage.src = image;
        productName.innerText = name;
        productPriceNum.innerText = `Price: ${price}$. Items: ${number}`;

        productBlock.append(productImage, productName, productPriceNum, productButton);
        bin.appendChild(productBlock);
    });
} catch (name) {
}

buttonBlock.appendChild(deleteButton);
title.appendChild(titleText);
content.append(title, bin, buttonBlock);
page.appendChild(content);
document.body.appendChild(page);