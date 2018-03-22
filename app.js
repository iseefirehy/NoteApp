console.log('Starting app');

const fs = require('fs');

fs.appendFile('greetings.txt','Hello World!');

/*
* fs.appendFile('greetings.txt'.'Hello World!',function (err){
*   if(err){
*   console.log('Unable to write to file');
* }
* });
*
* fs.appendFileSync('greetings.txt','Hello world!');
* */