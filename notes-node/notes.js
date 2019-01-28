console.log('Starting node.js')

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
    module.exports = {
      addNote
    }

/*
console.log(module);
***in the console***
Module {
  id: '/Users/otash/Flatiron/Node/NODE.js/notes-node/notes.js',
  exports: {},
  parent:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: '/Users/otash/Flatiron/Node/NODE.js/notes-node/app.js',
     loaded: false,
     children: [ [Circular] ],
     paths:
      [ '/Users/otash/Flatiron/Node/NODE.js/notes-node/node_modules',
        '/Users/otash/Flatiron/Node/NODE.js/node_modules',
        '/Users/otash/Flatiron/Node/node_modules',
        '/Users/otash/Flatiron/node_modules',
        '/Users/otash/node_modules',
        '/Users/node_modules',
        '/node_modules' ] },
  filename: '/Users/otash/Flatiron/Node/NODE.js/notes-node/notes.js',
  loaded: false,
  children: [],
  paths:
   [ '/Users/otash/Flatiron/Node/NODE.js/notes-node/node_modules',
     '/Users/otash/Flatiron/Node/NODE.js/node_modules',
     '/Users/otash/Flatiron/Node/node_modules',
     '/Users/otash/Flatiron/node_modules',
     '/Users/otash/node_modules',
     '/Users/node_modules',
     '/node_modules' ] }
*/
