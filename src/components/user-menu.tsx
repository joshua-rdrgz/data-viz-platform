import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLogout } from '@/hooks/auth/useLogout';
import { useUser } from '@/hooks/auth/useUser';
import { Bell, CreditCard, LogOut, User, UserCircle } from 'lucide-react';

export function UserMenu() {
  const { data: user } = useUser();
  const { mutate: handleLogout } = useLogout();

  const userInitials = user?.user?.displayName
    ? user.user.displayName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : user?.user?.email?.split('@')[0].slice(0, 2).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='p-2.5 rounded-lg text-muted-foreground hover:text-sidebar-foreground'
        >
          <User className='size-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='min-w-[240px] rounded-lg'
        align='end'
        side='right'
        sideOffset={4}
      >
        <DropdownMenuLabel className='font-normal'>
          <div className='flex items-center gap-2'>
            <Avatar className='h-8 w-8'>
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>
                {user?.user?.displayName || 'User'}
              </p>
              <p className='text-xs leading-none text-muted-foreground'>
                {user?.user?.email}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserCircle className='mr-2 h-4 w-4' />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className='mr-2 h-4 w-4' />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className='mr-2 h-4 w-4' />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleLogout()}>
          <LogOut className='mr-2 h-4 w-4' />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
