import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';

export const DashboardKpis = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-3xl font-bold'>Key Performance Indicators</h2>
        <Button
          variant='outline'
          size='sm'
          className='flex items-center gap-1 dark:bg-main-background dark:border-sidebar-border'
        >
          Variables
          <Plus className='h-4 w-4' />
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-6 flex-grow'>
        <Card className='p-6 h-full'>
          <CardContent className='p-0 h-full flex flex-col'>
            <div className='mb-4'>
              <div className='text-lg font-medium text-white break-words'>
                Infrastructure Units
              </div>
              <div className='text-xs text-gray-400 mt-1'>
                This describes the variable and what the shown data means.
              </div>
            </div>
            <div className='text-2xl font-semibold self-end mt-auto'>
              €421.07
            </div>
          </CardContent>
        </Card>
        <Card className='p-6 h-full'>
          <CardContent className='p-0 h-full flex flex-col'>
            <div className='mb-4'>
              <div className='text-lg font-medium text-white break-words'>
                Charging Growth
              </div>
              <div className='text-xs text-gray-400 mt-1'>
                This describes the variable and what the shown data means.
              </div>
            </div>
            <div className='text-2xl font-semibold self-end mt-auto'>33.07</div>
          </CardContent>
        </Card>
        <Card className='p-6 h-full'>
          <CardContent className='p-0 h-full flex flex-col'>
            <div className='mb-4'>
              <div className='text-lg font-medium text-white break-words'>
                Localization change
              </div>
              <div className='text-xs text-gray-400 mt-1'>
                This describes the variable and what the shown data means.
              </div>
            </div>
            <div className='text-2xl font-semibold self-end mt-auto'>21.9%</div>
          </CardContent>
        </Card>
        <Card className='p-6 h-full'>
          <CardContent className='p-0 h-full flex flex-col'>
            <div className='mb-4'>
              <div className='text-lg font-medium text-white break-words'>
                Fleet growth
              </div>
              <div className='text-xs text-gray-400 mt-1'>
                This describes the variable and what the shown data means.
              </div>
            </div>
            <div className='text-2xl font-semibold self-end mt-auto'>7.03%</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
