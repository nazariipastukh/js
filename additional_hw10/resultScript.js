// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const page = document.createElement('div');
page.classList.add('page');
const content = document.createElement('div');
content.classList.add('contentBlock');
const title = document.createElement('div');
title.classList.add('title');

const usersBlock = document.createElement('div');
usersBlock.classList.add('usersDiv');

title.innerText = 'Your Favourites';

function clear() {
    content.appendChild(title);
    const isEmpty = document.createElement('p');
    isEmpty.classList.add('empty');
    isEmpty.innerText = 'There is no item in your favourites';
    content.append(title,isEmpty);
}

const users = JSON.parse(localStorage.getItem('users'));
console.log(users);
if (users) {
    usersBlock.appendChild(title)
    users.forEach(user => {
        const name = user.name;
        const age = user.age;
        const status = user.status;

        const userBlock = document.createElement('div');
        userBlock.classList.add('user');
        const userName = document.createElement('p');
        userName.classList.add('name');
        const userStatus = document.createElement('p');
        userStatus.classList.add('status');

        userName.innerText = `${name}, ${age}`;
        userStatus.innerText = `${status}`;

        userBlock.append(userName, userStatus);
        usersBlock.appendChild(userBlock);
        content.append(usersBlock)
    })
} else {
    clear();
}
page.appendChild(content);
document.body.appendChild(page);