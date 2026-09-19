function getData(endpoint) {
  return new Promise((resolve, reject) => {
    fetch('GET', endpoint)
    .then(
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        }else {
          reject('Error: Something went wrong');
        });

    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));


// const getAllData = async () => {
//   const movies = await getData('./movies.json') 
//   const actors = await getData('./actors.json') 
//   const directors = await getData('./directors.json') 
//   console.log(movies, actors, directors)
// }
// console.log(1, 2, 3)
// getAllData()