// let x;
const name  = "David-Isaac"
const age = 2
// x = "Hello my name is " + name + " and I'm " + age + " years old";
// Template Literals

x = `Hello my name is ${name} and I'm ${age + 1} years old`;

// Methods and Properties of Strings
// Methods
// Length
const s = "Hello World This is a JavaScript Class!";
console.log(typeof s);
// x = s.length;
x = s.toLocaleUpperCase()
x = s.toLocaleLowerCase()
x = s.charAt(12)
x = s.indexOf("x")
x = s.substring(7)
x = s.slice()
x = s.trim()
x = s.replace("World", "David")
x = s.includes("Wor")
x = s.valueOf()
x = s.split(" ")
console.log(x);