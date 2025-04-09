import { queryClient } from '@/config/react-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        containerClassName='react-hot-toast'
        position='top-center'
        reverseOrder={false}
      />
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
