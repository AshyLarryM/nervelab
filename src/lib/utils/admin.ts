
import { Session } from 'next-auth';

export function isAdmin (session: Session | null): boolean {
  return session?.user?.role === 'Admin';
};

export function isUser(session: Session | null): boolean {
  return session?.user?.role === 'User';
};
