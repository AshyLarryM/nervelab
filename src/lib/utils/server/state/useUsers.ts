import { useQuery, useMutation, useQueryClient } from 'react-query';
import { SafeUser } from '../types';

async function fetchUsers(): Promise<SafeUser[]> {
  const response = await fetch('/api/admin/users', {
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useUsers() {
  return useQuery<SafeUser[], Error>('users', fetchUsers);
}

async function updateUser(id: string, name: string, email: string, role: string): Promise<SafeUser> {
  const response = await fetch('/api/admin/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, name, email, role }),
  });

  if (!response.ok) {
    throw new Error('Error updating user');
  }

  const data = await response.json();
  return data;
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation(
    (user: { id: string; name: string; email: string; role: string }) => updateUser(user.id, user.name, user.email, user.role),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('users');
      },
    }
  );
}
