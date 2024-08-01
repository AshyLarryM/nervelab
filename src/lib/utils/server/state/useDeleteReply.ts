import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

export function useDeleteReply() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>(
    async (replyId: string) => {
      const res = await fetch(`/api/admin/users/emails/replies/${replyId}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete reply');
      }
      toast.success('Reply Successfully Deleted!')
      return res.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('userEmails');
      },
    }
  );
}
