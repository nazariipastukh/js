// є масив -

const usersArr = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true},
    {name: 'alex', age: 25, status: false}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.

const page = document.createElement('div');
const usersBlock = document.createElement('div');
const viewFav = document.createElement('div');
const favButton = document.createElement('button');
const removeAllButton = document.createElement('button');
const title = document.createElement('div');
const addAll = document.createElement('button');

title.classList.add('title');
page.classList.add('page');
usersBlock.classList.add('usersBlock');
viewFav.classList.add('view');
favButton.classList.add('favButton');
removeAllButton.classList.add('favButton');
addAll.classList.add('favButton');

title.innerText = 'Select Your Favourites';
favButton.innerText = 'Favourites';
removeAllButton.innerText = 'Remove all';
addAll.innerText = 'Add all';

viewFav.append(favButton, removeAllButton, addAll);
usersBlock.appendChild(title);

if (localStorage.length === 0) {
    localStorage.setItem('users', JSON.stringify([]));
}

removeAllButton.addEventListener('click', function () {
    localStorage.setItem('users', JSON.stringify([]));
});
favButton.addEventListener('click', function () {
    location.href = 'result.html';
});
addAll.addEventListener('click', function () {
    localStorage.setItem('users', JSON.stringify(usersArr));
});

usersArr.forEach(user => {
    const userBlock = document.createElement('div');
    const nameAge = document.createElement('p');
    const status = document.createElement('p');
    const button = document.createElement('button');
    const button1 = document.createElement('button');
    const buttonBlock = document.createElement('div');

    userBlock.classList.add('user');
    nameAge.classList.add('name');
    status.classList.add('status');
    buttonBlock.classList.add('buttonBlock');

    nameAge.innerText = `${user.name.charAt(0).toUpperCase() + user.name.slice(1)}, ${user.age}`;
    button.innerText = 'Add';
    button1.innerText = 'Remove';

    if (user.status === false) {
        status.innerText = 'Not married';
    } else {
        status.innerText = 'Married';
    }

    button.addEventListener('click', function () {
        const usersStorage = localStorage.getItem('users');
        let users;
        if (!usersStorage) {
            users = [];
        } else {
            users = JSON.parse(usersStorage);
        }
        let userExists = false;
        for (const thisUser of users) {
            if (thisUser.name === user.name && thisUser.age === user.age && thisUser.status === user.status) {
                userExists = true;
            }
        }
        if (!userExists) {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
    });

    button1.addEventListener('click', function () {
        const usersStorage = JSON.parse(localStorage.getItem('users'));
        const index = usersStorage.findIndex(u => u.name === user.name && u.age === user.age);
        if (index > -1) {
            usersStorage.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(usersStorage));
        }
    });

    buttonBlock.append(button, button1);
    userBlock.append(nameAge, status, buttonBlock);
    usersBlock.append(userBlock);
});
page.append(usersBlock, viewFav);
document.body.appendChild(page);
