import { Prisma, User as PrismaUser } from '@prisma/client';

export type SafeUser = Omit<PrismaUser, 'password'>;



export interface User {
  name: string;
  email: string;
}

export interface Email {
  id: string;
  subject: string;
  body: string;
  fromUserId: string;
  toUserId: string;
  createdAt: string;
  updatedAt: string;
}

export interface DetailedEmail extends Email {
  fromUser: User;
  toUser: User;
  replies: Reply[];
}

export interface Reply {
  id: string;
  subject: string;
  body: string;
  emailId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface EmailWithReplies extends DetailedEmail {
  replies: Reply[];
}

export interface UserEmails {
  id: string;
  name: string;
  email: string;
  sentEmails: EmailWithReplies[];
  receivedEmails: EmailWithReplies[];
}

export interface UserEmailResponse {
  userEmails: UserEmails;
}