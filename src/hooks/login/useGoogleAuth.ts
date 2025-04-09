import { firebaseAuth } from '@/config/firebase';
import { queryKeys } from '@/lib/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

/**
 * Authenticates a user using Google's OAuth provider through Firebase
 * - Creates a new GoogleAuthProvider instance
 * - Triggers a popup for Google sign-in
 * - Returns the authentication result from Firebase
 */
async function performGoogleAuth() {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(firebaseAuth, googleAuthProvider);
}

/**
 * React Query mutation hook for Google OAuth authentication
 * - Handles user login and updates query cache with user data
 * - Displays success/error notifications
 * - Navigates to dashboard on successful login
 * - Utilizes localStorage to store user data
 */
export const useGoogleAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: queryKeys.auth.google,
    mutationFn: performGoogleAuth,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.auth.user, data);
      localStorage.setItem('user', JSON.stringify(data));
      toast.success('Successfully logged in!');
      navigate('/dashboard');
    },
    onError: (error) => {
      toast.error('Failed to log in: ' + error.message);
    },
  });
};
