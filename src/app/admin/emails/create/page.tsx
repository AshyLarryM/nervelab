'use client'
import AdminPageFrame from '@/components/admin/AdminPageFrame'
import { EmailForm } from '@/components/form/EmailForm'


export default function CreateEmail() {
  return (
    <AdminPageFrame>
      <EmailForm />
    </AdminPageFrame>
  )
}
