
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    let error = false;

    if (!error) {
      setTimeout(() => {
        posts.push(post);
        resolve()
      }, 2000);
    } else {
      reject("Something went wrong!")
    }

  })
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post' }).then(getPosts).catch(() => console.log("Something went wrong!")).finally("The promise has either been resolved or rejected")
