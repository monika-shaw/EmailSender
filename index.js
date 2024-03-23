var express = require('express')
var http = require('http')
var path = require('path')
//var modeMailer = require('nodemailer')

var app = express();
var server = http.Server(app)
var port = 500;

app.set("port", port)
app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "page/index.html")))

//Routing

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "page/index.html"))
})


//initialize web server

server.listen(port, function(){
    console.log("staring server",+port);
})