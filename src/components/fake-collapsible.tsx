import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FakeCollapsibleProps {
  title?: string;
}

export const FakeCollapsible = ({
  title = 'Primary Variables',
}: FakeCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className='px-7 py-3'>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className='space-y-1'>
          <CollapsibleTrigger asChild>
            <div className='flex items-center justify-between cursor-pointer'>
              <h2 className='text-xl font-medium text-scenario'>{title}</h2>
              <div className='border border-scenario rounded-full px-3 py-1.5'>
                <ChevronDown
                  className={`h-5 w-5 transition-transform text-scenario ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='mt-4 px-1'>
              <p className='text-sm text-foreground'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </Card>
  );
};
