// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let userId = new URLSearchParams(location.search).get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        let userInfo = document.createElement('div');
        let ul=document.createElement('ul');
        userInfo.appendChild(ul);
        document.body.appendChild(userInfo);
        explorer(user, ul);
    });

function ulAdd(key,object,block){
    let li=document.createElement('li');
    let ul=document.createElement('ul');
    li.innerText=key;
    block.appendChild(li);
    li.appendChild(ul);
    explorer(object,ul);
}
function liAdd(key,value,block){
    let li=document.createElement('li');
    li.innerText=`${key}: ${value}`;
    block.appendChild(li);
}
function explorer(object, block) {
    for (let key in object) {
        if (typeof object[key] === 'object') {
            ulAdd(key, object[key],block);
        } else {
            liAdd(key,object[key], block);
        }
    }
}
