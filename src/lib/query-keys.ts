export const queryKeys = {
  auth: {
    google: ['auth', 'google'] as const,
    user: ['auth', 'user'] as const,
    register: ['auth', 'register'] as const,
    login: ['auth', 'login'] as const,
    logout: ['auth', 'logout'] as const,
  },
} as const;
