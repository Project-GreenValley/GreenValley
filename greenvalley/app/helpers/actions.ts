'use server';
import prisma from '../../lib/prisma';
import {
  comparePasswords,
  generateSalt,
  hashPassword,
} from '../../lib/hashing';
import { Users } from '../../lib/types';
import { createUserSession, deleteUserSession } from '../../lib/session';
import { redirect } from 'next/navigation';

export async function createUser(formdata: FormData) {
  try {
    const salt = generateSalt();
    const hashedPassword = await hashPassword(
      formdata.get('password') as string,
      salt
    );
    await prisma.users.create({
      data: {
        name: formdata.get('name') as string,
        email: formdata.get('email') as string,
        password: hashedPassword,
        salt: salt,
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
  } finally {
    redirect('/');
  }
}
export async function signInUser(formdata: FormData) {
  try {
    const email = formdata.get('email') as string;
    const password = formdata.get('password') as string;

    const user: Users[] = await prisma.users.findMany({
      where: {
        email: email,
      },
    });

    if (user === null) {
      return console.error('User not found');
    }

    const isCorrectPassword = await comparePasswords({
      hashedPassword: user[0].password,
      password: password,
      salt: user[0].salt,
    });

    if (!isCorrectPassword) {
      return console.error('Incorrect password');
    }

    return await createUserSession(user[0].id);
  } catch (e) {
    console.error('Trouble signing user in: ', e);
  } finally {
    //for some reason redirect internally throws an error so it needs to be called outside the block
    redirect('/');
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

export async function signoutUser() {
  await deleteUserSession();
  redirect('/');
}
