import AdminPageFrame from '@/components/admin/AdminPageFrame';
import { EditUserForm } from '@/components/form/EditUserForm';

async function getUserDataById(id: string) {
  const url = `${process.env.NEXTAUTH_URL}/api/admin/users/${id}`;
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

export default async function EditUserPage({ params }: { params: { id: string } }) {
  const user = await getUserDataById(params.id);
  return (
    <AdminPageFrame>
      <EditUserForm initialData={user} />
    </AdminPageFrame>
  )
}
