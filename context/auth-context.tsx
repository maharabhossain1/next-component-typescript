'use client';

import { createContext, useContext } from 'react';

export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  phone: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: {
    avatar_url: string;
    email: string;
    full_name: string;
    name: string;
    picture: string;
  };
};

type AuthContextValue = {
  user: User | null;
};

const AuthContext = createContext<AuthContextValue | null>({ user: null });

export const AuthProvider = ({
  children,
  user
}: {
  children: React.ReactNode;
  user: User | null;
}) => {
  const value: AuthContextValue = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
