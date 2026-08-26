const socials = ["Snapchat", "X", "Tiktok", "WhatsApp", "Instagram"];

const users = [{name: "Sharon"}, {name: "Jerry"}, {name: "Christabel"}];
// console.log(socials.__proto__)

// For Each
// arrayName.forEach(function (parameter) {
//     Action(parameter)
// });

// users.forEach(function (item) {
//     console.log(item.name);
// })

// Array.filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function(number){
//     doubleEvenNumbers = (number % 2 === 0) * 2;
// })

// console.log(doubleEvenNumbers)

// Trying the Same thing with forEach
// let evenNumbers = [];
// numbers.forEach(number => {
//     if(number % 2 === 0){
//         evenNumbers.push(number)
//     }
// })

// console.log(evenNumbers)

// Array.map()
// const doubledNumbers = numbers.map((number) => number * 2)

// console.log(doubledNumbers)

// Array.reduce()
const sum = numbers.reduce((acc, cv) => {
    return acc + cv;
}, 0)

console.log(sum)