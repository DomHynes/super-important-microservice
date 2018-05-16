const request = require('supertest');
const app = require('./app');

describe('Testing request to root of server', () => {
    test('Request should be 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    test('Request should say hello', async () => {
        const response = await request(app).get('/');
        expect(response.text).toContain('hello');
    });
})