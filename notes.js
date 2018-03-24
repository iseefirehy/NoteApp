console.log('notes.js');

module.exports.age = 25;

module.exports.addNote = () =>{
  console.log('AddNote');
  return 'New Note';
};

module.exports.add = (a,b) =>{
  return a + b;
};