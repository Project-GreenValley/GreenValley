'use server';
import { cookies } from 'next/headers';
import { redis } from './redis';

import crypto from 'crypto';
import { Users } from './types';
import prisma from './prisma';

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
    secure: false, //currently wont keep cookies on DNS server because this is set to true
    httpOnly: true,
    sameSite: 'lax',
    expires: Date.now() + EXPIRATION_TIME * 1000,
  });
}

export async function deleteUserSession() {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get(COOKIE_SESSION_KEY)?.value;
    if (sessionId === null) return null;

    await redis.del(`session:${sessionId}`);
    cookieStore.delete(COOKIE_SESSION_KEY);
  } catch (e) {
    console.error('Had issues deleting user ', e);
  }
}

export async function getUserSession() {
  const cookieStore = await cookies();
  try {
    const sessionId = cookieStore.get(COOKIE_SESSION_KEY)?.value;
    if (!sessionId) {
      return null;
    }

    return getUserBySessionId(sessionId);
  } catch (e) {
    console.error('Could get cookie: ', e);
    return null;
  }
}

async function getUserBySessionId(sessionId: string) {
  try {
    const rawUser: string | null = await redis.get(`session:${sessionId}`);
    if (!rawUser) {
      return null;
    }
    const user: Users[] = await prisma.users.findMany({
      where: {
        id: BigInt(rawUser),
      },
    });
    return user[0];
  } catch (e) {
    console.error('Error gathering user from session ', e);
    return null;
  }
}
