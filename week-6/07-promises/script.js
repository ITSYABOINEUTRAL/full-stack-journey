// Make a Promise to eventually complete or reject an Asynchronous Operation
// const promise = new Promise((resolve, reject) => {
//     // Do some Asynchronous Task
//     setTimeout(() => {
//         console.log("Async Task Complete")
//         resolve()
//     }, 1000)
// })

// // Resolve/Reject Promise
// promise.then(() => {
//     console.log("Promise Consumed")
// })

const getUser = new Promise((resolve, reject) => {
    let error = true;

    if (!error) {
        resolve({name: "Victor", occupation: "Mechatronics Engineer"})
    } else {
        reject("Something went wrong")
    }
})

getUser
.then((user) => console.log(user))
.catch((error) => console.log("Something went wrong!")).finally(() => console.log("The promise has either been resolved or rejected"))


// console.log("Hello from Global Scope!")