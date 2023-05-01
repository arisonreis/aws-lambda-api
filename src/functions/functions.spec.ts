import { test, describe, expect } from 'vitest';

describe('Serverless Functions ', () => {
  test('First Function ->  Should return status 200', async () => {
    const req = await fetch('http://localhost:3000/users');
    const status = req.status;
    expect(status).toEqual(200);
  });

  test('Create User Function -> Should return status code 200 and json with data', async () => {
    const typeResponse = {
      status: 'ok',
    };

    const req = await fetch('http://localhost:3000/users/create', {
      method: 'POST',
      body: JSON.stringify({
        name: 'arison',
        username: 'arisonreisss',
      }),
    });
    const res = await req.json();

    expect(res).toEqual(typeResponse);
  });
});
