// // Get Child Element

// let output;

// const parent = document.querySelector('.parent')

// output = parent.children

// output = parent.children[0].innerText

// output = parent.children[0].className

// output = parent.children[0].nodeName

// output = parent.children[1].innerText = "I have 2 kids"

// parent.children[1].style.color = "Red"

// output = parent.firstElementChild.innerText = "She has 3 kids"

// console.log(output);

// // Get Parent Element

// let x;

// const child = document.querySelector('.child')

// x = child.parentElement

// x = child.parentElement.style.border = "2px dashed #ccc"

// x = child.parentElement.style.padding = "10px"

// // Get Sibling Elements

// const secondItem = document.querySelector('.child:nth-child(2)')

// output = secondItem;

// output = secondItem.previousElementSibling;

// console.log(output)


let output;

parent = document.querySelector('.parent')


output = parent.childNodes

output = parent.childNodes[0].textContent

output = parent.childNodes[0].nodeName

output = parent.childNodes[3].textContent

output = parent.childNodes[3].outerHTML

output = parent.childNodes[3].innerText = "Child one"





console.log(output)

