const express = require('express')
var socket = require('socket.io')

// App setup

var app = express()

var server = app.listen(4000, function () {
    console.log('server is running at 4000')
})

//Static files
app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/', function (req, res) {
    res.render('index')
})

//Socket setup 
var io = socket(server);

io.on('connection', function (socket) {
    //unique socketid
    console.log('made socket connection', socket.id)

    socket.on('chat', function (data) {
        feedback.innerHTML = ""
        io.sockets.emit('chat', data)
    })


    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data)
    })


})