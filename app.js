console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./playground/notes.js');
const titleOptions = {
  describe: 'Title of note',
  demand:true,
  alias:'t'
};
const bodyOptions={
  describe: 'Body of note',
  demand:true,
  alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note',{
        title:titleOptions,
        body:bodyOptions

    })
    .command('list','List all notes')
    .command('read','Read a note',{
        title:titleOptions,
        body:bodyOptions
    })
    .command('remove','Remove a note',{
        title:titleOptions,
        body:bodyOptions
    })
    .help()
    .argv;
var command = argv._[0];
console.log("Command:", command);
console.log('Process',process.argv);
console.log('Yargs',argv);


if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }else{
        console.log('Note title taken');
    }

}else if(command === 'list'){
    var allNotes=notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note)=>notes.logNote(note));
}else if(command === 'read'){
   var note = notes.getNote(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }
}else if(command === 'remove'){
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);
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
