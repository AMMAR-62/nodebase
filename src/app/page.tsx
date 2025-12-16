import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'
import { cn } from '@/lib/utils'

import React from 'react'

const Page = async () => {
  const users = await prisma.user.findMany()
  return (
    <div className={cn('min-h-screen min-w-screen flex items-center justify-center')}>
      <Button variant={'outline'}>{JSON.stringify(users)}</Button>
    </div>
  )
}

export default Page