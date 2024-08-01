import { useQuery, useQueryClient } from "react-query";
import { UserEmailResponse } from "../types";
import toast from "react-hot-toast";

async function fetchUserEmails (id: string): Promise<UserEmailResponse> {
  const response = await fetch(`/api/admin/users/emails/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export function useUserEmails(userId: string) {
  return useQuery<UserEmailResponse, Error>(['userEmails', userId], () => fetchUserEmails(userId));
}


export function useDeleteEmail() {
  const queryClient = useQueryClient();

  async function deleteEmail(userId: string, emailId: string) {
    try {
      const response = await fetch(`/api/admin/users/emails/${emailId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete email');
      }

      queryClient.invalidateQueries(['userEmails', userId]);
      toast.success('Email successfully deleted!')
    } catch (error) {
      console.error('Error deleting email:', error);
      toast.error(`An Error occurred while deleting the email`);
    }
  }

  return { deleteEmail };
}