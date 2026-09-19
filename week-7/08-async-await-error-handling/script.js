const getUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholdr.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}       

getUser()