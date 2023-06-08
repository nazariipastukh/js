// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let userId = new URLSearchParams(location.search).get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let userInfo = document.createElement('div');
        for (let key in user) {
            let info = document.createElement('p');
            info.innerText = `${key}: ${user[key]}`;
            userInfo.appendChild(info);
        }
        document.body.appendChild(userInfo);
    });