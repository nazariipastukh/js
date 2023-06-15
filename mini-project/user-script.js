// На сторінці user-details.html:
// 4. Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5. Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6. Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

const userId = new URLSearchParams(location.search).get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        const userDetails = document.createElement('div');
        userDetails.classList.add('userDetails');
        document.body.appendChild(userDetails);

        explorer(user, userDetails);

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv');
        const button = document.createElement('button');
        button.classList.add('postsButton');
        button.innerText = 'See posts';
        buttonDiv.appendChild(button);
        userDetails.appendChild(buttonDiv);

        let checkPosts = false;
        button.addEventListener('click', function () {
            const userId = new URLSearchParams(location.search).get('id');

            if (!checkPosts) {
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const postsDiv = document.createElement('div');
                        postsDiv.classList.add('posts');

                        posts.forEach(post => {
                            const postDiv = document.createElement('div');
                            postDiv.classList.add('post');
                            const postTitle = document.createElement('div');
                            postTitle.classList.add('postTitle');
                            postTitle.innerText = `ID: ${post.id}. "${post.title.charAt(0).toUpperCase() + post.title.slice(1)}"`;
                            const postButton = document.createElement('button');
                            postButton.classList.add('postButton');
                            postButton.innerText = 'Post Details';

                            postButton.addEventListener('click', function () {
                                location.href = `post-details.html?id=${post.id}`;
                            });
                            postDiv.append(postTitle, postButton);
                            postsDiv.appendChild(postDiv);
                        });
                        document.body.appendChild(postsDiv);
                        checkPosts = true;
                    });
            }
        });
    });

function explorer(object, mainBlock) {
    for (let key in object) {
        const innerBlock = document.createElement('div');
        innerBlock.classList.add('innerBlock');
        const keyValue = document.createElement('p');
        keyValue.classList.add('key');
        const value = document.createElement('p');
        value.classList.add('value');
        keyValue.innerText = `${key.charAt(0).toUpperCase() + key.slice(1)}:`;

        if (typeof object[key] === 'object') {
            innerBlock.append(keyValue, value);
            mainBlock.appendChild(innerBlock);
            explorer(object[key], innerBlock);
        } else {
            value.innerText = `${object[key]}`;
            innerBlock.append(keyValue, value);
            mainBlock.appendChild(innerBlock);
        }
    }
}



