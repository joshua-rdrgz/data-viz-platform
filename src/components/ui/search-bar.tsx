import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div
      className={cn(
        'flex items-center bg-white/5 rounded-lg px-4 py-1 border border-sidebar-ring',
        className,
      )}
    >
      <Search className='h-4 w-4 text-muted-foreground mr-2' />
      <input
        type='text'
        placeholder='Search...'
        className='border-none outline-none text-sidebar-foreground placeholder:text-muted-foreground w-48 h-auto p-0 focus-visible:ring-0'
      />
    </div>
  );
};
