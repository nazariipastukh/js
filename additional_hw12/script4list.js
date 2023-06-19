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
title.appendChild(titleText);

function empty() {
    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('title');
    emptyDiv.innerText = 'Your cart is empty';
    emptyDiv.style.fontSize = '25px';
    content.append(title, emptyDiv);
}

const products = JSON.parse(localStorage.getItem('products'));
if (products) {
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

        productButton.addEventListener('click', function () {
            productBlock.remove();

            const index = products.indexOf(product);
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
            if (products.length === 0) {
                localStorage.clear();
                buttonBlock.style.display = 'none';
                empty();
            }
        });
        productBlock.append(productImage, productName, productPriceNum, productButton);
        bin.appendChild(productBlock);
        buttonBlock.appendChild(deleteButton);
        content.append(title, bin, buttonBlock);
    });
} else {
    empty();
}

deleteButton.addEventListener('click', function () {
    localStorage.clear();
    bin.style.display = 'none';
    buttonBlock.style.display = 'none';
    empty();
});

page.appendChild(content);
document.body.appendChild(page);