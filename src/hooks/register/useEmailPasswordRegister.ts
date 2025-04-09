import { firebaseAuth } from '@/config/firebase';
import { queryKeys } from '@/lib/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export interface RegisterData {
  email: string;
  password: string;
}

async function performRegister({ email, password }: RegisterData) {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
}

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
