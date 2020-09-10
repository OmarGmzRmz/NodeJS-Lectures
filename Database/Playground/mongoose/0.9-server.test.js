// this file is for testing 0.8-server.js

const express = require('express');
const request = require('supertest');
const expect = require('expect');

const { 
    app, // This test file will test the app so we need ro require it in order to test it.
     Todo // This test file will only require the todo model and the User model.
     } = require('./0.8-server');

// Use a describe clack to make things look great on in the output

/* describe('POST /todos', () => {
    it ('Should create a new todo in the DB', (done) => {
        request(app)
        .post('/todos')
        .send({
            "title": "[test] Some title",
            "text": "some details about the todo",
            "category": "Test",
            "priority": 2
        })
        .expect(200)
        .expect((res) => {  // Expect allow us to access to response object
            expect(res.body.priority).toEqual(2);
        })
        .end((err, response) => {
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].priority).toBe(2);
                done();
            }, (err) => {
                done(err);
            });
        }); 
    });
});
 */
// Define code that will be executed before each test
beforeEach((done) => {
    Todo.remove({}).then(() => {
        done();
    }, (err) => {
        console.log(err);
    });
});
// With this, the todos collection is going to be empty before every request

describe('POST /todos', () => {
    it ('Should create a new todo in the DB', (done) => {
        request(app)
        .post('/todos')
        .send({
            "title": "[test] Some title",
            "text": "some details about the todo",
            "category": "Test",
            "priority": 2
        })
        .expect(200)
        .expect((res) => {  // Expect allow us to access to response object
            expect(res.body.priority).toEqual(2);
        })
        .end((err, response) => {
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].priority).toBe(2);
                done();
            }, (err) => {
                done(err);
            });
        }); 
    });
    it('Should not create the todo with invalid body data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, response) => {
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(0);
                done();
            }, (err) => {
                console.log(err);
                done(err);
            });
        });
    });
});
