//imports
const path = require('path')
const express = require('express')


const mainRoutes = require('./routes/main-routes')

//Setups
const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

//Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'public')))

//Routes
app.use(mainRoutes)

//Server starts
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))