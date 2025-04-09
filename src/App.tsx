import { Providers } from '@/config/providers';
import { router } from '@/config/router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
