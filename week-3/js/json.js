const post = 
    {
        id: 1,
        name: "David-Isaac",
        username: "nwagudavidisaac",
        email: "nwagudavidisaac@gmail.com",
        password: "nwagudavidisaac1234"

    }
// Converted an Object to a JSON using stringify
const str = JSON.stringify(post)
const x = str.id


// Converted a JSON to an Object by parsing the JSON
const y = JSON.parse(str)
const z = y.id

console.log(str, x, y, z)
