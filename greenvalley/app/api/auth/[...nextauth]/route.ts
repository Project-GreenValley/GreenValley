import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/../lib/prisma';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      //does the user exists? throw an error
      if (!profile?.email) {
        throw new Error('Profile does not exist');
      }

      await prisma.users.upsert({
        //Finds user in db
        where: {
          email: profile.email,
        },
        //creates user in db
        create: {
          username: profile.email.split('@')[0],
          password: '',
          email: profile.email,
          name: profile.name,
        },
        //updates user in db
        update: {
          name: profile.name,
        },
      });
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
