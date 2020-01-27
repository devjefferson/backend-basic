const http = require('http')
const app = require('express')()
const routes = require('../src/routes')
const server = http.createServer(app);

app.use(routes)


module.exports = server