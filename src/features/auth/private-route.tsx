import { Navigate, Outlet } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { useUser } from '@/hooks/auth/useUser';
import toast from 'react-hot-toast';

export const PrivateRoute = () => {
  const { data, isLoading } = useUser();

  console.log('PRIVATE ROUTE');

  // Show a loading spinner while the user is being authenticated
  if (isLoading) {
    return (
      <div className='min-w-[100vw] min-h-[100vh] flex justify-center items-center'>
        <BarLoader />
      </div>
    );
  }

  // If the user is not authenticated, show an error message and redirect to the login page
  if (!data?.user) {
    // Check if this is a deliberate logout
    const isDeliberateLogout =
      localStorage.getItem('deliberateLogout') === 'true';

    // Only show the error toast if this is not a deliberate logout
    if (!isDeliberateLogout) {
      toast.error('Access Denied: Please log in!');
    }

    return <Navigate to='/login' replace />;
  }

  // If the user is authenticated, show the protected route
  return <Outlet />;
};
