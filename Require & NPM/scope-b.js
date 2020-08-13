 
// Modo 1
/*console.log(three);
// Modo 2
console.log(module_a.seven());*/

var fs = require('fs');


var myFunction = function(err) {
    if (err) throw err;
    console.log('Datos guardos');
}

fs.appendFile('nombre.txt', 'Tu mensaje', myFunction);



var os = require('os');

console.log(os.userInfo());


const nombre = 'Omar';
const apellido = 'Gomez';

console.log(nombre, apellido);

console.log(nombre + ' ' + apellido);

console.log(`Tu nombre es: ${nombre} ${apellido}`);

console.log(`mi nombre es: ${os.userInfo().username}`);

fs.appendFile('nombre.txt', `mi nombre es: ${os.userInfo().username}`, myFunction);

var _ = require('lodash');

console.log(_.isString(`mi nombre es: ${os.userInfo().username}`)); 

//tarea: de un array imprimir solo los numeros pares

/*var arabigos = [1,2,3,4,5,6,7,8,9,0];

var pares = arabigos.filter((num) => {return (num % 2) === 0; });

console.log(pares);*/


