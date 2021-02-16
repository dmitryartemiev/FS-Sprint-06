const fs = require('fs');
const path = require('path');
const ip = require('ip')
const express = require('express')
const app = express();
const os = require('os')
const useragent = require('express-useragent')

let PORT = 3000;

 app.listen(PORT);
  app.get('/', function(req, res){
    res.send(req.useragent);
});


console.log(`a name of file of the executed script: ${path.basename(__filename)}`);
console.log(`arguments passed to the script: ${process.argv.slice(2)}`);
console.log(`IP address of the server ${ip.address()}`);
console.log(`a name of host that invokes the current script: ${os.hostname()}`);
console.log(`a name and a version of the information protocol:`);
console.log(`a query method: `);
console.log(`User-Agent information: `);
console.log(`IP address of the client: ${ ip.address()}`);
console.log(`a list of parameters passed by URL: `);
