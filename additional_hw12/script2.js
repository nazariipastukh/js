// 1.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const mainBlock = document.createElement('div');
        document.body.appendChild(mainBlock);
        posts.forEach(post => {
            const postBlock = document.createElement('div');
            postBlock.classList.add('postBlock');
            const text = document.createElement('p');
            text.innerText = post.body;
            const postButton = document.createElement('button');
            postButton.innerText = 'Comments';
            postBlock.append(text, postButton,);
            mainBlock.appendChild(postBlock);

            let commentIs = false;
            postButton.addEventListener('click', function () {
                if (!commentIs) {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                        .then(response => response.json())
                        .then(comments => {
                            const commentBlock = document.createElement('div');
                            commentBlock.innerHTML = '';

                            comments.forEach(comment => {
                                const commentElement = document.createElement('div');
                                commentElement.innerText = comment.name;
                                commentBlock.appendChild(commentElement);
                                postBlock.appendChild(commentBlock);
                            });
                        });
                }
                commentIs = true;
            });
        });
    });