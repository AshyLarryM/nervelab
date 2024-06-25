import { Prisma, User as PrismaUser } from '@prisma/client';

export type SafeUser = Omit<PrismaUser, 'password'>;

// export interface ApiResponsePayload<T=any> {
//   success: boolean,
//   errorMessage?: string,
//   data?: T,
// }

// export interface ApiResponsePayloadWithError<T=any> extends ApiResponsePayload<T> {
//   error?: any,
// }


// export type UserEmails = {
//   id: string;
//   name: string | null;
//   email: string;
//   sentEmails: Array<{
//     id: string;
//     subject: string;
//     body: string;
//     createdAt: Date;
//     replies: Array<{
//       id: string;
//       body: string;
//       createdAt: Date;
//     }>;
//   }>;
//   receivedEmails: Array<{
//     id: string;
//     subject: string;
//     body: string;
//     createdAt: Date;
//     replies: Array<{
//       id: string;
//       body: string;
//       createdAt: Date;
//     }>;
//   }>;
// };

// export interface ApiResponsePayload<T = any> {
//   success: boolean;
//   errorMessage?: string;
//   data: T;
// }

// export type UserEmails = {
//   id: string;
//   name: string | null;
//   email: string;
//   sentEmails: Array<{
//     id: string;
//     subject: string;
//     body: string;
//     createdAt: Date;
//     replies: Array<{
//       id: string;
//       body: string;
//       createdAt: Date;
//     }>;
//   }>;
//   receivedEmails: Array<{
//     id: string;
//     subject: string;
//     body: string;
//     createdAt: Date;
//     replies: Array<{
//       id: string;
//       body: string;
//       createdAt: Date;
//     }>;
//   }>;
// };

// export interface UserEmailResponse {
//   userEmails: UserEmails;
// }

// interface Email {
//   id: string;
//   subject: string;
//   body: string;
//   fromUserId: string;
//   toUserId: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface EmailWithReplies extends Email {
//   replies: Email[];
// }

// interface UserEmails {
//   id: string;
//   name: string;
//   email: string;
//   sentEmails: EmailWithReplies[];
//   receivedEmails: EmailWithReplies[];
// }

// export interface UserEmailResponse {
//   userEmails: UserEmails;
// }

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






// interface Reply {
//   id: string;
//   subject: string;
//   body: any;
//   createdAt: string;
//   updatedAt: string;
// }

// interface Email {
//   id: string;
//   subject: string;
//   body: any;
//   createdAt: string;
//   updatedAt: string;
//   replies: Reply[];
// }

// export interface UserEmails {
//   id: string;
//   name: string | null;
//   email: string | null;
//   sentEmails: Email[];
//   receivedEmails: Email[];
// }
