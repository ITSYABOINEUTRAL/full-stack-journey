// const xml = new XMLHttpRequest();


// console.log(xml)

// // readyState has 5 possible values
// // - 0: request not initialized
// // - 1: server connection established
// // - 2: request received
// // - 3: processing request
// // - 4: request finished and response is ready

// xml.open('GET', './movies.json');

// // readyState has 5 possible values
// // - 0: request not initialized
// // - 1: server connection established
// // - 2: request received
// // - 3: processing request
// // - 4: request finished and response is ready


// xml.onreadystatechange = function () {
//     // console.log(this.readyState)
//     if (this.readyState === 4 && this.status === 200) {
//         // console.log(this.responseText)
//         const data = JSON.parse(this.responseText)
//         data.forEach((movie) => {
//             const li = document.createElement('li')
//             li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`
//             document.querySelector('ul').appendChild(li)            
//         });

//     }
// }



// xml.send()


const xml = new XMLHttpRequest();

xml.open('GET', 'https://api.github.com/users/itsyaboineutral/repos')

xml.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText)
        const data = JSON.parse(this.responseText)
        data.forEach(repo => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.url}`   
            document.querySelector('ul').appendChild(li)          
        });
    }
}

xml.send();