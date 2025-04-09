import { PrivateRoute } from '@/features/auth/private-route';
import { DashboardPage } from '@/pages/dashboard-page';
import { FullErrorPage } from '@/pages/full-error-page';
import { LoginPage } from '@/pages/login-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { RegisterPage } from '@/pages/register-page';
import { createBrowserRouter, redirect } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    index: true,
    loader: () => redirect('/login'),
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <FullErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <FullErrorPage />,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
        errorElement: <FullErrorPage />,
      },
    ],
  },
]);
