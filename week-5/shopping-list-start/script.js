const div = document.createElement('div')

div.className = "my-element"

// div.textContent = "My Element"

div.setAttribute('title', 'myElement')

const text = document.createTextNode("Hello World!")

div.appendChild(text)

document.body.appendChild(div)

// document.querySelector('#item-list').appendChild(div)
console.log(div)