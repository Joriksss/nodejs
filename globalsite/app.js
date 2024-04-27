//подлючение библиотек
const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require('morgan')
const keys = require("./config/keys.js")
const mongoose = require ('mongoose')


mongoose.connect(keys.mongoURI)
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.log(error))

//Подлючение файл через наследине(мб)
const authRoutes = require("./routes/auth.js");

// express
const app = express();


app.use(morgan("dev"))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/api/auth", authRoutes)

module.exports = app;