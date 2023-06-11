// В index.html
// 1. Отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2. Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3. Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const wrap = document.createElement('div');
        wrap.classList.add('wrap');

        users.forEach(user => {
            const block = document.createElement('div');
            const userBlock = document.createElement('div');
            const name = document.createElement('h2');
            const id = document.createElement('h4');
            const button = document.createElement('button');

            block.classList.add('block');
            userBlock.classList.add('userBlock');

            name.innerText = user.name;
            id.innerText = `ID: ${user.id}`;
            button.innerText = 'See details';

            button.addEventListener('click', function () {
                location.href = `user-details.html?id=${user.id}`;
            });

            userBlock.append(name, id, button);
            block.appendChild(userBlock);
            wrap.appendChild(block);
        });
        document.body.appendChild(wrap);
    });