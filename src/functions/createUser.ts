import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { IUserDTO } from '../@types/userDTO';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { name, username } = JSON.parse(event.body!) as IUserDTO;
  console.log(name, username);

  return {
    statusCode: 201,
    body: JSON.stringify({
      status: 'ok',
    }),
  };
};
