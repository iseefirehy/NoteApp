console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


// var user = os.userInfo();
// console.log(_.isString('hello'));
var filteredArray = _.uniq(['Andrew',1,2,3,4,'Andrew',1,2,3,4]);
console.log(filteredArray);


// fs.appendFile('greetings.txt','Hello World!' + user.username + '!');
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`);

// var res = notes.addNote();
// console.log(res);
//
// console.log('Result:' + notes.add(10,10));
/*
* fs.appendFile('greetings.txt'.'Hello World!',function (err){
*   if(err){
*   console.log('Unable to write to file');
* }
* });
*
* fs.appendFileSync('greetings.txt','Hello world!');
* */
