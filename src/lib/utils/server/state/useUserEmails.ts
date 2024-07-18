import { useQuery } from "react-query";
import { UserEmailResponse } from "../types";

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
