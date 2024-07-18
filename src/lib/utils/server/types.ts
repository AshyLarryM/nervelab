import { Prisma, User as PrismaUser } from '@prisma/client';

export type SafeUser = Omit<PrismaUser, 'password'>;



interface User {
  name: string;
  email: string;
}

interface Email {
  id: string;
  subject: string;
  body: string;
  fromUserId: string;
  toUserId: string;
  createdAt: string;
  updatedAt: string;
}

interface DetailedEmail extends Email {
  fromUser: User;
  toUser: User;
  replies: Reply[];
}

interface Reply {
  id: string;
  subject: string;
  body: string;
  emailId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface EmailWithReplies extends DetailedEmail {
  replies: Reply[];
}

interface UserEmails {
  id: string;
  name: string;
  email: string;
  sentEmails: EmailWithReplies[];
  receivedEmails: EmailWithReplies[];
}

export interface UserEmailResponse {
  userEmails: UserEmails;
}