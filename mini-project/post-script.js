// На сторінці post-details.html:
// 7. Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8ю Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const wrap = document.createElement('div');
wrap.classList.add('postWrap');

const postId = new URLSearchParams(location.search).get('id');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(posts => {
        const postDetails = document.createElement('div');
        postDetails.classList.add('postDetails');
        const id = document.createElement('h4');
        id.classList.add('id');
        const title = document.createElement('h2');
        title.classList.add('title');
        const postBody = document.createElement('h3');
        postBody.classList.add('postBody');

        id.innerText = `User ID: ${posts.userId}. Post ID: ${posts.id}`;
        title.innerText = posts.title.charAt(0).toUpperCase() + posts.title.slice(1);
        postBody.innerText = posts.body.charAt(0).toUpperCase() + posts.body.slice(1);

        postDetails.append(id, title, postBody);
        wrap.appendChild(postDetails);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                const commentsWrap = document.createElement('div');
                commentsWrap.classList.add('comments');

                comments.forEach(comment => {
                    const com = document.createElement('div');
                    com.classList.add('comment');
                    const email = document.createElement('h6');
                    email.classList.add('email');
                    const title = document.createElement('h4');
                    title.classList.add('commentTitle');
                    const body = document.createElement('h5');
                    body.classList.add('commentBody');

                    email.innerText = comment.email;
                    title.innerText = comment.name.charAt(0).toUpperCase() + comment.name.slice(1);
                    body.innerText = `"${comment.body.charAt(0).toUpperCase() + comment.body.slice(1)}"`;

                    com.append(email, title, body);
                    commentsWrap.appendChild(com);
                });
                wrap.appendChild(commentsWrap);
            });
    });
document.body.appendChild(wrap);

