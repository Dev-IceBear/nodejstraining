var express = require('express')
var app = express()

//this enables express and specifies the port on which it listens. can be tested in the browser using localhost:3000 or whatever port we specify
// we can enable it using nodemon
// we are using express to pass a static file. In this case, the entire directory using __dirname
app.use(express.static(__dirname))
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})

