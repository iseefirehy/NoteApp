console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log("Command:", command);
console.log('Process',process.argv);
console.log('Yargs',argv);


if(command === 'add'){
    notes.addNote(argv.title,argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(argv.title);
}else if(command === 'remove'){
   notes.removeNote(argv.title);
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
