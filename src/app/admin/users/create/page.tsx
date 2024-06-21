
import PageFrame from '@/components/layouts/PageFrame';
import { RegisterForm } from '../../../../components/form/RegisterForm';
import AdminPageFrame from '@/components/admin/AdminPageFrame';

export default async function CreateUser() {
  return (
    <AdminPageFrame showNavbar={true} showFooter={true} showParticles={true} >
      <RegisterForm />
    </AdminPageFrame >
  );
}
