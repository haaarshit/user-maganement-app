const express= require('express')
const  dotenv = require('dotenv')
const  morgan = require('morgan')
const  path = require('path')
const bodyparser = require('body-parser')
const connectDB = require('./server/database/connection')


connectDB()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3000
const app = express()

// specifying .env file

// use morgan module -> enable us to log request in console
app.use(morgan('tiny'))

// set viw engine
app.set('view engine','ejs')

// parse request
app.use(bodyparser.urlencoded({extended:true}))

// specify assets folder
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))


//  user routes
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`Server is listnening on http://localhost:${PORT}`)
})