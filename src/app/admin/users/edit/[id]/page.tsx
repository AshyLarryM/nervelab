import AdminPageFrame from '@/components/admin/AdminPageFrame';
import { EditUserForm } from '@/components/form/EditUserForm';


export default async function EditUserPage({ params }: { params: { id: string } }) {
  const user = await getUserDataById(params.id);
  return (
    <AdminPageFrame>
      <EditUserForm initialData={user} />
    </AdminPageFrame>
  );
}

async function getUserDataById(id: string) {
  const baseUrl = process.env.BASE_URL;
  console.log('BASE_URL:', baseUrl);

  if (!baseUrl) {
    throw new Error('BASE_URL environment variable is not defined');
  }

  const url = `${baseUrl}/api/admin/users/${id}`;
  console.log('Fetching user data from URL:', url);

  try {
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Error fetching user data:', errorText);
      throw new Error(`Failed to fetch user data: ${errorText}`);
    }

    const user = await res.json();
    console.log('Fetched user data:', user);
    return user;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw new Error('Failed to fetch user data');
  }
}