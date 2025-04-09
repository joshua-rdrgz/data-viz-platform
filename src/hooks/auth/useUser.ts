import { firebaseAuth } from '@/config/firebase';
import { queryKeys } from '@/lib/query-keys';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { onAuthStateChanged, UserCredential } from 'firebase/auth';
import { useEffect } from 'react';

/**
 * Custom hook to manage user authentication state
 *
 * This hook:
 * - Listens to Firebase auth state changes
 * - Utilizes localStorage to retrieve user data
 * - Returns the current user state and loading status
 */
export const useUser = () => {
  const queryClient = useQueryClient();

  /**
   * Effect to listen to Firebase auth state changes
   * - Updates React Query cache with user data
   * - Persists user data to localStorage
   * - Removes user data from cache and localStorage when user is not authenticated
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const userCredential: UserCredential = {
          user,
          providerId: user.providerData[0]?.providerId || null,
          operationType: 'signIn',
        };

        queryClient.setQueryData(queryKeys.auth.user, userCredential);
        localStorage.setItem('user', JSON.stringify(userCredential));
      } else {
        queryClient.setQueryData(queryKeys.auth.user, null);
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, [queryClient]);

  /**
   * React Query query to fetch and manage user authentication state
   * - Utilizes localStorage to retrieve user data
   * - Automatically syncs with Firebase auth state via useEffect
   */
  return useQuery({
    queryKey: queryKeys.auth.user,
    queryFn: () => {
      const storedUser = localStorage.getItem('user');

      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser) as UserCredential;
          queryClient.setQueryData(queryKeys.auth.user, parsedUser);
          return parsedUser;
        } catch (error) {
          console.error('Error parsing stored user:', error);
          localStorage.removeItem('user');
        }
      }

      return null;
    },
  });
};
