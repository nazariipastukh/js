// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let block = document.createElement('div');
        users.forEach(user => {
            let link = document.createElement('a');
            link.classList.add('link');
            link.href = `user-details.html?id=${user.id}`;
            link.innerText = `ID: ${user.id}. ${user.name}`;
            block.appendChild(link);
        });
        document.body.appendChild(block);
    });

