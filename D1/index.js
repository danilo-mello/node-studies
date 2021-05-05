const express = require('express')
const path = require('path')


const shopRouters = require('./routes/shop')
const adminRouters = require('./routes/admin')

const app = express()

// // middlewares
// app.use((req, res, next) => {
//     console.log('In the first middleware')
//     next()
// })

// app.use('/hello', (req, res, next) => {
//     console.log('In the second middleware')
//     res.send('<h1>Hello from express.js</h1>')
// })

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })



//to parse incoming form data
app.use(express.urlencoded({extended: false}))

//serving files dynamically
app.use(express.static(path.join(__dirname,'public')))

//route
app.use('/admin', adminRouters)
app.use(shopRouters)


//catch-all-middleware (404, 500)
app.get('*', function(req, res){
    res.send('404 PAGE', 404);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
