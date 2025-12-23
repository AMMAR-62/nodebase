import LoginForm from '@/features/auth/components/login-form';
import { requireUnAuth } from '@/lib/auth-utils';

const Page = async () => {
  await requireUnAuth();
  return (
    <div className='h-full flex items-center justify-center'>
        <LoginForm/>
    </div>
  )
}

export default Page;