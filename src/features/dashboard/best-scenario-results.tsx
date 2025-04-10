import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

export const BestScenarioResults = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(true);

  return (
    <Collapsible open={isSectionOpen} onOpenChange={setIsSectionOpen}>
      <div className='space-y-2'>
        <CollapsibleTrigger asChild>
          <div className='flex items-center justify-between cursor-pointer'>
            <div className='flex items-center gap-3'>
              <span className='text-scenario-icon text-xl'>✦</span>
              <h2 className='text-xl font-medium text-scenario'>
                Best Scenario Results
              </h2>
            </div>
            <div className='border border-scenario rounded-full px-3 py-1.5'>
              <ChevronDown
                className={`h-5 w-5 transition-transform text-scenario ${
                  isSectionOpen ? 'transform rotate-180' : ''
                }`}
              />
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className='space-y-2 mt-4'>
            <div className='rounded-lg border border-scenario-border bg-scenario-background p-4 text-sm text-scenario-foreground'>
              <div className='flex items-center justify-between'>
                <span>
                  The best found configuration based on profit is characterized
                  by 11 zones (max) with charging stations and 48 total number
                  of poles.
                </span>
                <Button variant='ghost' size='icon' className='h-8 w-8'>
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <div className='rounded-lg border border-scenario-border bg-scenario-background p-4 text-sm text-scenario-foreground'>
              <div className='flex items-center justify-between'>
                <span>
                  The best found configuration based on satisfied demand is
                  characterized by 11 zones (max) with charging stations and 48
                  total number of poles.
                </span>
                <Button variant='ghost' size='icon' className='h-8 w-8'>
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
