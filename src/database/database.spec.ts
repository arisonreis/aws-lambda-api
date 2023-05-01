import { describe, expect, test, afterAll } from 'vitest';
import { db } from './database';

describe('Connecting with the database with the database', () => {
  test('Should connect with the database', async () => {
    const connection = await db.$connect();
    expect(connection).not.instanceOf(Error);
    afterAll(async () => {
      await db.$disconnect();
    });
  });
});
