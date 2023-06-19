// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)

// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.

const page = document.createElement('div');
const form = document.createElement('form');
const description = document.createElement('h1');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');
const input4 = document.createElement('input');
const buttons = document.createElement('div');
const button1 = document.createElement('button');
const button2 = document.createElement('button');

page.classList.add('page');
buttons.classList.add('buttons');

input1.placeholder = 'Enter product name';
input2.placeholder = 'Enter amount of product';
input3.placeholder = 'Enter price';
input4.placeholder = 'Enter image link';

input2.type = 'number';
input3.type = 'number';

description.innerText = 'Create Your Product';
button1.innerText = 'Create Product';
button2.innerText = 'Show Product';

buttons.append(button1, button2);
form.append(description, input1, input2, input3, input4, buttons);
page.appendChild(form);
document.body.appendChild(page);

button1.addEventListener('click', function (e) {
    e.preventDefault();
    const product = {
        name: input1.value,
        number: input2.value,
        price: input3.value,
        image: input4.value
    }
    const productsStorage = localStorage.getItem('products');
    let products;

    if (productsStorage) {
        products = JSON.parse(productsStorage);
    } else {
        products = [];
    }
    if (input1.value && input2.value && input3.value && input4.value !== '') {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }
});

button2.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = 'index4list.html';
});








