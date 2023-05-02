import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { IUserDTO } from '../@types/userDTO';
import { db } from '../database/database';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { name, username } = JSON.parse(event.body!) as IUserDTO;

  if (!name && !username) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: 'error',
        message: 'no tada received',
      }),
    };
  }

  const newUser = await db.user.create({
    data: {
      name: name,
      username: username,
    },
  });
  return {
    statusCode: 201,
    body: JSON.stringify({
      newUser,
    }),
  };
};
