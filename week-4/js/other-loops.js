const items = ["Book", "Table", "Pencil", "Pen", "Chair"];

// For Loop
// for(initial; conditionExpression; increment){Action} 

const users = [{name: "Sharon"}, {name: "Jerry"}, {name: "Christabel"}]
// For Of Loops

// For of Loop Over Arrays
// for(x of items){
//     console.log(x);
// }

// For of Loop Over Arrays of Object
// for(user of users){
//     console.log(user.name);
// }

// For of Loop Over Strings
const str = "Hello World";

// for(letter of str){
//     console.log(letter)
// }

// For In Loops

for (const key in users){
    console.log(key, users[key].name)
}