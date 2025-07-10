/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import prisma from '../../lib/prisma';
import { generateSalt, hashPassword } from '../../lib/hashing';
import { Users } from '../../lib/types';
import { createUserSession } from '../../lib/session';

export async function createUser(formdata: FormData) {
  try {
    const hashedPassword = await hashPassword(
      formdata.get('password') as string,
      generateSalt()
    );
    await prisma.users.create({
      data: {
        name: formdata.get('name') as string,
        email: formdata.get('email') as string,
        password: hashedPassword,
      },
    });
    const user: Users[] = await prisma.users.findMany({
      where: {
        email: formdata.get('email') as string,
      },
    });
    return await createUserSession(user[0].id);
  } catch (e) {
    console.error('Error creating user:', e);
  }
}

export async function findUser(userEmail: string) {
  console.log('Finding user with email:', userEmail);
  try {
    const user: Users[] = await prisma.users.findMany({
      where: {
        email: userEmail,
      },
    });

    return user[0];
  } catch (e) {
    console.log('Error finding user:', e);
    return null;
  }
}
