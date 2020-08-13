function odds(numbers, callback) {
    var oddNums = numbers.filter(function(n) { return (n % 2); });
    var err = numbers.indexOf(3) > -1 ? new Error('Los 3 no estan permitidos!') : console.log('El arreglo es valido');
    // Alternativamente
    /* if (numbers.indexOf(3) > -1) {
        new Error('Los 3 no estan permitidos!')
    } else {
        console.log('El arreglo es valido');
    } */
    console.log('Mensaje');

    setTimeout(function() {
        callback(err, oddNums);
    }, 5 * 1000);
}
var numbers = [1,2,4,5,6,7,8,9,10];



function myFunction(error, oddNums) {
    if (error) {
        throw error;
    } else {
        console.log('Odds: ', oddNums);
    }
}

odds (numbers, myFunction);

console.log('Este mensaje es llamado despues de la ejecucion de odds');
