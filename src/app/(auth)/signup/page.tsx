import RegisterForm from '@/features/auth/components/register-form'
import { requireUnAuth } from '@/lib/auth-utils'
import React from 'react'

const Page = async () => {
  await requireUnAuth();
  return (
    <div className='h-full flex items-center justify-center'>
        <RegisterForm/>
    </div>
  )
}

export default Page