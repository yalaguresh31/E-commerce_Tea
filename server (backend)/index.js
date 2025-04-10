const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors());

mongoose.connect("mongodb://localhost:27017/E-Commerce_Tea")

app.get('/',(req, res) =>{
    res.send('Hello World')
})

app.listen(3000,() =>{
    console.log('server is running... http://localhost:3000/');
})
