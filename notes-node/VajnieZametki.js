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
        //in terminal
        node app.js list

        console.log(process.argv);
        //on console
        [ '/Users/otash/.nvm/versions/node/v10.11.0/bin/node',
          '/Users/otash/Flatiron/Node/NODE.js/notes-node/app.js',
          'list' ]

        const command = process.argv[2]
        console.log(command); // list

Lesson 14. Simplified input with Yargs

    //used to parsing the argument easyly which was entered in the terminal
    const yargs = require('yargs')
    //in the terminal
    const argv = yargs.argv
        // we can access title or body
    argv.title
    argv.body


Lesson 15. Working with JSON


        let obj = {
            name:"Otabek",
            age: 32
        }
        JSON.stringify(obj)
        //converts it into string
        // => single quotes '' outside, double qoutes "" inside
        '{"name":"Otabek","age":32}'

        let string = '{"name":"Otabek","age":32}'

        JSON.parse(string)
        //converts it into object
        //=>
        {
            name:"Otabek",
            age: 32
        }

Lesson 16-17-18-19. Adding, Saving, Removing and Reading notes and Refuctering

        //inside notes.js
        let fs = require('fs')

        let fetchNotes = () => {
            try {
                let allNotesString = fs.readFileSync('notes-data.json')
                notes = JSON.parse(allNotes)
                return notes
            } catch (e) {
                return []
            }
            //we are using try and catch, because at the begging of the program it will throw an error for not finding a file notes-data.json
        }

        let saveNotes = (notes) => {
            fs.writeFileSync('notes-data.json', JSON.stringify(notes))
        }

        let addNote = (title,body) => {
            let notes = fetchNotes()
            let note = {
                title,
                body
            }
            /* same as below
            let note = {
                title:title,
                body:body
            }*/

            let dublicateNotes = notes.filter((note)=> note.title === title)
            if (dublicateNotes.length === 0) {
                notes.push(note)
                saveNotes(notes)
                return note
            }

        }
        // removing is in notes.js line 42-47
        // skipped the getting a note

Lesson 20. Debugging Node.js Application

        //in the terminal using NODE INSPECTOR
        node debug app.js
        // enters debugging module
        n
        // type n (next) and hit Enter key, to execute  next statement
        c
        // type c (continue) and hit Enter key, to go to end of the code  statement
        repl
        //type repl  and hit Enter key, to play around, until line break debug executed
        // in the atom inside the .js file
        control + c
        // to exit debug repl

        debugger
        //line breaks  before debugger

Lesson 21-22. Nothing new to note here
Lesson 23. Requiring Yargs arguments and advanced yargs

        // inside app.js
        const yargs = require('yargs')
        const argv = yargs.command('add','Add a new note',{
            title:{
                describe:'Title of note',
                demand:true,
                alias:'t'
            },
            body:{
                describe:'Body of note',
                demand:true,
                alias:'b'
            }
        })
