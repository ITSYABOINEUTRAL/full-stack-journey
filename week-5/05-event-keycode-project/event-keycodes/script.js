// Method 1
// const something = (e) => {
//    const insert = document.getElementById('insert');

//    insert.innerHTML = `
//    <div class="key">
//         ${e.key === ' ' ? 'Space' : e.key}
//         <small>e.key</small>
//     </div>

//     <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//     </div>

//     <div class="key">
//         ${e.code}
//         <small>event.code</small>
//     </div>
//     `

// }

// window.addEventListener('keydown', something)

// Method 2
const showCode = (e) => {
    const insert = document.getElementById('insert')

    const keyCode = {
        "e.key": e.key === ' ' ? 'Space' : e.key,
        "e.keyCode": e.keyCode,
        "e.code": e.code
    }

    for (let key in keyCode) {
        const div = document.createElement('div')
        div.classList.add('key')

        const small = document.createElement('small')
        small.innerText = key

        div.innerText = keyCode[key]
        div.appendChild(small)
        insert.appendChild(div)
    }
}

window.addEventListener('keydown', showCode)