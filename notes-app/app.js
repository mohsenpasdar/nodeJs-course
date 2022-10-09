const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// customize yargs version
yargs.version('1.1.0')

// create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: 'note body',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title );
        console.log('Body: ' + argv.body);
    }
})

// create remove command 
yargs.command({
    command: 'remove',
    describe: 'remove a  note',
    handler: function () {
        console.log('Removing the note!');
    }
})

// create list command 
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function () {
        console.log('Listing out all notes!');
    }
})

// create read command 
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('Reading a note!');
    }
})

yargs.parse()

// console.log(yargs.argv);