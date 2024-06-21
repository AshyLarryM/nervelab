export async function getUsers() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/admin/users`, {
    cache: 'no-store',
  });
  return res.json();
}
