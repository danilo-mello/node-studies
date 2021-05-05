const fs = require('fs')
const path = require('path')

// create a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//     if (err) throw err
//     console.log('folder created')
// })

// create and write to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello Node.JS', (err) => {
//     if (err) throw err
//     console.log('file created')
// })

// append to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello Node.JS', (err) => {
//     if (err) throw err
//     console.log('file created')

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Appended text...', (err) => {
//         if (err) throw err
//         console.log('file appended')
//     })
// })

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    (err) => {
        if (err) throw err
        console.log('File Renamed')
    }

)