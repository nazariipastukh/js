// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const page = document.createElement('div');
const content = document.createElement('div');
const title = document.createElement('div');
const usersBlock = document.createElement('div');

page.classList.add('page');
content.classList.add('contentBlock');
title.classList.add('title');
usersBlock.classList.add('usersDiv');
title.innerText = 'Your Favourites';

function empty() {
    const isEmpty = document.createElement('div');
    isEmpty.classList.add('title');
    isEmpty.innerText = 'There is no user in your favourites';
    isEmpty.style.fontSize = '25px';
    content.append(title,isEmpty);
}

const users = JSON.parse(localStorage.getItem('users'));
if (users.length>0) {
    users.forEach(user => {
        const name = user.name;
        const age = user.age;
        const status = user.status;

        const userBlock = document.createElement('div');
        const userName = document.createElement('p');
        const userStatus = document.createElement('p');
        const userRemove=document.createElement('button');
        userRemove.innerText='Remove';

        userRemove.addEventListener('click',function(){
            const index = users.findIndex(u => u.name === user.name );
            if (index > -1) {
                users.splice(index, 1);
                localStorage.setItem('users', JSON.stringify(users));
                userBlock.style.display=`none`;
            }
            if (users.length === 0) {
                usersBlock.style.display='none';
                empty();
            }
        });
        userBlock.classList.add('user');
        userName.classList.add('name');
        userStatus.classList.add('status');

        userName.innerText = `${name}, ${age}`;
        userStatus.innerText = `${status}`;

        userBlock.append(userName, userStatus, userRemove);
        usersBlock.appendChild(userBlock);
        content.append(title,usersBlock);
    });
}else{
    empty();
}

page.appendChild(content);
document.body.appendChild(page);

