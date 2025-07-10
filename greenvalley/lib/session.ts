'use server';
import { cookies } from 'next/headers';
import { redis } from './redis';

import crypto from 'crypto';

//Seven Days
const EXPIRATION_TIME = 60 * 60 * 24 * 7;
const COOKIE_SESSION_KEY = 'sessionId';

export async function createUserSession(userId: bigint | string) {
  const sessionId = crypto.randomBytes(512).toString('hex').normalize();
  await redis.set(`session:${sessionId}`, userId.toString(), {
    ex: EXPIRATION_TIME,
  });

  // Must stay within this, if you move to a helper function context will be lost
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_SESSION_KEY,
    value: sessionId,
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    expires: Date.now() + EXPIRATION_TIME * 1000,
  });
}
