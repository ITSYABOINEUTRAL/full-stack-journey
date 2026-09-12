function changeText () {
 document.querySelector('h1').textContent = "Hello from Callback!"
}

const timerId = setTimeout (changeText, 5000)

document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId)
    clearTimeout(timerId)
    console.log("Timer Cancelled")
})