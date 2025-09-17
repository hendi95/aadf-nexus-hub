import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from '@/components/AuthContext';

export type ConnectionRequest = {
  id: string;
  fromName: string;
  fromType: 'alumni' | 'diaspora' | 'admin';
  toType: 'alumni' | 'diaspora' | 'admin';
  message?: string;
  time: string; // human friendly string
};

interface ConnectionsContextType {
  requests: ConnectionRequest[];
  sendRequest: (toType: 'alumni' | 'diaspora' | 'admin', opts?: { message?: string; fromNameOverride?: string }) => void;
  acceptRequest: (id: string) => void;
  declineRequest: (id: string) => void;
}

const ConnectionsContext = createContext<ConnectionsContextType | undefined>(undefined);

const LS_KEY = 'aadf_connect_requests_v1';

export const ConnectionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [requests, setRequests] = useState<ConnectionRequest[]>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? (JSON.parse(raw) as ConnectionRequest[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(requests));
  }, [requests]);

  const sendRequest: ConnectionsContextType['sendRequest'] = (toType, opts) => {
    if (!user) return;
    // alumni -> diaspora or diaspora -> alumni typical flow
    const req: ConnectionRequest = {
      id: crypto.randomUUID(),
      fromName: opts?.fromNameOverride ?? user.name,
      fromType: (user.type ?? 'alumni') as any,
      toType,
      message: opts?.message ?? 'wants to connect with you',
      time: 'just now'
    };
    setRequests((prev) => [req, ...prev]);
  };

  const acceptRequest = (id: string) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const declineRequest = (id: string) => {
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const value = useMemo(() => ({ requests, sendRequest, acceptRequest, declineRequest }), [requests]);

  return <ConnectionsContext.Provider value={value}>{children}</ConnectionsContext.Provider>;
};

export const useConnections = () => {
  const ctx = useContext(ConnectionsContext);
  if (!ctx) throw new Error('useConnections must be used within ConnectionsProvider');
  return ctx;
};
