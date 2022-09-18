const express = require('express')
const bodyParser = require('body-parser')
const {default:mongoose} = require('mongoose')
const multer = require('multer')
const app = express()
const port = 3000;

const routes = require('./Routes/routes')

app.use(bodyParser.json())
app.use(multer().any())

mongoose.connect("mongodb+srv://sharmaji232001:bhuvi844964@cluster0.a2txi.mongodb.net/group63Project5Database",
    { useNewUrlParser: true })

    .then(() => console.log("MongoDB is Connected...🥳🎉🎈"))
    .catch((err) => console.log(err.message))

app.use('/', routes)

app.listen(port, () => {
    console.log(`Express app listening on port ${port}...🎧🙉🙉`);
})


