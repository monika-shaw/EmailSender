var express = require('express')
var http = require('http')
var path = require('path')
var nodemailer = require('nodemailer')

var app = express();
var server = http.createServer(app)
var port = 5000;

app.set("port", port)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "page/index.html")))

//Routing

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "page/index.html"))
})


app.post('/send_email', function(req, res){
    var from = req.body.from
    var to = req.body.to
    var subject = req.body.subject
    var message = req.body.message

    var trnasporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'shawmonika616ms@gmail.com',
            pass:'kgnk bkhk dvzk ruum'
        }
    })
    var mailOptions={
        from:from,
        to:to,
        subject:subject,
        text:message
    }

    trnasporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log("Email Sent", +info.res);
        }
        res.redirect("/")
    })
})
//initialize web server

server.listen(port, function(){
    console.log("staring server",+port);
})