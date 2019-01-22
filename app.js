console.log("Starting app.");

const fs = require('fs')
const os = require('os')

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
