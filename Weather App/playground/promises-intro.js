/* // Declarar una promesa
var somePromise = new Promise((resolve, reject) => {
    const delay = 4000;
    console.log(`starting delay of ${delay} seconds`);
    setTimeout(() => {
        var resolveObject = {
            message: 'Promise resolved',
            action: 'Something went well as expected'
        };
        var rejectObject = {
            message: 'Promise rejected',
            action: 'Something went wrong'
        };
        var isResolve = true;
        if (isResolve) {
            // Caso exitoso
            resolve(resolveObject);
        } else {
            // Case fallido
            reject(rejectObject);
        }
    }, delay);
});

// Llamar el codig de la promise
somePromise.then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, (loquesea) => {
    console.log(JSON.stringify(loquesea, undefined, 2));
});

console.log('Termina la ejecucion'); */

// ejemplo practico
var asyncAdd = ((a, b) => {
    return new Promise((resolve, reject) => {
        console.log('Starting delay of 6 seconds...');
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('cannot add numbers. arguments must be number');
            }
        }, 6000);
    });
});

//ejecutar promise pasando patrametros
/*asyncAdd(4, k).then((res) => {
    console.log(`result: ${res}`);
}, (res) => {
    console.log(res);
}); 

//TODO: crear una promise que concatene dos string y despues de que lo haga si lo realiza existosamente entonces
// que imprima los string concatenados
//si no es exitoso mandar mensaje de error al usuario

/*var asyncUnirStr = ((string1, string2) => {
    return new Promise((resolve, reject) => {
        console.log('Starting delay of 5 seconds...');
        setTimeout(() => {
            if (typeof string1 === 'string' && typeof string2 === 'string') {
                resolve(`${string1} ${string2}`);
            } else {
                reject('no pues mano');
            }
        }, 5000);
    });
});

asyncUnirStr('hola', 'que rollo').then((res) => {
    console.log(`message: ${res}`);
}, (res) => {
    console.log(res);
}); */

//cadena de promesas establecido logica para el resultado de la primera promesa (sin logica para la segunda promesa)
/*asyncAdd(3, 3).then((res) => {
    console.log(`Result: ${res}`);
    return asyncAdd(res, 4);
}, (res) => {
    console.log(res);
});*/

//cadena de promesas establecido logica para el resultado de la primera promesa y logica para el resultado de la segunda
/* asyncAdd(3, 3).then((res) => {
    console.log(`Result: ${res}`);
    return asyncAdd(res, g);
}, (res) => {
    console.log('fallo la primer promesa', res);
}).then((res) => {
    console.log(`Result: ${res}`);
}, (res) => {
    console.log('fallo la segunda promesa', res);
});
 */

// Cadena de promesas pero cachando el error en una sola callback
asyncAdd(2, 2).then((res) => {
    console.log(`Result: ${res}`);
    return asyncAdd(res, 6);
}).then((res) => {
    console.log(`Result: ${res}`);
    return asyncAdd(res, 6);
}).then((res) => {
    console.log(`Result: ${res}`);
}).catch((res) => {
    console.log('Cadena de promesas fallida:', res);
});

