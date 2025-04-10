import { FakeCollapsible } from '@/components/fake-collapsible';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { VariablesSheetSelection } from '@/features/variables/variables-sheet-selection';
import { VariablesSheetTopbar } from '@/features/variables/variables-sheet-topbar';

export const VariablesSheet = ({ children }: React.PropsWithChildren) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='min-w-full md:min-w-[700px] p-5 overflow-y-auto'>
        <SheetHeader>
          <SheetTitle className='text-2xl'>Edit Variables</SheetTitle>
        </SheetHeader>
        <div className='w-full px-4'>
          <VariablesSheetTopbar />
          <div className='mt-8 flex flex-col gap-4'>
            <VariablesSheetSelection />
            <FakeCollapsible title='Primary Variables' />
            <FakeCollapsible title='Secondary Variables' />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
