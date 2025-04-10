import { Button } from '@/components/ui/button';
import { VariablesSheet } from '@/components/variables-sheet';
import { Download, RefreshCcw, Zap } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <div className='flex items-center justify-between pt-4'>
      <div className='flex items-center gap-3'>
        <Zap className='h-8 w-8' />
        <h1 className='text-4xl font-semibold'>Charging Station</h1>
      </div>
      <div className='flex items-center gap-2'>
        <Button variant='outline' size='sm'>
          <RefreshCcw className='h-4 w-4' />
        </Button>
        <VariablesSheet />
        <Button variant='outline' size='sm'>
          <Download className='h-4 w-4' />
          Export
        </Button>
      </div>
    </div>
  );
};
