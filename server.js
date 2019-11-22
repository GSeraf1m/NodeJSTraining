const express = require('express');
const bodyParser = require('body-parser')

const routes = require('./routes/index.js');

const app = express();

app.use((req, res, next) => {
    console.log("First Middleware");
    bodyParser.urlencoded({extended:false});
    next()
})

app.use(routes)

app.listen(8080);