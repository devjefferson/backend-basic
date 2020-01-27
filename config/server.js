const http = require('http')

const express = require('express')
const app = express()
const routes = require('../src/routes')
const server = http.createServer(app);
require("dotenv").config()

app.use(express.json())

app.use(routes)


module.exports = server