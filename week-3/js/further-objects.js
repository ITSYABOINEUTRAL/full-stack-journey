// Naming
const firstName = "Sharon"
const lastName = "Madaki"
const age = 24

const person = {
    firstName,
    lastName,
    age
};


// Destructuring of Objects
const toDo = {
    id: 1,
    title: "Take Out Trash",
    user: {
        name: "Sharon"
    }
}

// const id = toDo.id

const {id, user:{name}} = toDo


// Destructuring of Array
const fruits = ["Banana", "Apple", "Orange"]

const [david, sharon] = fruits







console.log(david, sharon);