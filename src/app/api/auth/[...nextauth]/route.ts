import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Ensure both email and password are provided
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password');
        }

        // Fetch user from database
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          }
        });

        // If user not found or password not set, throw error
        if (!user || !user.password) {
          throw new Error('No user found with this email');
        }

        // Compare provided password with stored hashed password
        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) {
          throw new Error('Invalid password');
        }

        // Return user object if authentication is successful
        return user;
      }
    })
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'  // Use JWT for session strategy
  },
  callbacks: {
    async jwt({ token, user }) {
      // Attach user ID to token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach user ID to session
      if (token && token.id) {
        session.user = { ...session.user, id: token.id } as { id: string, name: string, email: string };
      }
      return session;
    }
  }
});

export { authHandler as GET, authHandler as POST };
