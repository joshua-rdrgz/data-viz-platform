import { firebaseAuth } from '@/config/firebase';
import { LoginFormData } from '@/features/login/loginSchema';
import { queryKeys } from '@/lib/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

async function performLogin({ email, password }: LoginFormData) {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
}

export const useEmailPasswordAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: queryKeys.auth.login,
    mutationFn: performLogin,
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
