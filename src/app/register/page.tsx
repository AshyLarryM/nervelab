
import PageFrame from '@/components/layouts/PageFrame';
import { RegisterForm } from '../../components/form/RegisterForm';

export default async function RegisterPage() {
  return (
    <PageFrame showNavbar={true} showFooter={true}>
      <RegisterForm />
    </PageFrame>
  );
}
