const request = require('supertest')
const app = require('../src/app')

test('should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Mohsen',
        email: 'mohsen@example.com',
        password: 'MyPass77!'
    }).expect(201)

})