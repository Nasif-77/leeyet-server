const express = require('express')
require('dotenv').config()
const cors = require('cors')
const router = require('./routers/router')
const path = require('path')
const mongoose= require('mongoose')
const morgan = require('morgan')

mongoose.connect(process.env.DATABASE_URL,({}))

const db = mongoose.connection
db.on('error',(error)=>{
    console.log(error)
})
db.once('open',()=>{
    console.log('succesfully connected to Database')
})


const app = express()


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())  
app.use(express.urlencoded({extended:true}))
app.use('/',router)
app.use('/uploads',express.static(path.join(__dirname,'uploads')))


const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})