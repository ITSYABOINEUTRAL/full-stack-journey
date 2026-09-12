const itemInput = document.getElementById('item-input');

// const onKeyPress = (e) => {
//     console.log("Key Press")
// }

// const onKeyUp = (e) => {
//     console.log("Key Up")
// }

const onKeyDown = (e) => {
    // console.log("Key Down")
    // // Key 
    // console.log(e.key)
    // document.querySelector('h1').innerText = e.key
    // Key Code
    console.log()
    if (e.keycode === 13) {
        alert("You have pressed Enter")
    }
    // Code
console.log(e.code)
}



// itemInput.addEventListener('keypress', onKeyPress)

// itemInput.addEventListener('keyup', onKeyUp)

itemInput.addEventListener('keydown', onKeyDown)