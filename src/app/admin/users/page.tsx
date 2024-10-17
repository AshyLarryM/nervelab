'use client'

import AdminPageFrame from "@/components/admin/AdminPageFrame"
import UsersTable from "@/components/admin/UsersTable";

export default function Users() {
  return (
    <AdminPageFrame>
      <UsersTable />
    </AdminPageFrame >
  );
}

