import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useVariablesStore } from '@/stores/use-variables-store';

export const DashboardKpis = () => {
  const variables = useVariablesStore((state) => state.variables);
  const selectedVariables = variables.filter((variable) => variable.selected);

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
        {selectedVariables.map((variable) => (
          <Card key={variable.id} className='p-6 h-full'>
            <CardContent className='p-0 h-full flex flex-col'>
              <div className='mb-4'>
                <div className='text-lg font-medium text-white break-words'>
                  {variable.name}
                </div>
                <div className='text-xs text-gray-400 mt-1'>
                  {variable.description}
                </div>
              </div>
              <div className='text-2xl font-semibold self-end mt-auto'>
                {variable.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
