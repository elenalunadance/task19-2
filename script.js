function createMarkup(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const title = document.createElement('h2');
    title.textContent = 'Заголовок: ' + post.title;

    const body = document.createElement('p');
    body.textContent = 'Статья: ' + post.body;

    postDiv.appendChild(title);
    postDiv.appendChild(body);

    return postDiv;
}

function addPosts(posts, container) {
    posts.forEach(post => {
        const postMarkup = createMarkup(post);
        container.appendChild(postMarkup); 
    });
}

function fetchPosts() {
    const container = document.getElementById('postsContainer'); 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        return res.json();
      })
      
        .then(posts => {
            addPosts(posts, container); 
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error);
        });
}

fetchPosts();