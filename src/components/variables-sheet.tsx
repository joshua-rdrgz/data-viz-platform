import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { FakeCollapsible } from '@/components/fake-collapsible';
import { VariablesSheetTopbar } from '@/features/variables/variables-sheet-topbar';
import { RotateCcw } from 'lucide-react';
import { VariablesSheetSelection } from '@/features/variables/variables-sheet-selection';
import { ScrollArea } from '@/components/ui/scroll-area';

export const VariablesSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='sm'>
          <RotateCcw className='h-4 w-4' />
          Edit Variables
        </Button>
      </SheetTrigger>
      <SheetContent className='min-w-[100vw] md:min-w-[700px] p-5'>
        <SheetHeader>
          <SheetTitle className='text-2xl'>Edit Variables</SheetTitle>
        </SheetHeader>
        <ScrollArea className='h-full w-full'>
          <div className='w-full px-4'>
            <VariablesSheetTopbar />
            <div className='mt-8 flex flex-col gap-4'>
              <VariablesSheetSelection />
              <FakeCollapsible title='Primary Variables' />
              <FakeCollapsible title='Secondary Variables' />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
