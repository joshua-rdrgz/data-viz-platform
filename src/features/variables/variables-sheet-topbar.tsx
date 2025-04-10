import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/ui/search-bar';
import { RefreshCcw, Sparkles } from 'lucide-react';

export const VariablesSheetTopbar = () => {
  return (
    <div className='flex items-center justify-between gap-2 mt-4'>
      <SearchBar className='flex-1' />
      <div className='flex items-center gap-2'>
        <Button variant='outline' size='sm' className='w-32'>
          <Sparkles className='h-4 w-4' />
          Autofill
        </Button>
        <Button size='sm' className='w-32 border !border-primary-border'>
          <RefreshCcw className='h-4 w-4' />
          Rerun
        </Button>
      </div>
    </div>
  );
};
