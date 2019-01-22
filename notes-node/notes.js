console.log('Starting node.js')

module.exports.addNote = () => {
  console.log('addNote');
  return 'New Note'
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
