console.log("Starting app.");

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')
// access the notes.js file

var res = notes.addNote()
console.log(res);
// accessing addNote function in notes.js
 
console.log('Result:', notes.add(9,6));
// accessing add function and exucuting in notes.js
let user = os.userInfo()
//console.log(user)

/*{ uid: 501,
  gid: 20,
  username: 'otash',
  homedir: '/Users/otash',
  shell: '/bin/bash' }
*/

fs.appendFile('greetings.txt',`Hello ${user.username}!`, (err)=>{
  if(err){
    console.log('Unable to write to file');
  }
})

// Creating greetings.txt file using 'fs' and appending given string as a second argument('Hello world!'), if file does not exsists, it creates new one, if it exists it will append the given string
