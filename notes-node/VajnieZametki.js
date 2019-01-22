Lesson 9. Using Require
    // Allows us use existing functions (e.x require(‘fs’)) or built in modules like ‘fs’ and ‘os’

    //App.js

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

    //// Creating greetings.txt file using 'fs' and appending given string as a second argument('Hello world!'), if file does not exsists, it creates new one, if it exists it will append the given string

Lesson 10. Requiring your own files
    // inside notes.js

    module.exports.add = (a,b) => {
    return a+b;
    }

    // inside app.js
    const notes = require('./notes.js')
    console.log('Result:', notes.add(9,6));
    // we can access add func in notes.js

Lesson 11. Using 3rd party modules

        //// run in terminal
        npm init
        //// this creates a package.json file
         npm install lodash --save
        //// instaling lodash
        const _ = require('lodash')
        _.isSting('otash')  //// provides with helpful utilies
        //// lodash.com alot of methods



Lesson 12. Restarting App with Nodemon
        //in the terminal
        npm install nodemon -g
        // will install nodemon globally
        nodemon app.js
        //// if I update the code and save it, it will automaticly update the terminal, no need to do node app.js after each changes
        ctrl + c // to exit nodemon



Lesson 13. Getting Input from User

        
