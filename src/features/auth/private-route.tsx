import { Navigate, Outlet } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { useUser } from '@/hooks/auth/useUser';
import toast from 'react-hot-toast';

export const PrivateRoute = () => {
  const { data, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className='min-w-[100vw] min-h-[100vh] flex justify-center items-center'>
        <BarLoader />
      </div>
    );
  }

  if (!data?.user) {
    toast.error('Access Denied: Please log in!');
    return <Navigate to='/login' replace />;
  }

  return <Outlet />;
};
