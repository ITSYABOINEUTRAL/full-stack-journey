// const intervalId = setInterval(myCallback, 2500, 'Hello!');

// function myCallback (a) {
//     console.log(Date.now(), a)
// };

// document.getElementById('stop').addEventListener('click', stopChange);

// function stopChange () {
//     clearInterval(intervalId);
// };

let intervalId;

function changeRandomColor () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.backgroundColor = `#${randomColor}`
}

function startChange () {
    if (!intervalId) {
        intervalId = setInterval(changeRandomColor, 1000)
    }
}


// function changeColor () {
//     if (document.body.style.backgroundColor !== "black") {
//         document.body.style.backgroundColor = "black"
//         document.body.style.color = "white"
//     } else {
//         document.body.style.backgroundColor = "white"
//         document.body.style.color = "black"
//     }
// }

document.getElementById('start').addEventListener('click', startChange)

document.getElementById('stop').addEventListener('click', stopChange)

function stopChange () {
    if (intervalId) {
        clearInterval(intervalId)
    }
}