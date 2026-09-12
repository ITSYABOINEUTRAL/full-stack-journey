fetch('./movies.json').then((response) => {
    return response.json()
}).then((data) => console.log(data))


fetch('./test.txt').then((response) => {
    return response.text()
}).then((data) => console.log(data))

fetch('./movies.json').then((response) => {
    return response.json()
}).then((data) => console.log(data))