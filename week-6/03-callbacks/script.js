// function toggle(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

const posts = [{title: "Post1", body: "This is Post 1"}, {title: "Post2", body: "This is Post 2"}]


function createPosts (post, cb) {
  setTimeout(() => {
    posts.push(post)
    cb()
  }, 2000)
}

createPosts({title: "Post3", body: "This is Post 3"}, getPosts)

function getPosts () {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div')
      div.innerHTML = `<h3>${post.title} - ${post.body}</h3>`
      document.querySelector('#posts').appendChild(div)
    })
  }, 1000)
}

// getPosts()
