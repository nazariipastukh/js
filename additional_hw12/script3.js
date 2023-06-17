// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const main = document.createElement('ul');
        document.body.appendChild(main);
        users.forEach(user => {
            const name = document.createElement('li');
            const link = document.createElement('a');
            link.href = `index3info.html?id=${user.id}`;
            link.innerText = `ID:${user.id} - ${user.name}`;
            name.appendChild(link);
            main.appendChild(name);
        });
    });