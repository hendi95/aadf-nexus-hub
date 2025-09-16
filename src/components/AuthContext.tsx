import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserType = 'alumni' | 'diaspora' | 'admin' | null;

interface User {
  id: string;
  username: string;
  type: UserType;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: Record<string, User> = {
  alumni: {
    id: '1',
    username: 'alumni',
    type: 'alumni',
    name: 'John Smith',
    email: 'john.smith@email.com',
    avatar: '/api/placeholder/64/64'
  },
  diaspora: {
    id: '2',
    username: 'diaspora',
    type: 'diaspora',
    name: 'Maria Doe',
    email: 'maria.doe@email.com',
    avatar: '/api/placeholder/64/64'
  },
  admin: {
    id: '3',
    username: 'admin',
    type: 'admin',
    name: 'AADF Staff',
    email: 'admin@aadf.org',
    avatar: '/api/placeholder/64/64'
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    if (password === 'User123' && mockUsers[username]) {
      setUser(mockUsers[username]);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};