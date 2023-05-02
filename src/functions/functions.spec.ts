import { test, describe, expect } from 'vitest';

describe('Serverless Functions ', () => {
  test('First Function ->  Should return status 200', async () => {
    const req = await fetch('http://localhost:3000/users');
    const status = req.status;
    expect(status).toEqual(200);
  });

  test('Create User Function -> Should return status code 201 and create a new user', async () => {
    const req = await fetch('http://localhost:3000/users/create', {
      method: 'POST',
      body: JSON.stringify({
        name: 'arison',
        username: 'arisonreiss',
      }),
    });
    const res = req.status;

    expect(res).toBe(201);
  });
});
