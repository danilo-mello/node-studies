const path = require('path')

// basename
console.log('basename: ', path.basename(__filename))

// directory
console.log('directory: ', path.dirname(__filename))

// file extension
console.log('fileext: ', path.extname(__filename))

// create a path object
console.log('path obj: ', path.parse(__filename))

// concat paths
console.log('path concat: ', path.join(__dirname, 'test', 'hello.html'))