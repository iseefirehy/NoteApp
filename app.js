console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');


const notes = require('./notes.js');

var command = process.argv[2];
console.log("Command:", command);

if(command === 'add'){
    console.log('Adding new note');
}else if(command === 'list'){
    console.log('list all notes');
}else if(command === 'read'){
    console.log('Reading note');
}else if(command === 'remove'){
    console.log('Removing note');
}else{
    console.log('Command not recognized');
}


// var user = os.userInfo();
// console.log(_.isString('hello'));
// var filteredArray = _.uniq(['Mike']);
// console.log(filteredArray);


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
