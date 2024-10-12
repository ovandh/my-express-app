const request = require('supertest');
const server = require('../server');

Test('GET /', async () => {
  const response = await request(server).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello World!');
});

// Run the test
