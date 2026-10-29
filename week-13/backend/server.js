const http = require('http')
const app = require('./app/app')

const PORT = process.env.PORT || 3000;

// SERVER
const server = http.createServer(app)
app.listen(PORT, console.log(`Server is running on ${PORT}`))