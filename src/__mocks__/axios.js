const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);


// Mock response cho cuộc gọi POST đến endpoint '/api/user/login'
mock.onPost('/api/user/login').reply(config => {
    const { email, password } = JSON.parse(config.data);
    if (email === 'coffeshop@gmail.com' && password === '123456789') {
        return [200, {
            success: true,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzhkN2QwNmZkMWY3MzMxMDI2MmQ5YyIsImlhdCI6MTcxNTQwMTc2NX0.tKw-N-kNinO0MYQQ7pR2KO5E-1IiH7IZRcWPTztEBhg'
        }];
    } else {
        return [200, {
            success: false,
            message: 'Invalid credentials'
        }];
    }
});
