const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const root = require('./helpers/path')
const routes = require('./routes/index.routes.js');

const app = express();

app.use((req, res, next) => {
    console.log("First Middleware");
    bodyParser.urlencoded({extended:false});
    next()
})

app.use(routes)

app.use((req,res) => {
    res.status(404).sendFile(path.join(root,'views','page-not-found.html'))
})

app.listen(8080);