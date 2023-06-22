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
page.classList.add('page');
const usersBlock = document.createElement('div');
usersBlock.classList.add('usersBlock');

usersArr.forEach(user => {
    const userBlock = document.createElement('div');
    userBlock.classList.add('user');
    const nameAge = document.createElement('p');
    nameAge.classList.add('name');
    const status = document.createElement('p');
    status.classList.add('status');
    const button = document.createElement('button');

    button.innerText = 'Add to favourites';
    nameAge.innerText = `${user.name.charAt(0).toUpperCase() + user.name.slice(1)}, ${user.age}`;

    if (user.status === false) {
        status.innerText = 'Not married';
    } else {
        status.innerText = 'Married';
    }
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const usersStorage = localStorage.getItem('users');
        let users;
        if (!usersStorage) {
            users = [];
        } else {
            users = JSON.parse(usersStorage);
        }
        let userExists = false;
        for (const thisUser of users) {
            if (thisUser.name === user.name) {
                userExists = true;
            }
        }
        if (!userExists) {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
    });
    userBlock.append(nameAge, status, button);
    usersBlock.appendChild(userBlock);
});
page.appendChild(usersBlock);
document.body.appendChild(page);
