import { firebaseAuth } from '@/config/firebase';
import { queryKeys } from '@/lib/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

/**
 * React Query mutation hook for user logout
 * - Handles user logout and clears query cache
 * - Displays success/error notifications
 * - Navigates to login page on successful logout
 * - Clears localStorage
 */
export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: queryKeys.auth.logout,
    mutationFn: () => signOut(firebaseAuth),
    onSuccess: () => {
      // Set a flag to indicate a deliberate logout is in progress
      localStorage.setItem('deliberateLogout', 'true');

      queryClient.setQueryData(queryKeys.auth.user, null);
      localStorage.removeItem('user');
      toast.success('Successfully logged out!');
      navigate('/login');

      // Push flag removal to the end of the event queue, after React's
      // rendering cycle completes. This ensures the flag exists when
      // PrivateRoute re-renders due to the user data being cleared.
      setTimeout(() => {
        localStorage.removeItem('deliberateLogout');
      }, 100);
    },
    onError: (error) => {
      toast.error('Failed to log out: ' + error.message);
    },
  });
};
