// 1.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

const wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.classList.add('userBlock');
            wrap.appendChild(userBlock);
            explorer(user, userBlock, user.id);

            const buttonPost = document.createElement('button');
            buttonPost.innerText = 'Show posts';
            userBlock.appendChild(buttonPost);

            let postIs = false;
            buttonPost.addEventListener('click', function () {
                const postBlock = document.createElement('div');
                postBlock.classList.add('postBlock');

                if (!postIs) {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(response => response.json())
                        .then(posts => {
                            const leftBlock = document.createElement('div');
                            const rightBlock = document.createElement('div');
                            rightBlock.classList.add('rightBlock');

                            posts.forEach(post => {
                                const postElement = document.createElement('div');
                                const postButton = document.createElement('button');
                                postButton.classList.add('postButton');
                                postElement.appendChild(postButton);
                                postElement.innerText = post.title;
                                postElement.classList.add('postElement');
                                postElement.appendChild(postButton);
                                leftBlock.appendChild(postElement);

                                let commentIs = false;
                                postButton.addEventListener('click', function () {
                                    const commentBlock = document.createElement('div');
                                    commentBlock.classList.add('commentBlock');
                                    if (!commentIs) {
                                        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                            .then(response => response.json())
                                            .then(comments => {
                                                rightBlock.innerHTML = '';

                                                comments.forEach(comment => {
                                                    const commentElement = document.createElement('div');
                                                    commentElement.innerText = comment.name;
                                                    commentElement.classList.add('postElement');
                                                    rightBlock.appendChild(commentElement);
                                                });
                                            });
                                    }
                                    commentIs = true;
                                })
                            });
                            postBlock.appendChild(leftBlock);
                            postBlock.appendChild(rightBlock);
                        });
                }
                postIs = true;
                userBlock.appendChild(postBlock);
            });
        });
    });

function explorer(object, block, userId) {
    for (let key in object) {
        const innerBlock = document.createElement('div');
        innerBlock.classList.add('innerBlock');
        const keyName = document.createElement('p');
        keyName.classList.add('keyName');
        const keyValue = document.createElement('p');
        keyValue.classList.add('keyValue');
        keyName.innerText = key;

        if (typeof object[key] === 'object') {
            innerBlock.append(keyName, keyValue);
            block.appendChild(innerBlock);
            explorer(object[key], innerBlock, userId);
        } else {
            keyValue.innerText = object[key];
            innerBlock.append(keyName, keyValue);
            block.appendChild(innerBlock);
        }
    }
}