import { Redis } from '@upstash/redis';

const getRedisURL = () => {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL;
  }

  throw new Error('REDIS_URL environment variable is not set');
};

export const redis = new Redis({
  url: getRedisURL(),
  token: process.env.REDIS_TOKEN,
});
