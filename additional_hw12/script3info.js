// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const link = new URLSearchParams(location.search).get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${link}`)
    .then(response => response.json())
    .then(user => {
        const mainDiv = document.createElement('ul');
        document.body.appendChild(mainDiv);
        explorer(user, mainDiv);
    });

function ul(key, object, block) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerText = `${key}:`;
    li.appendChild(ul);
    block.appendChild(li);
    explorer(object, ul);
}

function li(key, value, block) {
    const li = document.createElement('li');
    li.innerText = `${key}: ${value}`;
    block.appendChild(li);
}

function explorer(object, block) {
    for (const key in object) {
        if (typeof object[key] === 'object') {
            ul(key, object[key], block);
        } else {
            li(key, object[key], block);
        }
    }
}

