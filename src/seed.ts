import { Payload } from 'payload';
import { User } from './payload-types';

export const seed = async (payload: Payload): Promise<void> => {
  // This user will be created with the default role of `admin`
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev.ryan@test.com',
      password: 'test',
      roles: ['admin'],
    },
  });

  // This user will be created with the default role of `editor`
  await payload.create({
    collection: 'users',
    data: {
      email: 'test1.ryan@test.com',
      password: 'test',
      roles: ['editor'],
    },
  });
};
