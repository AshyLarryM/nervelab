import { useQuery } from "react-query";

async function fetchReceivedEmails(userId: string | undefined) {
  const response = await fetch(`/api/mail/received/${userId}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export function useReceivedEmails(userId: string | undefined) {
  return useQuery(['receivedEmails', userId], () => fetchReceivedEmails(userId), {
    enabled: !!userId, // Only run the query if userId is available
  });
};
