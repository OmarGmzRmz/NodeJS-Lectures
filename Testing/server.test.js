const request = require('supertest');
const expect = require('expect'); // Library to make assertions

const app = require('./server').app;

describe('Server', () => { // Probar test suite

    // Assertion
    it('should return Hello world', (done) => {
        request(app).get('/')
            .expect(200)
            .expect('Hello world!')
            .end(done);
    });

    it('should return Hello world', (done) => {
        request(app).get('/')
            .expect(200)
            .expect('Hello world')
            .end(done);
    });

    it('should return 404 status', (done) => {
        request(app).get('/PageNotFound')
            .expect(404)
            .expect({
                error: 'Page not found.'
            })
            .end(done);
    });

    it('should return 409 status', (done) => {
        request(app).get('/someRoute')
            .expect(409)
            .expect((response) => {
                //Here we have access to the response object
                
                // Make a custom assertion:
                expect(response.body.error).toEqual('There was a conflict with your request');
            })
            .end(done);
    });

    it('should return 200 status', (done) => {
        request(app).get('/users')
            .expect(200)
            .expect((response) => {
                expect(response.body.length[2]).toEqual();
            })
            .end(done);
    });

    //TODO: tarea
    // ***1. Programar otra assertion para la ruta users 
    // ***2. la assertion tiene que ser satisfactoria y tienes que comprobar que la respuesta tenga un status 200
    // 3. Comprobar que el cuerpo de la respuesta sea un arreglo
    // 4. Comprobar que el arreglo tiene dos elementos (Hint: arr.length devuelve la cantidad de objetos en el arreglo) 
    // 5. Subir el resultado en git tanto a master como a feature/x (localmente)
});
