const API_URL = "https://jsonplaceholder.typicode.com/todos";

const itemInput = document.getElementById('title')

const getTodo = () => {
    fetch(API_URL + '?_limit=5')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((todo) => {
            createTodoElement(todo)
        });
    })
}

const createTodoElement = (todo) => {
    const div = document.createElement('div')
    div.appendChild(document.createTextNode(todo.title))
    div.setAttribute('data-id', todo.id)
    if (todo.completed) {
        div.classList.add('done')
    }
    document.getElementById('todo-list').appendChild(div)
}

const postTodo = (e) => {
    e.preventDefault()
    const newTodo = {title: e.target.firstElementChild.value, completed: false}
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {createTodoElement(data)})

    itemInput.value = ""
    itemInput.focus()
}

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodo)
    document.querySelector('#todo-form').addEventListener('submit', postTodo)


}
init()