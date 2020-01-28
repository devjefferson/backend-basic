const http = require('http')
const morgan = require('morgan')
const express = require('express')
const app = express()
const routes = require('../src/routes')
const server = http.createServer(app);
require("dotenv").config()

app.use(morgan('dev'))
app.use(express.json())
app.use(routes)


module.exports = server