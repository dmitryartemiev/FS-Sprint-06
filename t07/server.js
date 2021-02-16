const http = require('http')
const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express')
const app =express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('t07/index.html').pipe(res)
})

server.listen(process.env.PORT || 3000, () =>{
    console.log('Server listening on port 3000...');
})


app.post('t07/index.html',urlencodedParser, function(req, res){
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('t07/index.html')
})