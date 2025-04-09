import { firebaseAuth } from '@/config/firebase';
import { RegisterFormData } from '@/features/register/registerSchema';
import { queryKeys } from '@/lib/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

/**
 * Performs email/password registration using Firebase
 * - Creates a new user with the provided email and password
 * - Returns the authentication result from Firebase
 */
async function performRegister({ email, password }: RegisterFormData) {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
}

/**
 * React Query mutation hook for email/password registration
 * - Handles user registration and updates query cache with user data
 * - Displays success/error notifications
 * - Navigates to dashboard on successful registration
 * - Utilizes localStorage to store user data
 */
export const useEmailPasswordRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: queryKeys.auth.register,
    mutationFn: performRegister,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.auth.user, data);
      localStorage.setItem('user', JSON.stringify(data));
      toast.success('Successfully registered!');
      navigate('/dashboard');
    },
    onError: (error) => {
      toast.error('Failed to register: ' + error.message);
    },
  });
};
