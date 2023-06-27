// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const page = document.createElement('div');
const content = document.createElement('div');
const title = document.createElement('div');
const usersBlock = document.createElement('div');
const view = document.createElement('div');
const viewButton = document.createElement('button');
const removeButton = document.createElement('button');

view.append(viewButton, removeButton);

view.classList.add('view');
viewButton.classList.add('favButton');
page.classList.add('page');
content.classList.add('contentBlock');
title.classList.add('title');
usersBlock.classList.add('usersDiv');
removeButton.classList.add('favButton');

removeButton.innerText = 'Remove all';
title.innerText = 'Your Favourites';
viewButton.innerText = 'Back to Select';

if (JSON.parse(localStorage.getItem('users')).length === 0) {
    removeButton.style.display = 'none';
}

viewButton.addEventListener('click', function () {
    location.href = 'index.html';
});
removeButton.addEventListener('click', function () {
    localStorage.setItem('users', JSON.stringify([]));
    removeButton.style.display = 'none';
    usersBlock.style.display = 'none';
    empty();
});

function empty() {
    const isEmpty = document.createElement('div');
    isEmpty.classList.add('title');
    isEmpty.innerText = 'There is no user in your favourites';
    isEmpty.style.fontSize = '25px';
    content.append(title, isEmpty);
}

const users = JSON.parse(localStorage.getItem('users'));
if (users.length > 0) {
    users.forEach(user => {
        const userBlock = document.createElement('div');
        const userName = document.createElement('p');
        const userStatus = document.createElement('p');
        const userRemove = document.createElement('button');

        userRemove.addEventListener('click', function () {
            const index = users.findIndex(u => u.name === user.name);
            if (index > -1) {
                users.splice(index, 1);
                localStorage.setItem('users', JSON.stringify(users));
                userBlock.style.display = `none`;
            }
            if (users.length === 0) {
                usersBlock.style.display = 'none';
                empty();
            }
        });

        userBlock.classList.add('user');
        userName.classList.add('name');
        userStatus.classList.add('status');

        userRemove.innerText = 'Remove';
        userName.innerText = `${user.name.charAt(0).toUpperCase() + user.name.slice(1)}, ${user.age}`;

        if (user.status === true) {
            userStatus.innerText = 'Married';
        } else {
            userStatus.innerText = 'Not married';
        }

        userBlock.append(userName, userStatus, userRemove);
        usersBlock.appendChild(userBlock);
        content.append(title, usersBlock);
    });
} else {
    empty();
}

page.append(content, view);
document.body.appendChild(page);

