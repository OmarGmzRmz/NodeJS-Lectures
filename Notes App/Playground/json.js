/*var info = require('./notes.json');
console.log(info);*/

//declarar objeto javascript
var person = {
    name: 'Omar', //conjunto llave valor :propiedad
    age: 21 //en este caso 'age' es la llave y '21' es el valor
};

console.log(person);
//ver el tipo de objeto
console.log(typeof person);
//convertir objeto de javascript en un objeto json
console.log(JSON.stringify(person));
console.log(typeof JSON.stringify(person) );

//redactar objeto de javascript como string:
var personString = '{"name": "omar", "age": 21}';
console.log(typeof personScript);
//convertir el objeto personString a un objeto de javascript
console.log(typeof JSON.parse(personString));
//ahora si ya podemos leer sus proiedades
console.log( JSON.parse (personString).name);

//requerir el paquete FileSystem para escribir en un archivo .json
var fs = require ('fs');

//crear objeto nota:

var note ={
    title:'lista',
    body: 'articulo A, articulo B'
};

//convertir el objeto nota a tipo JSON string para despues lo podamos escribir a un archivo .json

var noteString = JSON.stringify(note);
console.log(noteString);
//guardar la nota en notes.json utilizando el paqute fs:
fs.writeFileSync('./Playground/notes.json', noteString);
//leer lo guardado
var noteAsString = fs.readFileSync('./Playground/notes.json');
//pasa del buffer leido a u objeto Javascript
var note = (JSON.parse(noteAsString));
console.log(note);
//comprobar que se ha convertido adecuadamente

console.log(note.title);