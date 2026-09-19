try {
    console.log(x)
} catch (error) {
    console.log("Error " + error)
}


// function double (n) {
//     n * 2
// }


// console.log(double("String"))


function double (n) {
    if (isNaN(n)) {
        throw new Error (n + " is not a number")
    } 
    return n * 2
}

// console.log(double("String"))


try {
    const y = double("String")
} catch (error) {
    console.log(error)
}