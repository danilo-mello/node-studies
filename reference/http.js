const http = require('http')

// create a server object
http.createServer((request, response, next) => {
    // write a response
    response.write('<h1>Hello World ddddd</h1>')
    response.end()
}).listen(5000, () => console.log('Server is running on port 5000...'))