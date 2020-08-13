const yargs = require ('yargs');

// imprimir todos los argumentos
console.log('Process', process.argv);

const arguments = yargs.argv;
//imprimir los argumentos del proceso con el uso del paqute yargs
console.log('Process', arguments);

const command = arguments._[0];

if (command === 'greet') {
    console.log('hi');
} else if (command === 'print') {
    console.log('this is a message');
}
