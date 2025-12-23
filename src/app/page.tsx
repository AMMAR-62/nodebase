import { Button } from '@/components/ui/button';
import { requireAuth } from '@/lib/auth-utils';
import { cn } from '@/lib/utils'
import { caller } from '@/trpc/server';
import { LogoutButton } from './logout';
const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();
 
  return (
    <div className={cn('min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6')}>
      Protected Server Component
      <div>
        {JSON.stringify(data, null, 2)}
      </div>
      <LogoutButton></LogoutButton>
      
    </div>
  )
}

export default Page